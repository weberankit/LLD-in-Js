Association in OOP (LLD)
Definition: Association is a relationship between two independent classes whose objects interact with or communicate with each other.

In simple words, one object uses or interacts with another object, but neither has to inherit from the other.
Example: Teacher and Student
A teacher teaches a student. A teacher is not a student, and a student is not a teacher. They are separate objects connected by a relationship.
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


Output:
Student is studying


How does it work?
1. new Student() creates a Student object.
2. new Teacher() creates a Teacher object.
3. teacher.teach(student) passes the Student object to the Teacher.
4. The Teacher interacts with the Student by calling student.study().
UML representation
A solid line represents association between the two classes.
Remember the difference
- Inheritance (IS-A): A Cow is an Animal.
- Association (USES / INTERACTS WITH): A Teacher teaches a Student.
Key point for LLD: Association describes a relationship between objects. It does not, by itself, specify ownership or require one object's lifetime to depend on the other.