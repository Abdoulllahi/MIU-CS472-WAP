// Q3: Create a function using function expression named getNewArray with one parameter of String Array, return a new
//array which contains all string, length is greater than and equal to 5, and contains letter ‘a’.
//getNewArray(["Hello", "Wonderful", "Happy", "People", "Have a great day"]);

function getNewArray(listOfString) {
    return listOfString.filter(element => element.length >= 5 && element.includes('a'))
}

console.log(getNewArray(["Hello", "Wonderful", "Happy", "People", "Have a great day"]));