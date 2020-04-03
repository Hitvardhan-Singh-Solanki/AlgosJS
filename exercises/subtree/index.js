// function isSubTree(root1, root2) {
//   var stack1 = dft(root1);
//   var stack2 = dft(root2);
//   var object1 = stack1.reduce((acc, ele) => {
//     if (acc[ele]) {
//       acc[ele] = acc[ele] + 1;
//     } else {
//       acc[ele] = 1;
//     }
//   }, {});
//   stack2.filter(ele => object1[ele]);
//   // [1,2,3,4,5,6,7,8]
//   //     [3,4,5,6]
// }

// function dtf(root, stack = []) {
//   stack.push(root.value);
//   while (root.left || root.right) {
//     stack.push(root.left.value);
//     dft(left, stack);
//     stack.push(root.right.value);
//     dft(right, stack);
//   }
//   return stack;
// }

'abcdedcba';

function makePalindrome(str) {
  if (palindrome(str)) {
    return true;
  } else {
    const sub = str.subString(1);
    makePalindrome(sub);
  }
}

function palindrome(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr
    .split('')
    .reverse()
    .join('');
  return reverseStr === lowRegStr;
}
