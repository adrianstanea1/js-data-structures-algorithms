let instructor = {
  firstName: "Kelly",
  lastName: "Mayers",
  isInstructor: true,
  favNumbers: [3, 7, 9],
};

console.log(instructor);
// O(n) acces time
console.log(Object.keys(instructor));
console.log(Object.values(instructor));
console.log(Object.entries(instructor));
// O(1) acces time
console.log(instructor.hasOwnProperty("firstName"));

// key value pairs
// operations are quick for searching, deleting and updating(adding a new item aka key to the object)
