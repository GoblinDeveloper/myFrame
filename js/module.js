// module
var myModule = (function(){

  // 私有变量
  var count;

  // 私有函数
  var initCount = function(){
    count = 0;
    console.log('count typeof > ' + (typeof count));
  };

  return function(){

      // 调用私有函数
      initCount();

      // 暴露的公有函数
      return {
        add: function(){
          count++;
          return this;
        },

        sub: function(){
          count--;
          return this;
        },

        result: function(){
          return count;
        }
      }
  }();

})();

console.log(myModule.add().result());
console.log(myModule.sub().result());
