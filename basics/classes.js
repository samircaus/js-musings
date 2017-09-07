// Class Keyword (ES2015)

class MyClass {
  constructor(props) {
    super.constructor();
    this.setup = {
      a: props.a,
      b: props.b
    };
  }

  getA() {
    return this.setup.a;
  }
}

const classInstance = new MyClass({ a: 1, b: 2 }); // MyClass { setup: { a: 1, b: 2 } }

classInstance.prototype = MyClass.prototype; // sets a reference to the MyClass prototype

classInstance.prototype.getB = function() {
  return this.setup.b;
}; // Adds the function to the MyClass prototype

const test = {
  get [Symbol.toStringTag]() {
    return 'AUebAUEhaEUaheAUEhaE';
  }
}; // This changes the toString function. The return value will get printed after object.

// Function constructors

const constructorFunction = function(props) {
  this.props = props;
};

const constructorInstance = new constructorFunction({ a: 1, b: 2 });

constructorFunction.prototype.test = y => y;
constructorFunction.prototype.test2 = x => x;

constructorInstance.prototype = constructorFunction;

constructorInstance.prototype.test = x => x;

constructorInstance.constructor; // { [Function: constructorFunction] test: [Function] }
constructorFunction.constructor; // [Function: Function]

constructorInstance.prototype; // { [Function: constructorFunction] test: [Function] }
constructorFunction.prototype; // constructorFunction { test: [Function], test2: [Function] }
