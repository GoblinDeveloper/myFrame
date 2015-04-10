var pubsub = (function(){

  // 对象
  var q = {};

  // 发布内容列表
  var topics = {};

  // tokenId
  var subId = 0;


  // 发布信息
  q.publish = function(topic,args){

    // 判断是否存在该消息
    if (!topics[topic]) {
      return false;
    };

    // 获得订阅该消息的人群
    var subs = topics[topic];
    var len = subs.length;

    // 给每个订阅该消息的人发送事件
    while(len--){
      subs[len].func(topic,args);
    };
  };

  // 订阅消息
  q.sublish = function(topic,func){

    topics[topic] = topics[topic] ? topics[topic] : [];

    var token = (++subId).toString();

    topics[topic].push({
      token: token,
      func: func
    });

    return token;
  };

  return q;
})();

pubsub.sublish('topic1',function(topic,args){
  console.log('topic > ' + topic + ' args > ' + args);
});

pubsub.publish('topic1','hello');

pubsub.publish('topic1','world');
