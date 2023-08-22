function greet(name: string): string {
    return `Hello, ${name}!`;
}

const namesToGreet: string[] = ["Alice", "Bob", "Carol"];

namesToGreet.forEach(name => {
    const greeting = greet(name);
    console.log(greeting);
});
