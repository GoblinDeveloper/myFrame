var superObject = {
  init: function(model){
    this.model = model;
  },
  getModel: function(){
    return this.model;
  }
};

var Vehicle = function(model){

  var F = function(){};
  F.prototype = superObject;

  var f = new F();
  f.init(model);

  return f;
};

var model = new Vehicle('my is model');

console.log(model.getModel());


var vehicle2 = (function(){

  var F = function(){};

  return function(model){

    F.prototype = model;
    return new F();
  };
})();

console.log(vehicle2(superObject).getModel());
