class Student {
  study() {
    console.log("Student is studying");
  }
}

class Teacher {
  teach(student) {
    student.study();
  }
}

const student = new Student();
const teacher = new Teacher();

teacher.teach(student);