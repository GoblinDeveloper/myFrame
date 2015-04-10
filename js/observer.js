// observer or SubJect

// 观察者列表对象
var ObserverList = function(){
  this.observerlist = [];
};

ObserverList.prototype.add = ObserverList.prototype.add || function(observer){
  this.observerlist.push(observer);
};

ObserverList.prototype.len = ObserverList.prototype.len || function(){
  return this.observerlist.length;
};

// 目标对象
var SubJect = function(){
  this.observerlist = new ObserverList();
};

SubJect.prototype.Add = SubJect.prototype.Add || function(observer){
  this.observerlist.add(observer);
};

SubJect.prototype.GetTotal = SubJect.prototype.GetTotal || function(){
  return this.observerlist.len;
};

// 通知观察者
SubJect.prototype.Update = SubJect.prototype.Update || function(content){

  var observers = this.observerlist.observerlist;

  for(var i = 0,len = observers.length;i < len;i++){
    observers[i].update(content);
  };
};

// 观察者model
var Observer = function(name){
  this.name = name;
  this.update = function(data){
    console.log('name > ' + this.name + ' data > ' + data);
  };
};

// 创建目标对象
var subJect = new SubJect();

// 添加观察者
for(var i = 0;i < 5;i++){
  subJect.Add(new Observer('observer' + i));
};

subJect.Update('内容');
