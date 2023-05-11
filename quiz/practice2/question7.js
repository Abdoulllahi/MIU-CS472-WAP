function convertToFullName(object) {
    const result = {};
    result.fullName = object.firstName + " " + object.lastName
    return result;
}

const person = {
    firstName: "John",
    lastName: "Mendez"
}

console.log(convertToFullName(person))