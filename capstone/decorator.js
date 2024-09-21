function ParameterLogger(target, methodName, parameterIndex) {
    var method = target[methodName];
    target[methodName] = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var paramValue = args[parameterIndex];
        console.log("Parameter is at index ".concat(parameterIndex, " with value: ").concat(paramValue));
        return method.apply(this, args);
    };
}
var Decorator = /** @class */ (function () {
    function Decorator() {
    }
    Decorator.prototype.display = function (message) {
        console.log("Display method called");
    };
    return Decorator;
}());
console.log("Parameter is at index ".concat(0, " with value: ").concat("Hello"));
var dec = new Decorator();
dec.display("Hello");
