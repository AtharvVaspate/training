
const array1 = [1,2,3,4];  //
array1.push(23);
array1.length;


let num = 99;
let name2 = "a";
var name1 = "b";
let pow = 2
c = 22.3;

console.log(num);
console.log(name1);
console.log(name2);
console.log(c);





//unary binary 
let d = 5;
d = -d;


let e = num + d;

console.log(d);
console.log(e);

console.log("multiplication" + (d*num));
console.log("power" + (pow ** 7));
console.log(++num);


let f = "apple";
let g = "fruit";

//pr

console.log(`${f} is a ${g}`); //string literal  can add values at run time

/////////////////////////////////////////
let use = 9;
const userinfo = {
  firstname : "atharv",
  lastname : "vaspate"
};

//try for in and for of on above objects to iterate the objects

for(let i = 0;i<use;i++){
    console.log(i);
}
//debugger;
/////////////////////////////////////////
if(use<10){
    console.log("less than")
}
else{
    console.log("greater than");
}
////////////////////////////////////////////

if(use<10){
    console.log("less than")
}
else if(use>100){
    console.log("greater than 100")
}
else{
    console.log("greater than");
}

/////////////////////////////////////
while(use<12){
    console.log("use greater than 10");
    use++;
}

do{
    console.log("inside do while");
    use++;
}while(use<16);


//////////////////////////////////////
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log("even ")
 
    }
   
  }
////////////////////////////

  for (let i = 0; i < 10; i++) {
    if (i == 5) {
      break;
    }
    console.log(i);
  }



  ////////////////////////////////
  function greet (message){
    console.log(message);
  }

  let message = "hello";

  greet(message);

  ///////////////////////////////////



  function add(number , number1 = 2){
    return (number + number1);
  }

  let result = add(2,5);
  console.log(result); // function will have only single return at a time.
  //with objects we can return more than 1 value
//////////////////////////////////


let v = document.getElementById("para");
v.style.color = "blue";



document.title = "changing title"


let foot = document.getElementById("footer")

foot.innerHTML = "added with dom";


console.log(document.body.firstChild);

console.log(document.body.lastChild);



//////////////////////////////////
const list = document.querySelector('ul');


const newto = document.createElement('li');
newto.textContent = 'signout';


list.appendChild(newto);

//////////////////////////////////////
let footercl = document.getElementsByClassName("footerclass");
console.log(footercl);
footercl[0].style.border = '12px solid black';

/////////////////////////////////////////


let tag = document.getElementsByTagName('article');
tag[0].style.fontFamily = "Impact,Charcoal,sans-serif";

///////////////////////////



let deleteelement = document.getElementById("deletethis");
deleteelement.remove();





//////////////////////////////////////////




//next part starts here
//callback
console.log("next starts here 12 july ''''''''''''''''''''''''''''''''''''");
console.log("first");
setTimeout(() => {
    for(let i = 0 ;i<7;i++){
        console.log(i);
    }
},1000 );

console.log("last");

////////////////////////////////////////////////////////////


function abcd(){
  console.log("hello");
}

function hij(){
  console.log("bye");
}

function efg(a , b , callback){
  console.log("hi");
  console.log(ab + bc)
  callback();
}
let ab = 22;
let bc = 9;

efg(ab , bc , abcd);

efg(22 , 33 , hij);


////////////////////// promises resolve reject //////////then catch finally

let ticket = new Promise(function(resolve , reject){
   let ticket = 9;
    if(ticket == 9){
        resolve("inside resolve")
    }
    else{
        reject("inside reject");
    }

})



ticket.then((message)=>{
console.log("for positive result" , message)


}).catch((message)=>{
    console.log("for negative result" , message)
}).finally(()=>{
    console.log("always executed")
})


///////////////////////////////////////////////// promis 2
console.log("check here for promise *************)e7711************************************")

function first1(){
    return new Promise((resolve , reject)=>{
                  setTimeout(() => {
                    let t = 90;
                    t = t+90;
                    resolve("inside resolve 180")
                  }, 1000);

    })

}
function second2(){
    return new Promise((resolve , reject)=>{
                  setTimeout(() => {
                  let w = 10;
                  w = w+100;
                    resolve("inside resolve 110")
                  }, 3000);

    })

}

function thired3(){
  return new Promise((resolve , reject)=>{
                setTimeout(() => {
                let w = 1000;
                w = w+100;
                  resolve("inside resolve 1100")
                }, 3000);

  })

}

first1().then((message)=>{
    console.log("first completed" , message);
    return second2(message);
}).then((message)=>{
    console.log("second completed" , message);
    return thired3(message);

}).catch((message)=>{
  console.log("error occured in first second" , message)
}).finally(()=>{
    console.log("always printed")
});



// /////////////////////////////////////////////////////// async await

function checkasyncawaitfunc() {
    return new Promise((resolve , reject)  => {
      setTimeout(() => {
        resolve('resolved' + "this message isnide");
      }, 2000);
    });
  }
  
  async function asyncCall() {
    try{
    console.log('calling' + "before ))))))))))))))))))))))))00000000000000000000000000000");
    const result = await checkasyncawaitfunc();
    console.log(result);
    console.log("checking" + "check here \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")
    }
    catch{
        console.log("error occured in async await here")
    }
   
  }
  
  asyncCall();
  /////////////////////////////////////////////////////////////




  let age1 = new Promise(function(resolve , rejet){

   let ageval =   prompt("enter promise value");
if(ageval>100){
  resolve("ok")
}
else{
  rejet("problem")
}



  })

  age1.then((message )=> {
    console.log(message + "e23131313131" );
  
  }).catch((message) => {
    console.log(message + "dsfaeqweqeq1313131");

  }).finally(() => {
    console.log("finally age done 21313131313");

  })



  
