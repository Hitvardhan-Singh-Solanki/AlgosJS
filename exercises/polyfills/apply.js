Function.prototype.applyNew = function(newCtx, arr) {
  newCtx = newCtx || global;
  var uniqueID = '00' + Math.random();
  while (newCtx.hasOwnProperty(uniqueID)) {
    uniqueID = '00' + Math.random();
  }
  newCtx[uniqueID] = this;

  var args = [];
  var result = null;
  if (!arr) {
    result = newCtx[uniqueID]();
  } else {
    for (let i = 1, len = arr.length; i < len; i++) {
      args.push('arr[' + i + ']');
    }
    result = eval('newCtx[uniqueID](' + args + ')');
  }

  delete newCtx[uniqueID];
  return result;
};

var test1 = {
  name: 'Ram',
  getName() {
    console.log(this.name);
  }
};

var newTest = {
  name: 'mohan'
};

test1.getName.callNew(newTest);
