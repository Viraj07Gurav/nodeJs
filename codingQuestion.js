//reverse string
const str="hello"
let rev="";
for(let i=str.length-1;i>=0;i--){
    rev=rev+str[i];
}
console.log(rev);


//revserv method
const str1="world"
let reversed=str1.split('').reverse().join('');
console.log(reversed)

//reduce

const num=[10,20,40];
let result=num.reduce((acc,n)=>
    acc+n
)
console.log(result);

const fruits = ["apple", "banana", "apple", "orange", "banana"];

const count=fruits.reduce((acc,curr)=>{
    acc[curr]=(acc[curr]||0)+1;
    return acc;
},{});

console.log(count);
// { apple: 2, banana: 2, orange: 1 }

const arr=[1,2,2,4,5,6,4];
const res=arr.reduce((acc,cur)=>{
    if(!acc.includes(cur)){
        acc.push(cur)
    }
    return acc;
},[])
console.log(res)

//factorial

function fact(num){
    if(!Number.isInteger(num)||num<0){
        return null;
    }
    let result=1;
    for(let i=2;i<=5;i++){
        result*=i;
    }
    return result;
}
console.log(fact(5));