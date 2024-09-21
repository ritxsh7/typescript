interface Product {
  id: number;
  name: string;
  price: number;
}

class ProductService<T extends Product> {
    private products: T[] = [];

    @notEmptyName
    addProduct(product: T): void {
        this.products.push(product);
        console.log(`Product ${product.name} added successfully!`);
    }

    getProductById(id: number): T | undefined {
        return this.products.find(product => product.id === id);
    }

    getAllProducts(): T[]{
        return this.products;
    }

    deleteProduct(id: number): void {
        this.products = this.products.filter(product => product.id !== id);
        console.log(`Product with ID ${id} deleted.`);
    }

    updateProduct(id: number, updatedProduct:T): void {
    const index = this.products.findIndex(p => p.id === id);
    if (index !== -1) {
      this.products[index] = { ...this.products[index], ...updatedProduct };
      console.log(`Product ${id} updated successfully!`);
    } else {
      console.log(`Product with ID ${id} not found.`);
    }
  }
}

function notEmptyName(target: any, propertyName: string, descriptor: PropertyDescriptor) {
  const method = target[propertyName];
  
  target[propertyName] = function(...args: any[]) {
    const product = args[0];
    if (product.name === '') {
      throw new Error('Product name must not be empty');
    }
    return method.apply(this, args);
  };
}


interface Clothes extends Product {
  brand: string;
  size: string | number;
  category: string;
}

let clothService = new ProductService<Clothes>();

let cloth1: Clothes = {
    id: 1,
    name: 'Jeans',
    price: 1200,
    brand: 'VH',
    category: 'Men Trousers',
    size : 35,
}

let cloth2: Clothes = {
    id: 2,
    name: 'Sweater',
    price: 1200,
    brand: 'Nike',
    category: 'Women Winter',
    size : 'L',
}

clothService.addProduct(cloth1);
clothService.addProduct(cloth2);

console.log("Printing all the products");
console.log(clothService.getAllProducts());

console.log(clothService.getProductById(1));

clothService.deleteProduct(1);
console.log("Printing all the products");
console.log(clothService.getAllProducts());

let updatedCloth2: Clothes = {
    id: 2,
    name: 'Sweater',
    price: 1000,
    brand: 'Nike',
    category: 'Women Winter',
    size : 'L',
}

clothService.updateProduct(2, updatedCloth2);
console.log("Printing all the products");
console.log(clothService.getAllProducts());
