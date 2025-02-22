
let r=(n)=>{
    let s=0;
    while(n>0){
        let l=n%10;
        s=s*10+l;
        n=Math.floor(n/10);
    }
    return s;
}

module.exports=r;