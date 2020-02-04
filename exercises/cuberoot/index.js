function diff(n, mid) {
  if (n > mid * mid * mid) return n - mid * mid * mid;
  else return mid * mid * mid - n;
}

function print(arg) {
  console.log(arg);
}

function cubeRoot(n) {
  print(n);
  if (n > 3000000) return Infinity;
  var start = 0;
  var end = n;

  var precision = 0.0001;
  while (true) {
    var mid = (start + end) / 2;
    var error = diff(n, mid);
    if (error <= precision) return mid;
    if (mid * mid * mid > n) {
      end = mid;
    } else start = mid;
  }
}

module.exports = cubeRoot;
