

let item = ["coke","pizza","burger"]
let prize = [200,400,500]

let order = [1,2,3]
let cost = 0;

for(let i=0;i<order.length;i++){
    switch(order[i]){
        case 1: cost+= prize[order[i]-1];break;
        case 2: cost+= prize[order[i]-1];break;
        case 3: cost+= prize[order[i]-1];break;
    }
}

if (cost > 500){
    cost = cost*0.9;
}

console.log(cost)