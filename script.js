//complete this code
class Person {
	constructor(name,age){
		this.name = name;
		this.age = age;
	}
	get name(){
		return this.name;
	}
	get age(){
		return this.age;
	}
	set age(newage){
		if(newage>0){
			this.age=newage;
		}else{
			console.log("Age must be positive");
		}
	}
}
class Student extends Person {
	constructor(name,age){
		super(name,age);
	}
	study(){
		return (this.name + " is studying");
	}
}

class Teacher extends Person {
	constructor(name,age){
		super(name,age);
	}
	Teaching(){
		return (this.name + " is teaching");
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
