var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var ProductService = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _addProduct_decorators;
    return _a = /** @class */ (function () {
            function ProductService() {
                this.products = (__runInitializers(this, _instanceExtraInitializers), []);
            }
            ProductService.prototype.addProduct = function (product) {
                this.products.push(product);
                console.log("Product ".concat(product.name, " added successfully!"));
            };
            ProductService.prototype.getProductById = function (id) {
                return this.products.find(function (product) { return product.id === id; });
            };
            ProductService.prototype.getAllProducts = function () {
                return this.products;
            };
            ProductService.prototype.deleteProduct = function (id) {
                this.products = this.products.filter(function (product) { return product.id !== id; });
                console.log("Product with ID ".concat(id, " deleted."));
            };
            ProductService.prototype.updateProduct = function (id, updatedProduct) {
                var index = this.products.findIndex(function (p) { return p.id === id; });
                if (index !== -1) {
                    this.products[index] = __assign(__assign({}, this.products[index]), updatedProduct);
                    console.log("Product ".concat(id, " updated successfully!"));
                }
                else {
                    console.log("Product with ID ".concat(id, " not found."));
                }
            };
            return ProductService;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _addProduct_decorators = [notEmptyName];
            __esDecorate(_a, null, _addProduct_decorators, { kind: "method", name: "addProduct", static: false, private: false, access: { has: function (obj) { return "addProduct" in obj; }, get: function (obj) { return obj.addProduct; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
function notEmptyName(target, propertyName, descriptor) {
    var method = target[propertyName];
    target[propertyName] = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var product = args[0];
        if (product.name === '') {
            throw new Error('Product name must not be empty');
        }
        return method.apply(this, args);
    };
}
var clothService = new ProductService();
var cloth1 = {
    id: 1,
    name: 'Jeans',
    price: 1200,
    brand: 'VH',
    category: 'Men Trousers',
    size: 35,
};
var cloth2 = {
    id: 2,
    name: 'Sweater',
    price: 1200,
    brand: 'Nike',
    category: 'Women Winter',
    size: 'L',
};
clothService.addProduct(cloth1);
clothService.addProduct(cloth2);
console.log("Printing all the products");
console.log(clothService.getAllProducts());
console.log(clothService.getProductById(1));
clothService.deleteProduct(1);
console.log("Printing all the products");
console.log(clothService.getAllProducts());
var updatedCloth2 = {
    id: 2,
    name: 'Sweater',
    price: 1000,
    brand: 'Nike',
    category: 'Women Winter',
    size: 'L',
};
clothService.updateProduct(2, updatedCloth2);
console.log("Printing all the products");
console.log(clothService.getAllProducts());
