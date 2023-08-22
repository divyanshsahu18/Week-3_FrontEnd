// Sample array of student objects
const students = [
    { name: "Alice", courses: ["Math", "Science"] },
    { name: "Bob", courses: ["History", "Math"] },
    { name: "Charlie", courses: ["Science", "English"] },
    { name: "David", courses: ["Math", "Physics"] }
  ];
  
  // Function to filter students by course name
  function filterStudentsByCourse(students, courseName) {
    return students.filter(student => student.courses.includes(courseName));
  }
  
  // Course name to filter by
  const courseToFilter = "Math";
  
  // Filtering students
  const filteredStudents = filterStudentsByCourse(students, courseToFilter);
  
  // Displaying filtered students
  console.log("Students taking " + courseToFilter + ":", filteredStudents);
  