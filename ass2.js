let arr = [4, 0, 9, 9, 0, 0, 4, 2];

let c = 0;

arr = arr.filter((a) => {
  if (a > 0) {
  } else {
    c++;
  }
  return a > 0;
});
const count = c;
console.log(c, arr);
while (c > 0) {
  arr.push(0);
  c--;
}
console.log(`array = ${arr}\ncount = ${count}`)