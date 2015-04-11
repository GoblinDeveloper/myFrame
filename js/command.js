(function(){

  var Person = {
    fn1 : function(args){
      console.log('fn1 > ' + args);
    },
    fn2 : function(args){
      console.log('fn2 > ' + args);
    },
    fn3 : function(args){
      console.log('fn3 > ' + args);
    },
    execute: function(name){
      return Person[name] && Person[name].apply(Person,Array.prototype.slice.call(arguments,1));
    }
  };

  Person.execute('fn1');
  Person.execute('fn2');
  Person.execute('fn3');
})();
