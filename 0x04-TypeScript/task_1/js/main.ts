interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// function printTeacher(firstName: string, lastName: string): string {
//   return `${firstName[0]}. ${lastName}`;
// }

// printTeacher("John", "Doe"); // Output: J. Doe
const printTeacher: printTeacherFunction = (
  firstName: string,
  lastName: string
): string => `${firstName[0]}. ${lastName}`;

console.log(printTeacher("John", "Doe"));

// interface Teacher {
//   readonly firstName: string;
//   readonly lastName: string;
//   fullTimeEmployee: boolean;
//   yearsOfExperience?: number;
//   location: string;
//   [key: string]: any; // Allow any additional attributes
// }
// const teacher3: Teacher = {
//   firstName: "John",
//   fullTimeEmployee: false,
//   lastName: "Doe",
//   location: "London",
//   contract: false,
// };

// console.log(teacher3);
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}
