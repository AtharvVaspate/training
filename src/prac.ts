console.log("hello")

let age277 : number = 22; //why error

console.log(age277);



if(age277 >20){
    age277 +=20;
}
console.log(age277);


//age277 = "adada"

let sales : number = 99;
let name12 : string = "atharv";

let sales2 = 55;

console.log(sales + " " + name12 + " " + sales2 );

let sales4 ;

sales4 = 9;
sales4 = "rahul";

let name4 : any;

let numbers = [21, 32,'o'];
//let numbers1 : number[] = [13,43,1 ,'saddsf'];
let numbers2 : any = [231,43,'ds' , true];

let numbers8 = [12,43,13];


let numbers9 : [string ,number ] = ['atharv' , 22]; //tuple 



console.log(numbers9[0]);


const enum abcd{ //with constant js code becomes small
    monday =  "a",
    tues = "b",
    wed = "x"
}

let abc : abcd = abcd.monday;
console.log(abc);

// let abcdeeee : [string , number] = ["artadsa" , 1321];

function tax(income : number , interest : number) : number{
    if(income <100 && interest < 100){

        return 1;
    }

    return 0;


}

console.log(tax(991 , 991));

let obj : {
    //readonly 
    name : string,
    age : number
} = {
    name : "atharv" , 
    age : 99
}

console.log(obj.name + " " + obj.age);

obj.name = "rahul";
obj.age = 123;

console.log(obj.name + " " + obj.age);

let obj9 = {
name : "abcd",
age1 : 213
}

console.log(obj9.name);


type Employee = {
    name :string,
    age : number,
    display : (date  : number) => number
}

let emplo : Employee = {
    name : "abcd",
    age : 77,
    display : (date : number) => {return date}
     
}

let empl1 : Employee = {
    name : "efgh",
    age : 99,
    display : (date : number) => {return date},
}



console.log(emplo.age);
console.log(emplo.display(123));

console.log(empl1.age); 
console.log(empl1.display(789));

function weight123(weight1 : number | string) : number {
    if(typeof(weight1) === 'number'){
       return  weight1 *20;

    }
    else{
      return  parseInt(weight1) * 20;
    }
    
}

console.log(weight123(100));

console.log(weight123('666'));

type A = {
    AA : ()=> void;
}

type B = {
BB : () => void
}

type C = A & B;

let c : C = {
    AA : () => {},
    BB : () => {}
}


let num1 :100;
let num2 : "atharv";
type Quantity = "cm" | "inch";

let abcdef : Quantity = "inch"

//ask this doubt ///////////////////////////////////////////////////////////////////

function greet ( name : string){
    if(name ){
        console.log(name );

    }
    // else{
    //     console.log("hii")
    // }
}

greet("atharv");
////////////////////////////////////////////////////////////////////////


interface User {
   readonly name : string
    age : number
    email : string

    start : () => string
    end : (fname : string) => string


}

interface another extends User{
    role : "admin" | "student"
}




let zz : another = {
name : "atharv",
age : 131231,
email : "a@a.com",
role : "admin",
start : () => {
    return "started"
},

end : (fname : string) =>{
    return "inside end" + fname
}


}

console.log(zz);


console.log(zz.end("abcd"));


function add(int1 : number = 3 , int2 : number = 4 ){
    console.log(int1 + int2);
}


add();


// function add1(q? : number , w?:number ){
//   console.log("hello")
// }

// add1(1 , 2);




///////////////////////////////////////////////////////////////////////////////////////
//Assingments

let var1 : string = "atharv";

console.log(var1);


//////////////////////////////////////////////////////////////////

function add2(firstnum : number , secondnum : number): number{
    return firstnum + secondnum;

}

console.log(add2(10 , 20));
console.log(add2(2.4 , 3.5));
console.log(add2(-3 , -4));
console.log(add2(-2 , 10));


///////////////////////////////////////////////////////