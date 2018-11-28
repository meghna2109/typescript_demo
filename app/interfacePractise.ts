// the compiler only checks that at least the ones required are present and match the types required

interface LabelledValue {
    label: string
}

function printable(labelObj: LabelledValue) {
    console.log(labelObj.label);
    
}

let someObj = {size: 1, label: "I am labeled typed string"};
printLabel(someObj)