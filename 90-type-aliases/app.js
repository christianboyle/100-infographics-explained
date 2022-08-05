// https://dev.to/toluagboola/type-aliases-vs-interfaces-in-typescript-3ggg
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var user = {
    id: 12345,
    name: "Christian",
    age: 40,
    gender: "male",
    isWebDev: true
};
var numbers = [1, 8, 9];
var Base = /** @class */ (function () {
    function Base() {
    }
    Base.prototype.greetFriend = function () {
        console.log("Hello!");
    };
    return Base;
}());
// New class that extends Base class and implements the Derived interface
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewClass.prototype.giveGist = function () {
        console.log("I saw this the other day...");
    };
    return NewClass;
}(Base));
var c = new NewClass();
console.log(c.greetFriend()); // Hello!
console.log(c.giveGist()); // I saw this the other day...
