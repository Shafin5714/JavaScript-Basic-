function sumAll(arr){
    let start = Math.min(arr[0],arr[1]);
    let end = Math.max(arr[0],arr[1])
    let sum = 0;
    for(let i =start;i<=end;i++){
        sum+=i
    }
    return sum
    
}

console.log(sumAll([4,1]));

