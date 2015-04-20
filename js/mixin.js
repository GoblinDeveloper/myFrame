var Person = function(name,age){
  this.name = name;
  this.age = age;
};

Person.prototype.getOther = Person.prototype.getOther || function(){
  console.log(this);
  console.log(this.other);
};

var Student = function(name,age,other){
  this.other = other;
};

var mixin = function(thatObject,superObject){

  if (arguments[2]) {

    // 如果有指定方法
    for (var i = 0;i < arguments.length;i++){
      thatObject.prototype[arguments[i]] = superObject.prototype[arguments[i]];
    };
  }else{
    // 没有的话 不重复添加
    for (var key in superObject.prototype) {

      if (!thatObject.prototype[key]) {
        thatObject.prototype[key] = superObject.prototype[key];
      };
    };
  }
};

mixin(Student,Person);

new Student('tinker',23,'other').getOther();
