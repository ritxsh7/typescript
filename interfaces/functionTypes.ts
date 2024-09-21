/* Interfaces can represent a function type 

    # NOTE : function as property and function as type is different
             we can define multiple function properties but only one function type with an interface

*/

interface StringFormat {
    (str: string, isUpper: boolean): string //signature => (args list) : return type
}

let format: StringFormat; //format function of StringFormat func type

format = function (str: string, isUpper: boolean) {
    return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};

console.log(format('hello', true));

