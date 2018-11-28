let aNumber = 5;

let aString = 'some string';

function returnTypeIsString(name: string) {
  return 'Hello ' + name;
}

class SomeClass {
  getThis() {
    return this;
  }
}

const instanceOfSomeClass = new SomeClass();
const thisFromClass = instanceOfSomeClass.getThis();
