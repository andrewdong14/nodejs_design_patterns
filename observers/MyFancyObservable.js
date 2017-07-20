// MyFancyObservable.js
var util = require('util');  
var EventEmitter = require('events').EventEmitter;

function MyFancyObservable() {  
  EventEmitter.call(this);
}

util.inherits(MyFancyObservable, EventEmitter);  

MyFancyObservable.prototype.hello = function (name) {  
  this.emit('hello', name);
};

MyFancyObservable.prototype.bye = function (name) {  
  this.emit('bye1', name);
};

var observable = new MyFancyObservable();

//first observer for hello method
observable.on('hello', function (name) {  
  console.log('hello ' + name);
});

//second observer for hello method
observable.on('hello', function (name) {  
  console.log('Print again:' + name);
});

//first observer for bye method
observable.on('bye1', function (name) {  
  console.log('Bye ' + name);
});

observable.hello('john');  
observable.bye('john');  

