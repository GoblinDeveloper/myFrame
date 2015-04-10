// 闭包
var a = function(){
  var i = 0;
  var b = function(){
    console.log(i++);
  };

  return b;
};

// 继承
var extend = function(super1,self){

  for (var key in super1) {
    self[key] = super1[key];
  };
};

var c = a();
c(); // 0
c(); // 1
c(); // 2
a()(); // 0
a()(); // 0
a()(); // 0
