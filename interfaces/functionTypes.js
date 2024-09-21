/* Interfaces can represent a function type

    # NOTE : function as property and function as type is different
             we can define multiple function properties but only one function type with an interface

*/
var format; //format function of StringFormat func type
format = function (str, isUpper) {
    return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};
console.log(format('hi', true));
