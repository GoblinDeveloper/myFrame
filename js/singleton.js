// singleton
var singletonTest = (function(){

  var Singleton = function(options){

    options = options || {};

    this.name = options.name || 'tinker';
    this.age = options.age || 23;
    this.randomNumber = Math.random();
  };

  var instance;

  var _static = {
    name: 'static_name',
    getInstance: function(options){

      if (instance === undefined) {
        instance = new Singleton(options);
      };

      return instance;
    }
  }

  return _static;
})();

var obj2 = singletonTest.getInstance({age: 555});
console.log(obj2);
