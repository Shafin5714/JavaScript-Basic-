//ES5

var john =['John',26];
var name =john[0];
var age = john[1]
console.log(age);


//ES6
const [name2 ,year]=['John',26]
console.log(name2);


///Using in Objects

const obj ={
    firstName:'John',
    lastName:'Smith'
};
const {firstName,lastName}=obj;
console.log(firstName);
console.log(lastName);

//Using different names

const{firstName:a ,lastName:b}=obj;
console.log(a);


//in function

function calculateAge(year2){
    var age2 =new Date().getFullYear()-year2;
    return [age2,65-age2]  //returning 2 values use array
}

const [currentAge ,yearsLeft]=calculateAge(1990);

console.log(currentAge);
console.log(yearsLeft);

