

function makeTshirt(size:string, text:string):void {
    console.log(`Your request for a T Shirt with size ${size} and text '${text}' to be printed on it is accepted`);
}

makeTshirt("M", "Hello world");
makeTshirt("XL", "Code in Typescript");

function makeTshirtModified(size: string = "L", text:string ="I love typescript") {
     console.log(`Your request for a T Shirt with size ${size} and text '${text}' to be printed on it is accepted`);
}

makeTshirtModified();
makeTshirtModified("M");
makeTshirtModified("S", "Hello world");