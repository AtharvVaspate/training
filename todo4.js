let num = 22;
let num1  = 22;

if(num == num1 ){
    console.log("same numbers");
}
console.log(num);


//code
let x = 10
let y = x
console.log({x,y}) // {x: 10, y: 10}
x = 100
console.log({x,y}) // {x: 100, y: 10}

//code 2
let obj11 = {name: 'Javascript'}
let obj22 = obj11
console.log(JSON.stringify({obj11, obj22}))  // {"obj1":{"name":"Javascript"},"obj2":{"name":"Javascript"}}
//directly check with json.stringify 

obj11.name = "Typescript"
console.log(JSON.stringify({obj11, obj22})) // {"obj1":{"name":"Typescript"},"obj2":{"name":"Typescript"}}






let name1 = "atharv";
name1 =  name1 + "vaspate";
console.log(name1);


let arr = [2,4,1,4,5];
arr[3] = 99;
console.log(arr);
console.log(arr.length);
//array methods
console.log(arr.toString());
console.log(arr.join("*"))
console.log("check here")
arr.push(111);
arr.push("atharv");
let length = arr.push("delete this");
console.log(length);
arr.pop()
console.log("shift");
arr.shift()
console.log(arr);

delete arr[4];


// arr.pop();
console.log(arr);
//arr.map(index , value, array);
console.log("check 12345 here")
let w = arr.slice(2 , 5);
console.log("sliced array is " + w);
let v = arr instanceof Array;
console.log("v is " + v);
console.log(arr);


let arr1 = [2,3,1,4];
let arr2 = ["atharv" , "rahul"];

let arr3 = arr1.concat(arr2);

console.log(arr3);


//map reduce
console.log("map filter reduce");
//map create new array

let arr9 = [13,23,11,55];

let newarray = arr9.map((value , index , array) => {
    console.log(value , index , array);
return value + 1;
});

console.log(newarray);


let newarray1 = arr9.filter((value) =>{
return value >50;
})

console.log(newarray1);

//reduce
console.log("reduce starts here '''''''''''''''''''''''''''''''''''''");
let arr10 = [1,2,3,4,5];
let newarray2 = arr10.reduce((value1 , value2) =>{
    return value1 + value2
})

console.log(newarray2);

let arr11 = arr10.sort();
console.log(arr11);


//object methods



let obj = {
    name :"atharv",
    age : 22 ,
    fullname : function(){
        console.log ("name " + this.name + "age"  + this.age);
    }
}

console.log("check atharv 22 here" + obj.fullname());

obj.name = "rahul";
obj.age = 19;
obj.fullname();
console.log(obj);

obj.name = "vaspate";

console.log(obj);

let values1 = Object.values(obj);
console.log(values1);


//to stringify

let string1 = JSON.stringify(obj);
console.log(string1);


//to copy objects

let obj1 = {
    email : "ath@g.com",
    address : "pune",
    
}

let copy1 = obj1;
console.log(copy1);

obj1.email = "t@g.com";
console.log(copy1.email);

//The class becomes useful when you create an instance of the class. An instance is an object containing data and behavior described by the class.
class User{
    name1 ;
    name2 ;
constructor(name1 , name2){
    this.name1 = name1;
    this.name2 = name2;
}

getname(){
    return this.name2;
}
}
let instanceobj = new User("atharv" , "rahule"); //create instance

console.log("0000000000000000000000000000000000000000000000000000000")

console.log(instanceobj.name1)

console.log(instanceobj.getname());



console.log(typeof(instanceobj));

//assign keyword to create copy of objects

let obj3 = {
    name1 : "atharv",
    age3 : 22 
}

let obj4 = Object.assign({} , obj3); // (source , target)

console.log(obj4.age3);
console.log(obj3.name1);


// ===

let a = {
    fullname : "atharv",
    fullage : 22 ,
    check : "efgh"
}

let b = {

    fullname : "atharv",
    fullage : 22,

    check : "abcd"


}

console.log(a===b); //this checks instance of object // only same when same object instance


let c = a;

console.log(c);

console.log(c===a);
console.log("abcd" + Object.is(a , b));
console.log("efgh" + Object.is(a , c))

console.log("z" + (a == b));
console.log("z" + (a == c));


//== manual 

console.log("manual " + (a.fullname === b.fullname));
console.log("manual1 " + (a.check === b.check));


//shallow check returns keys //cannot work for nested objects



function checkkeys(a,b){

    let key1 = Object.values(a);  //for values
    let key2 = Object.values(b);
    // let key1 = Object.keys(a); //for keys
    // let key2 = Object.keys(b);
for(let i = 0;i<key1.length;i++){
    console.log("inside for loop")
    console.log(key1[i]);
    console.log(key2[i]);
    if(key1.length !== key2.length){
        console.log("value unequal");
    }
    if(key1[i] !== key2[i]){
        console.log("values unequal");
        return false;
    
    }

}

return true;

}



console.log("checkkeys" + " " + checkkeys(a , b));





//for in for of for each /accesses index
// for in gives index and for of gives value


let letters = ["a" , "b" , "c" , "d"];
let empty = [];


for(let number1 in letters){
    empty.push(letters[number1]);
}

console.log(empty);


//no need for index
console.log("for of loop")

let text = "atharv";

for(let char of text){
   console.log("each char" + " " +  char);

}

console.log(empty);

//for each loop

let arr20 = [2,4,1,123];
arr20.forEach((value , index , array) => {
    console.log("for each loop is : pppppppppppppppppppppp" + value * 2 , index  , array);
})


let input = 1;
switch(input){
    case 1:
        console.log("case 1 here");
        break;


    case 2 : 
    console.log("case 2 here")
    break;


    default:
        console.log("name atharv printed")
        break;
}


//function declaration and expression

//declaration has funckeyword with name ,  expreession assinged to variable

function add(a , b){
    return (a+b);
}


let result = add(2,3);

console.log(result);


let result1 = function(a,b){
  return (a+b);

}


let finalresult = result1 (10,10);
console.log(finalresult);



//hoisting 
// var hoist = "hii" ; 

//function expressions not hoisted

console.log(hoist);
// console.log(hoist1);
// console.log(hoist2);


greet();
// greet3();
function greet(){
    console.log("hello");
}

var hoist = "hii" ; 
console.log(hoist);


let hoist1 = "hello1";

const hoist2 = "hello3";


const greet3 = function(){
    console.log ("inside func expre");
};


//closures
console.log("closures start here");
let message1 = "helo";

function greet(){
    let message2 = "he";
    function greet12(){
        console.log(message2);
    }
    message2 = "check if value changed";
return greet12;
}

let cresult = greet();
cresult();

//arrow functions
console.log("arrow starts")
const userw = {
    launguage : "hindi",
    birth : 22,
    welcome : function(){
        console.log(`my launguage is 8888888888888888880000000000000${this.launguage}`);

    }

}
console.log(this);
userw.welcome();


function usern(){
    let user = "atharv";
    console.log("here show this " + this.user);
}

let checkingarrow = function (){
    let user = "atharv";
    console.log("here show this 2 " + this.user);
}

usern();
checkingarrow();


let arro = ()=>{

    let gender = "male";
    console.log("check gender /???????????????????????????" + this.gender);
}


arro();


let sum = (a,b) =>  a + b

console.log(sum(90 , 10));
////////////////////////////////////////////////////////////////////////////////// 

//same as main doubt

let details = {
	name:"testName",
	getName:()=>{
		console.log(this.name)
	}
}

let details1 = {
	name:"testName",
	getName:function (){
		console.log("this is normal " + this.name)
	}
}

console.log("--------------------------")

 details.getName();

// console.log(fresult);

details1.getName();

// console.log(fresult1);

console.log("/////////////////////////////")


//arrow for normal fu



function checkar(){
    console.log(this.name);
}


/////////////////////////////// this is main doubt

console.log("here it starts");
let objar = {
    name :"atharv",
    age : 22 ,
    fullname : function()  {
        console.log (`${this.name}  space give  ${this.age} `);
    }
}



const objar1 = {
    name :"atharv",
    age : 22 ,
    fullname : () => {
        console.log ( ` hereeeeeeeeeeee ${this.name} + ${this.age} `  )
}
}
objar.fullname();

objar1.fullname();







//////////////////////////////////// 

let checkingarrow1 = function (gender4){
   
    console.log("here show this 2 " + gender4);
}
let gender4 = "male"

checkingarrow1(gender4);


let arro1 = (gender1)=>{
console.log(gender1);
    // let gender = "male";
    console.log("check gender /???????????????????????????" + gender1);
}

arro1(2);


function display(){
    console.log(this.x);
  }
  var obj9 = {
    x:2,
    display:display
  };
  obj9.display()


// function display(){
//     console.log(this.x);

// }

// let obj9 = {
//     x : 7,
//     display : display()
// }

// console.log(obj9.display);



console.log("start from here <<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

let user = {
    name8 : "atharv" , 
    display : function display(){
        console.log("here inside normal function " + this.name8)
    }
}

user.display()

// let fx = user.display;
// fx.call(user)




var studentList = {
    title: 'BE Computer',
    students: ["Atharv", "Utkarsh"],
    showList() {
        this.students.forEach((student) => {
            console.log("here inside arrow function ************************************* " + this.title + ': ' + student);
        })
    //   console.log('title', this.title)
    //   console.log('students', this.students)
    }
  }


  studentList.showList();


  



  var studentList1 = {
    title: 'BE Computer',
    students: ["Atharv", "Utkarsh"],
    showlistfunc: function() {
        this.students1 = ["rahul", "rohit"]; // corrected assignment syntax
        this.title1 = "be comp 22"; // corrected assignment syntax
        this.students1.forEach((student) => {
            console.log("here inside arrow function  )))))))))))))))))))))))))" + this.title1 + ': ' + student); // corrected variable name
        });
    }
};

  console.log(studentList1.showlistfunc());

