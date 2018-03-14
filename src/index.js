class SmartCalculator {
  constructor(initialValue) {
    this.result=String(initialValue);
    // your implementation
  }

  add(number) {
    this.result=this.result+ '+' +number;
    return this;
    // your implementation
  }
  
  subtract(number) {
    this.result=this.result+ '-' +number;
    return this;
    // your implementation
  }

  multiply(number) {
    this.result=this.result+ '*' +number;
    return this;
  }

  devide(number) {
    // your implementation
    this.result=this.result+ '/' +number;
    return this;   
  }

  pow(number) {
    // your implementation
    this.result=this.result+ '**' +number;
    return this;
  }

  toString() {
  return eval(this.result);
}
}

module.exports = SmartCalculator;
