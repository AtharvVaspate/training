
let but = document.getElementById("buttonsub");
let parag = document.getElementById("paragraph");
let head = document.getElementById("heading");
let nextpage = document.getElementById("nextpage");



parag.addEventListener('mouseover' , function run(){
    alert("mouse over para");
    prompt("this iis prompt" , "this is default value");
    alert("this is alert")
})






function hideshowpara(){


if(parag.style.display == "none"){
    parag.style.display = "block";
}
else{


parag.style.display = "none";
}




}



but.className = "buttonclassinserted secondclassinserted thiredbuttonclassinserted";

but.classList.remove("thiredbuttonclassinserted")

but.classList.add("red")



console.log("checing if working")

let username = document.getElementById("emailhere");
let password = document.getElementById("passwordhere");
let button1 = document.getElementById("subbutton");
let emailerror = document.getElementById("showemailerror");
let passworderror = document.getElementById("showpassworderror");
let name23 = document.getElementById("namehere");
let name1 = document.getElementById("shownameerror");

let passwordconfirm = document.getElementById("passwordconfirmhere")
let confirmpassworderror = document.getElementById("showconfirmpassworderror");

let flag = 1;
console.log("name starts")
function check(){
console.log("here")
console.log("Name 2")
   

    if (name23.value == ""){
        name1.innerHTML = "Please enter email";
        console.log("here 2")
        flag = 1;

       
    }
    else if(name23.value.length <3){
        name1.innerHTML = "enter longer username"
        flag = 1;
    }
    else{
        name1.innerHTML = ""
        flag = 0;
    }







    if (username.value == ""){
        emailerror.innerHTML = "Please enter email";
        console.log("here 2")
        flag = 1;

       
    }
    else if(username.value.length <3){
        emailerror.innerHTML = "enter longer username"
        flag = 1;
    }
    else{
        emailerror.innerHTML = ""
        flag = 0;
    }

    if (password.value == ""){
        passworderror.innerHTML = "Please enter password";
        console.log("aaaaaaaaaaaaaaasccaswaeeqesaaaaaaaa22222222222222")
        flag = 1;
        
    }
 
    else{
        passworderror.innerHTML = ""
        flag = 0;
    }

    if (passwordconfirm.value == ""){
        console.log("aaaaaaaaaaaaaaaaaaaavvvvvvvvvvvvvvvvvvvvvvvvva")
        confirmpassworderror.innerHTML = "Please enter password";
        console.log("here 2")
        flag = 1;
    
       
    }
       else if(passwordconfirm.value.length <3){
        confirmpassworderror.innerHTML = "enter longer password"
        flag = 1;
    }
    else if(passwordconfirm.value != password.value){
        confirmpassworderror.innerHTML = "Passwords do not match"
        flag = 1;
    }
    
        else{
        confirmpassworderror.innerHTML = ""
        flag = 0;
    }




    if(flag == 1){
        return false;
    }
    else{
        return true;

    }
    
   
}

 /////////////////////////////
//  passwordconfirmhere
//  showconfirmpassworderror
// passwordconfirm
// confirmpassworderror

//arrow and normal function

function arrowfunc (){
    console.log("check arror")
}

let funcarrow =  () => console.log("inside arrow");


let suming = (a,b) =>{
    console.log(a+b);
    console.log(a-b);
}

funcarrow();
arrowfunc();
suming(10 , 10);




console.log("check id displayed")
    function multiply (firstnum ,secondnum){
        console.log("debugger inserted")
      //  debugger;
        console.log("after debugger")
        return firstnum * secondnum;



    }
    let firstnum = 22;

    let secondnum = 33;
   let result1 =  multiply(firstnum , secondnum);


    console.log(result1);

  
        try{
                 console.log(atharv)
        }
        catch(error){
console.log("name not present" + error);
        }
        finally{
console.log("Last step");
        }
    

//object constructor

function studentdetails(first , last , age){
    this.firstname = first;
    this.lastname = last;
    this.age = age;

}

var student1 = new studentdetails("atharv" , "vaspate ", 22);
var student2 = new studentdetails("abcd" , "efgh" , 10);
student1.nationality = "indian";

//prto class
studentdetails.prototype.height = 150;

console.log(student1);
console.log(student2);
console.log(student1.firstname);
console.log(student2.height);

//classes

class Railway{
//constructor
    constructor(rname , rnumber){
        this.rname = rname;
        this.rnumber = rnumber;

    }
    submit(){
        console.log("form submitted" + this.rname +"+"+ this.rnumber);
        
    }
    cancel(){
        console.log("form cancelled");

    }

    // fill(rname , rnumber){
    //     this.rname = rname;
    //     this.rnumber = rnumber;
    // }
}

let atharv1 = new Railway("train1" , 100);
// atharv1.fill("rail" , 2222);

atharv1.submit();



//custom error

try{
    let age1 = 99;
    if(age1<150){
        throw new ReferenceError("this is reference error");
    }


}catch(error){
    console.log(error.message);
    console.log(error.stack);
    console.log(error.name);
}

////////////////////////////////////////////////
//custom error

class check1 extends Error {
    constructor(msg) {
        super(msg);
    }
}
  
try {
    if (10 != 20) 
        throw new  check1("10 is not equal  to 20");
}
catch (err) {
    console.error(err);
}

///////////////////////////////////////////////////////

const array12 = [2,4,1,7,5];

array12.forEach ((number) =>{
    console.log("array is " + number);
});



let arrayless = array12.filter((value) =>{
    return value <5;
   
})

console.log(arrayless);


let arraymap = array12.map ((value , index , array) =>{
console.log(value , index , array);
return value +1;

});

console.log(arraymap);


//promise.all

let promise1 = new Promise((resolve , reject) =>{
    resolve("promise 1 done");
});
let promise2 = new Promise((resolve , reject) =>{
    resolve("promise 2 completed");
});

Promise.all([
    promise1,
    promise2
]).then((message) =>{
    console.log("completed both promisses" + message)
}).catch((message) =>{
    console.log("promises failde" + message)
}).finally(() =>{
     console.log("finally 1 and 2");
});



let details = {
	"name":"testName",
	getName:()=>{
		console.log(this.name + "aaaaaaaacsadadqdqewqq")
	}
}

console.log(details.name);
console.log(details.getName())


let abcde = "hello";
abcde = abcde + "world";
console.log(abcde);

abcde[1] = "Y";

console.log(abcde);