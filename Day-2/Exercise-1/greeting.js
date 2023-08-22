function greet(name) {
    return "Hello, ".concat(name, "!");
}
var namesToGreet = ["Alice", "Bob", "Carol"];
namesToGreet.forEach(function (name) {
    var greeting = greet(name);
    console.log(greeting);
});
