var module = (function(){

  var _private_model = {
    _i: 0,
    set: function(i){
      this._i = i;
    },
    get: function(){
      return this._i;
    },
    run: function(){
      console.log('run');
    },
    other: function(){
      console.log('other');
    }
  };

  return {

    facade: function(args){
        _private_model.set(args.val);
        _private_model.get();

        if (args.run) {
          _private_model.run();
        };
    }
  }

})();
