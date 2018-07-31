var Snakeview = require("nativescript-snakeview").Snakeview;
var snakeview = new Snakeview();

describe("greet function", function() {
    it("exists", function() {
        expect(snakeview.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(snakeview.greet()).toEqual("Hello, NS");
    });
});