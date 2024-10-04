const m = 1
const n = 5
let res = 1

for(let i=m;i<=n;i++){
    if (i%2 == 1){
        res *= i
    }
}

console.log(res)