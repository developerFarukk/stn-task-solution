

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



// 2. Object Manipulation

const books = [
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
  { title: '1984', author: 'George Orwell', year: 1949 }
];

function getBookTitles(booksArray) {
  return booksArray.map(book => book.title);
}

// console.log(getBookTitles(books)); 


// 3. Function Composition

function square(num) {
  return num * num;
}

function double(num) {
  return num * 2;
}

function addFive(num) {
  return num + 5;
}

function composeFunctions(num) {
  return addFive(double(square(num)));
}

// console.log(composeFunctions(3));


// 4. Sorting Objects

const cars = [
  { make: 'Toyota', model: 'Camry', year: 2018 },
  { make: 'Honda', model: 'Accord', year: 2020 },
  { make: 'Ford', model: 'Mustang', year: 2015 }
];

function sortCarsByYear(carsArray) {
  return carsArray.sort((a, b) => a.year - b.year);
}

// console.log(sortCarsByYear(cars));


// 5. Find and Modify

const myPeople = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
]

function updateAgeByName(peopleArray, name, newAge) {
  const person = peopleArray.find(p => p.name === name);
  if (person) {
    person.age = newAge;
  }
  return peopleArray;
}

// console.log(updateAgeByName(myPeople, 'Bob', 31));


// 6. Array Reduction

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumEvenNumbers(numbersArray) {
  return numbersArray.reduce((sum, num) => {
    return num % 2 === 0 ? sum + num : sum;
  }, 0);
}

// console.log(sumEvenNumbers(numbers));



// 7. Unique Values

const numbers1 = [1, 2, 2, 3, 4, 4, 5, 5, 5, 6];

function getUniqueNumbers(numbersArray) {
  return [...new Set(numbersArray)];
}

// console.log(getUniqueNumbers(numbers1));