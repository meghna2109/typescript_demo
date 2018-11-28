

function formatPrice(num, symbol = "$") {
  return `${symbol}${num.toFixed(2)}`;
}

const formattedPrice = formatPrice("1234");

console.log('formatted price:', formattedPrice);













// function sortPersonsByName(persons) {
//   return persons.sort((p1, p2) => {
//     return p1.name.localCompare(p2.name);
//   });
// }
//
// const persons = [
//   {
//     name: 'Omkar',
//     role: 'dev'
//   },
//   {
//     name: 'Meghna',
//     role: 'dev'
//   }
// ];
// sortPersonsByName(persons);
