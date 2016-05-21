var events = require('events');
var eventEmitter = new events.EventEmitter();
var listener1 = function listener1(){
    console.log('listen to listener1');
}

var listener2 = function listener2(){
    console.log('listen to listener2');
}

eventEmitter.addListener('connection', listener1);

eventEmitter.on('connection', listener2);


