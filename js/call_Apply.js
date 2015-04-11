var Person = function(name,age){
  this.name = name;
  this.age = age;
  this.getName = function(){
    console.log(this.name);
  };
};

var Student = function(name,age,level){
  Person.apply(this,arguments);
  this.level = level;
};

var person = new Person('tinker',18);
console.log(person);

var student = new Student('tinker',18,3);
console.log(student);

console.log('Math.max result > ' + Math.max.apply(null,[120,991,38]));

var arr1 = [1,2,3];
var arr2 = [4,5,6];

console.log(Array.prototype.push(arr1,arr2)); // arr1 作为 Array.push 方法的使用者 arr2 作为push方法的参数
