interface Teacher {
  firstName: string,
  lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: Number,
  location: string,
  [propName: string]: any,
  }

interface Directors extends Teacher {
  numberOfReports: Number,
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;  
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => `${firstName.charAt(0)}.${lastName}`;

class StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName;
    this.lastName;
  }

  workOnHomework():string{
    return "Currently working";
  }
  displayName():string{
    return this.firstName;
  }
}