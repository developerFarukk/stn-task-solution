

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