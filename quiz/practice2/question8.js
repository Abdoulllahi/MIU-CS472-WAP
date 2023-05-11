function fullNameLogger(callback) {
    const person = {
        firstName: 'John',
        lastName: 'Doe'
    };

    const boundCallback = callback.bind(person);

    boundCallback();
}

function logMessage() {
    console.log(`Full name: ${this.firstName} ${this.lastName}`);
}

fullNameLogger(logMessage);
