function add(x, y) {
  return x + y;
}

let anonymousAddFunction = function (x, y) {
  return x + y;
};

let fatArrowAddFunction = (x, y = 5) => {
  return x + y;
};


// /* Optional parameters / Default parameters / rest parameters */
// function buildName(firstName: string, lastName?: string) {
//   if (lastName)
//     return firstName + " " + lastName;
//   else
//     return firstName;
// }
//
// buildName('omkar', 'sheral');


// /* Function taking function */
// function addListener(callback: (event: string) => void): void {
//   // some code
// }

// /* Function returning function */
// function getListener(): () => void {
// }







// interface IPerson {
//   name: string;
//   role: string;
// }
//
// function sortPersonsByName(persons: Array<IPerson>) {
//   return persons.sort((p1, p2) => {
//     return p1.name.localeCompare(p2.name);
//   });
// }
//
// const persons: Array<IPerson> = [
//   {
//     name: 'Omkar',
//     role: 'dev',
//   },
//   {
//     name: 'Meghna',
//     role: 'dev'
//   }
// ];
// sortPersonsByName(persons);


// optional paramerters
// more parameters than required
