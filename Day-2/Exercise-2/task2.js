function introduce(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName, " is ").concat(person.age, " years old"));
}
// Example usage
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};
introduce(person);
