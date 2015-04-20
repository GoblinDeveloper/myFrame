(function(){

  var Object = function(){

      this.getResult = function(){
        return 800;
      };
  };

  var Decorator1 = function(obj){

      var v = obj.getResult();

      obj.getResult = function(){
        return v + 100;
      };

      return v;
  };

  var Decorator2 = function(obj){

      var v = obj.getResult();

      obj.getResult = function(){
        return v + 200;
      };

      return v;
  };

  var Decorator3 = function(obj){

      var v = obj.getResult();

      obj.getResult = function(){
        return v + 300;
      };

      return v;
  };

  var obj = new Object();

  console.log(Decorator1(obj));
  console.log(Decorator2(obj));
  console.log(Decorator3(obj));
  console.log(obj.getResult());

})();
