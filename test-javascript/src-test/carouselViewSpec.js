describe("carouselView", function() {

    var container;
    var view;
    var numberOfMovies;

    beforeEach(function() {

        loadFixtures('carouselView.html');
        container = $('.carousel_list_container');
        container.css('width', '760px');
        container.css('margin', '0px');
        numberOfMovies = container.find(".carousel_item").length;
        view = new CarouselView({container: container});
    });

    it('has shiftLeft and shiftRight methods', function() {

        expect(view.shiftLeft).toBeDefined();
        expect(view.shiftRight).toBeDefined();
    });
//
//    it('check container structure', function() {
//        expect(container.find(".mask").length).toBe(1);
//        expect(container.find(".mask").find(".carousel_runner").length).toBe(1);
//        expect(container.find(".carousel_runner").length).toBe(1);
//    });
//
//    it('runner contains movie items', function() {
//        var runner = container.find(".carousel_runner")
//        expect(runner.find(".carousel_item").length).toBeGreaterThan(0);
//    });
//
//    it('check dynamic width of inner mask is calculated correctly', function() {
//        expect(container.find(".mask").width()).toBe(760)
//    });
//
//    it('check the runner encompasses all video', function() {
//        var widthOfSingleItem = 190;
//        var totalWidthOfAllItem = container.find(".carousel_item").length * widthOfSingleItem;
//        expect(container.find(".carousel_runner").width()).toBe(totalWidthOfAllItem);
//    });
//
//    it('carousel should have enough clones to allow paging. carousel has additional clones n2 clones. One set before, one set after', function() {
//        var totalItems = container.find(".carousel_item").length;
//        var expectedNumberOfMovies = numberOfMovies*3;
//        expect(totalItems).toBe(expectedNumberOfMovies);
//    });
//
//    it('when the runner is setup it should present real movies first (no clones)', function()
//    {
//        var runnerLeft = container.find(".carousel_runner").position().left;
//        expect(view.getLeftPosOfRunner()).toBe(0);
//        var expectedLeft = -3420;
//        expect(runnerLeft).toBe(expectedLeft);
//    });
//
//    it('has getRunnerLeft function that returns the position of the first original element in the runner', function() {
//        var runnerLeftBefore = container.find(".carousel_runner").position().left + 3420;
//        expect(runnerLeftBefore).toBe(view.getLeftPosOfRunner());
//    });
//
//    it('as a user if I navigate left I should be presented with a new page', function()
//    {
//        var runnerLeftBefore = view.getLeftPosOfRunner();
//        var runnerWidth = 760;
//        view.shiftLeft();
//        var runnerLeftAfter = view.getLeftPosOfRunner();
//        var expectedRunnerLeft = runnerLeftBefore - runnerWidth;
//        expect(expectedRunnerLeft).toBe(runnerLeftAfter);
//    });
//
//    it('as a user if I navigate right I should be presented with the next page', function() {
//        var runnerLeftBefore = view.getLeftPosOfRunner();
//        var runnerWidth = 760;
//        view.shiftRight();
//        var runnerLeftAfter = view.getLeftPosOfRunner();
//        var expectedRunnerLeft = runnerLeftBefore + runnerWidth;
//        expect(expectedRunnerLeft).toBe(runnerLeftAfter);
//    });
//
//    it('can detect when we are displaying only clones when shifting left', function() {
//        expect(view.isOnlyShowingClones()).toBeFalsy();
//        view.shiftRight();
//        expect(view.isOnlyShowingClones()).toBeTruthy();
//    });
//
//    it('can detect when we are displaying only clones when shifting right', function() {
//        for (var i = 0; i < 5; i++) {
//            expect(view.isOnlyShowingClones()).toBeFalsy();
//            view.shiftLeft();
//        }
//        expect(view.isOnlyShowingClones()).toBeTruthy();
//    });
//
//    it('can reset the runner position to display the original items when shifted off the right', function() {
//        view.shiftRight();
//        expect(view.runnerIsOnTheLeftClone()).toBeTruthy();
//        expect(view.runnerIsOnTheRightClone()).toBeFalsy();
//        view.resetRunnerPosition();
//        expect(view.getLeftPosOfRunner()).toBe(-2660); // 3420-760
//    });
//
//    it('can reset the runner position to display the original items when shifted off the left', function() {
//        for(var i = 0; i < 5; i++)
//            view.shiftLeft();
//        view.resetRunnerPosition();
//        expect(view.getLeftPosOfRunner()).toBe(-380); // 3800-3420
//    });
//
//    it("can check number of runner clones made", function() {
//        expect(view.numberOfClones).toBe(2);
//    });
//
//    it('make enough clones to cover visible width * 2 on either side of the list', function() {
//        loadFixtures("carouselViewWithFewItems.html");
//        container = $('.carousel_list_container');
//        numberOfMovies = container.find(".carousel_item").length;
//        view = CarouselView({container: container});
//        expect(view.numberOfClones).toBe(4);
//    });
//
//
//    it('can validate the changes of the sizes depending on the mask on SMALL'), function(){
//        window.resizeTo(320,600); // resizeTo not working on FF ?
//        $(window).resize(function() {
//            var win = $(window).width();
//            var mask = $('.mask').width();
//            expect(win.toBeLessThan(mask));
//        });
//    }
//
//    it('can validate the changes of the sizes depending on the mask on MEDIUM'), function(){
//        window.resizeTo(600,600);
//        $(window).resize(function() {
//            var win = $(window).width();
//            var mask = $('.mask').width();
//            expect(win.toBeLessThan(mask));
//        });
//    }
//
//    it('can validate the changes of the sizes depending on the mask on LARGE'), function(){
//        window.resizeTo(1000,600);
//        $(window).resize(function() {
//            var win = $(window).width();
//            var mask = $('.mask').width();
//            expect(win.toBeLessThan(mask));
//        });
//    }
//
//    it('can validate the changes of the sizes depending on the mask XLARGE'), function(){
//        window.resizeTo(1300,600);
//        $(window).resize(function() {
//            var win = $(window).width();
//            var mask = $('.mask').width();
//            expect(win.toBeLessThan(mask));
//        });
//    }

});
