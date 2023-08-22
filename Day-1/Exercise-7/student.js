// Create a student object
const student = {
    name: "John Doe",
    gradeLevel: 10,
    courseNames: ["Math", "Science", "History"],
    
    // Function to add a course
    addCourse: function(courseName) {
      if (!this.courseNames.includes(courseName)) {
        this.courseNames.push(courseName);
        console.log(`Added ${courseName} to ${this.name}'s courses.`);
      } else {
        console.log(`${this.name} is already enrolled in ${courseName}.`);
      }
    },
    
    // Function to remove a course
    removeCourse: function(courseName) {
      const courseIndex = this.courseNames.indexOf(courseName);
      if (courseIndex !== -1) {
        this.courseNames.splice(courseIndex, 1);
        console.log(`Removed ${courseName} from ${this.name}'s courses.`);
      } else {
        console.log(`${this.name} is not enrolled in ${courseName}.`);
      }
    }
  };
  
  // Testing the functions
  console.log(student.courseNames);  // Initial courses
  student.addCourse("English");      // Adding a new course
  student.addCourse("Math");         // Adding an existing course
  console.log(student.courseNames);  // Updated courses
  
  student.removeCourse("Science");   // Removing an existing course
  student.removeCourse("Gym");       // Removing a non-existing course
  console.log(student.courseNames);  // Updated courses
  