function ParameterLogger(target: any, methodName: string, parameterIndex: number) {
  const method = target[methodName]; 

  target[methodName] = function (...args: any[]) {
    const paramValue = args[parameterIndex]; 
    console.log(`Parameter is at index ${parameterIndex} with value: ${paramValue}`);
    return method.apply(this, args);
  };
}

class Decorator {
  display(@ParameterLogger message: string) {
    console.log("Display method called");
  }
}

console.log(`Parameter is at index ${0} with value: ${"Hello"}`);
const dec = new Decorator();
dec.display("Hello");
