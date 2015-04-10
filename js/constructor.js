// constructor
var Person = function(name,age){
  this.name = name;
  this.age = age;
};

Person.prototype.toString = function(){
    return 'this.name > ' + this.name + 'this.age > ' + this.age;
};

var person = new Person('tinker',18);

console.log(person.toString());

var person = new Person('doblin',42);

console.log(person.toString());
