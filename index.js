

const m = 2
const n = 4
let sum = 0;

if (m <= n){
    for (let i=m;i<n;i++){
        sum+= Math.pow(i,3);
    }
}
console.log(sum);