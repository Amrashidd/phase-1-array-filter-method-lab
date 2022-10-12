// Code your solution here
const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];


function findMatching(arr, query) {
    return arr.filter((bobby) => bobby.toLowerCase().includes(query.toLowerCase()));
  }


// function fuzzyMatch(drivers, Sa) {
//     return drivers.filter((drivers) => drivers.name === startsWith("sa"))
// }
// function fuzzyMatch (drivers, query) {
//     return drivers.filter((drivers) => String(drivers.name).startsWith('Sa'));

// }





// function fuzzyMatch(driver, query){
// return drivers.filter((driver) => (driver.name).startsWith(query))
// }

function fuzzyMatch(drivers, query) {
    return drivers.filter((driver) => driver.toLowerCase().indexOf(query.toLowerCase()) === 0
    );
  }


function matchName(drivers, Bobby) {
    return drivers.filter((drivers) => (drivers.name === Bobby))
}