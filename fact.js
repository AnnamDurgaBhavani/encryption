
let factorial= (n) => {
    if(n === 0) {
        return 1;
    }
    else {
        return n * factorial(n-1);
    }
}
// let op=factorial(5);
// console.log(`Factorial of 5 is ${op}`);

let mul=(x,y)=>{
    return x*y;
}

module.exports ={ factorial,mul};