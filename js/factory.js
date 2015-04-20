var Phper = function(name){
  this.name = name;
  this.phpCore = function(){
    console.log('php是世界上最好的语言 name > ' + this.name);
  };
};

var Javaer = function(){
  this.javaCore = function(){
    console.log('我最安全');
  };
};

var Factory = function(){};

// 保存所有工厂
Factory.prototype.classs = {};

// 添加工厂
Factory.prototype.addClass = Factory.prototype.addClass || function(factoryType){
  this.classs[factoryType] = this.classs[factoryType.toString()] = factoryType;
};

// 默认 Phper
Factory.prototype.class = Phper;

// 取得模块
Factory.prototype.getModel = Factory.prototype.getModel || function(factoryType){

  if (factoryType in this.classs) {
    this.class = factoryType;
  };

  return new this.class(Array.prototype.slice.call(arguments,1));
};

Factory.prototype.addClass(Phper,'tinker');
Factory.prototype.addClass(Javaer);

// 创建实例
Factory.prototype.getModel(Phper,'tinker');
