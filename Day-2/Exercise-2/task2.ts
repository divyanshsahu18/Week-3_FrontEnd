interface Person {
    firstName: string;
    lastName: string;
    age: number;
}

function introduce(person: Person): void {
    console.log(`${person.firstName} ${person.lastName} is ${person.age} years old`);
}

// Example usage
const person: Person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

introduce(person);
