var CarouselView = function(_options) {
    var self = this;

    var movieItems;
    var singleMovieWidth;
    var runner;
    var nav;
    var numberOfMoviesToShow;
    var mask;
    var originalRunnerWidth;
    var options = _options;
    var container = options.container;
    var inMotion = false;
    var hidden = false;
    var copies = 1;

    var init = function() {

        container.append("<div class='mask' />");
        nav = container.parent().find("nav");
        mask = container.find(".mask");
        runner = container.find(".carousel_runner");
        mask.append(runner);

        movieItems = runner.find(".carousel_item");
        singleMovieWidth = movieItems.first().outerWidth(true);
        originalRunnerWidth = (movieItems.length * singleMovieWidth);

        setMaskWidth();
        buildMovieClones();
        setRunnerWidth();
        setLeftPosOfRunner(0);

        resizeMaskWidth();
    };

    var resizeMaskWidth = function(){

        jQuery(window).resize(function(){
            setMaskWidth();
        });
    };

    var setRunnerWidth = function() {

        var cumulativeWidthOfMovieItems = originalRunnerWidth * (self.numberOfClones + 1);
        runner.width(cumulativeWidthOfMovieItems);
    };

    var setMaskWidth = function() {

        var maskWidth = singleMovieWidth * calculateNumberOfMoviesToShow();
        mask.width(maskWidth);
        checkWidth();
    };

    var checkWidth = function() {

        var w = mask.width();

        if (w >= originalRunnerWidth && !hidden) {
            nav.hide();
            hidden = true;
        } else if(w < originalRunnerWidth && hidden) {
            nav.show();
            hidden = false;
        }
    };

    var calculateNumberOfMoviesToShow = function() {

        numberOfMoviesToShow = Math.floor(container.width() / singleMovieWidth);
        var numberOfMoviesAvailable = movieItems.length;

        if (numberOfMoviesAvailable <= numberOfMoviesToShow) {
            numberOfMoviesToShow = numberOfMoviesAvailable;
        }

        return numberOfMoviesToShow
    };

    self.numberOfClones = 0;

    var createRunnerClone = function() {
        self.numberOfClones++;
        return movieItems.clone().addClass("clone");
    };

    var buildMovieClones = function() {

        var copies = Math.floor((mask.width() * 2) / originalRunnerWidth) + 1;

        while(self.numberOfClones < copies * 2) {
            runner.prepend(createRunnerClone());
            runner.append(createRunnerClone());
        }
    };

    var getLeftOffset = function() {
        return originalRunnerWidth * (self.numberOfClones / 2);
    };

    var setLeftPosOfRunner = function(leftPositionInPx, animate) {

        var leftProperty = leftPositionInPx - getLeftOffset() + 'px';

        if (options.animate && animate) {  // UNTESTED CODE!!!!! - refactor with care
            runner.animate({left: leftProperty}, {duration: 500, complete: function() {
                self.resetRunnerPosition();
                inMotion = false;
            }});
        } else {
            runner.css("left", leftProperty);
            inMotion = false;
        }
    };


    self.shiftLeft = function() {
        if (!inMotion) {
            inMotion = true;
            setLeftPosOfRunner(self.getLeftPosOfRunner() - mask.width(), 'animate');
        }
    };

    self.getLeftPosOfRunner = function() {
        return runner.position().left + getLeftOffset();
    };

    self.shiftRight = function() {

        if(!inMotion) {
            inMotion = true;
            setLeftPosOfRunner(self.getLeftPosOfRunner() + mask.width(), 'animate');
        }
    };

    self.runnerIsOnTheLeftClone = function() {
        return (self.getLeftPosOfRunner() >= mask.width());
    };

    self.runnerIsOnTheRightClone = function() {
        return (self.getLeftPosOfRunner() <= -originalRunnerWidth);
    };

    self.isOnlyShowingClones = function() {
        return (self.runnerIsOnTheLeftClone() || self.runnerIsOnTheRightClone());
    };

    self.resetRunnerPosition = function() {
        if (self.runnerIsOnTheLeftClone()) {
            setLeftPosOfRunner(self.getLeftPosOfRunner() - originalRunnerWidth);
        } else if (self.runnerIsOnTheRightClone()) {
            setLeftPosOfRunner(self.getLeftPosOfRunner() + originalRunnerWidth);
        }
    };

    init();
    return self;
};

var initCarousel = function() {
    var section = $('section.carousel').last();
    var container = section.find('.carousel_list_container');
    section.css('display', 'block');

    var carousel = new CarouselView({
        container: $(container),
        animate: true
    });

    section.find('.nav_left').bind("click", function() {
        carousel.shiftRight();
    });

    section.find('.nav_right').bind("click", function() {
        carousel.shiftLeft();
    });

};

