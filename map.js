  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1, 2, 3, 4, 5];
let results = [];
for (let num of nums) {
    results.push(num * 2)
}
console.log(results);

// Using map()

const multByTwo = function (num) {
    return num * 2;
};
const mapResults = nums.map(multByTwo);
console.log(mapResults);

// Simplified w/ map()

let simpMap = nums.map(function (num) {return num * 2});
console.log(simpMap);

// Simplfied w/ map() + arrow function

let simpMap2 = nums.map(num => num * 2);
console.log(simpMap2);

// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

let result = students.map(student => [student.name, student.id]);
console.log(result);

let objResult = students.map(({id, name, ...rest}) => ({id, name}));
console.log(objResult);

let ages = [32, 26, 28];
let addItemResult = students.map(student => ({...student, age: ages[student.id - 1]}));
console.log(addItemResult);