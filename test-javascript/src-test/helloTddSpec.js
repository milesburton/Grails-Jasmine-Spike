describe('Hello tdd', function() {

    it("says hello", function() {
        expect(helloTdd()).toEqual("Hello tdd!");
    });



    it("says world", function() {
        expect(helloTdd()).toContain("tdd");
    });

});