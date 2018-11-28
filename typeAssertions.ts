type stringOrNumber = string | number;

function printAgeOrName(nameOrAge: stringOrNumber) {
  if (typeof nameOrAge === 'number') {
    const age = nameOrAge as number;
    const ageAfterTenYears = age + 10;
    console.log(`your age after 10 yrs is ${ageAfterTenYears}`);
    
    
  } else if (typeof nameOrAge === 'string') {
    const name = <string>nameOrAge;
    const nameInUpperCase = name.toUpperCase();
    console.log(`Your name in uppercase is ${nameInUpperCase}`);
  }
}

printAgeOrName(10);
printAgeOrName('omkar');


interface IPersonWithOptionalName {
  name?: string;
}




// /* not Null assertions */
// function printNameOrUnnamed(person: IPersonWithOptionalName) {
//   printName(person.name);
// }
//
// function printName(name: string) {
//   console.log(name);
// }


