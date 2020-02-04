Function.prototype.callNew = function(newCtx) {
  newCtx = newCtx || global;
  var uniqueID = '00' + Math.random();
  while (newCtx.hasOwnProperty(uniqueID)) {
    uniqueID = '00' + Math.random();
  }
  newCtx[uniqueID] = this;
  const args = [];
  // arguments are saved in strings, using args
  for (var i = 1, len = arguments.length; i < len; i++) {
    args.push('arguments[' + i + ']');
  }

  // strings are reparsed into statements in the eval method
  // Here args automatically calls the Array.toString() method.
  var result = eval('newCtx[uniqueID](' + args + ')');
  delete newCtx[uniqueID];
  return result;
};

var test1 = {
  name: 'Ram',
  getName(test) {
    console.log('::', this.name, test);
  }
};

var newTest = {
  name: 'Mohan'
};

test1.getName.callNew(newTest, 'Hello');
