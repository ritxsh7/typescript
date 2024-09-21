function makeTshirt(size, text) {
    console.log("Your request for a T Shirt with size ".concat(size, " and text '").concat(text, "' to be printed on it is accepted"));
}
makeTshirt("M", "Hello world");
makeTshirt("XL", "Code in Typescript");
function makeTshirtModified(size, text) {
    if (size === void 0) { size = "L"; }
    if (text === void 0) { text = "I love typescript"; }
    console.log("Your request for a T Shirt with size ".concat(size, " and text '").concat(text, "' to be printed on it is accepted"));
}
makeTshirtModified();
makeTshirtModified("M");
makeTshirtModified("S", "Hello world");
