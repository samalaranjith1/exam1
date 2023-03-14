let list = [1,2,3,4,5];
let targetNumber = 3;
list1 =[]

function solution(list,targetNumber){
    for(let i=0;i<=targetNumber;i++){
        list1.push(list[i]);
        
    }
    return list1;
}
console.log(solution(list,targetNumber));