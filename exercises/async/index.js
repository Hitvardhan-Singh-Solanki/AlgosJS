var arr = [2000, 5000, 7000];

function printArr(intArr) {
  arrayHelper(intArr, 0, intArr[0]);
}

function arrayHelper(array, ite, elem) {
  if (ite === array.length) {
    return;
  }
  //  return new Promise((resolve,reject)=>{
  //      resolve(arr[])
  //  })
  setTimeout(() => {
    if (elem < 0) {
      return arrayHelper(array, ite + 1, array[ite + 1]);
    }
    console.log(elem);
    var temp = elem - 1000;
    return arrayHelper(array, ite, temp);
  }, 1000);
}

// function sum(a) {
//   if (!a) {
//     return;
//   }

//   return function(b) {
//     if (!b) return a;
//     return sum(a + b);
//   };
// }

// // printArr(arr);
// const test = sum(2)(3)(4)(-5)();

// console.log(test);
