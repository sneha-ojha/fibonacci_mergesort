 function fibs(n){
    let fib=[];
    let a=0;
    let b=1;
    if(n<=0) return fib=[a]; //empty array for -ve
    

    if(n===1) return fib=[b];


    for (let i=2;i<n;i++){
        let c=a+b;
        fib.push(c);
        a=b;
        b=c;
    }
    return fib;
}

console.log(fibs(9)); 


 function fibsRec(n){
    if(n<=0) return [];
    if(n===1) return [0];
    if (n === 2) return [0, 1];
    
    let fib=fibsRec(n-1);
    let nextfib=fib[fib.length-1]+fib[fib.length-2];
    fib.push(nextfib);
    return fib;
}
console.log(fibsRec(9)); 
