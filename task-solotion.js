

//  1. Array Filtering and Mapping   

const people = [
  { name: 'Alice', age: 25, gender: 'female' },
  { name: 'Bob', age: 30, gender: 'male' },
  { name: 'Charlie', age: 35, gender: 'male' },
  { name: 'Diana', age: 40, gender: 'female' }
];

function filterAndMap(peopleArray) {
  return peopleArray
    .filter(person => person.gender !== 'female')
    .map(person => person.name);
}

// console.log(filterAndMap(people));