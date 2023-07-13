

console.log("started")


function first1(){
    return new Promise((resolve , reject)=>{
                  setTimeout(() => {
                    let t = 90;
                    t = t+90;
                    resolve("inside resolve 180")
                  }, 5000);

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

}).then((message) =>
{
  console.log("thired completed " + message);
}
).catch((message)=>{
  console.log("error occured in first second" , message)
}).finally(()=>{
    console.log("always printed")
});

console.log("ended")



console.log("async functions");




async function abcd(){

  try{

let ab = await first1();
let abcd = await second2();

console.log(ab);
console.log(abcd);
console.log("check here abcd ab");
}
catch{
  console.log("error received");

}

  
}

function test (){
  console.log("find when gets executed");
}


// async function abcde(){
//   let abc = await second2();
//   console.log(abc);
  
  
    
//   }


  abcd();
  test();
  // abcde();



  function name1(){
   let name3 = "rahul";
  console.log(name3);
  }

name1();

let obj2 = {
  name : "rohit",
  age7 : 889
}

let obj = {
  name : "xyz",
  age : 22,
  display : function (){
console.log("here" + this.name + "check here " + this.age);
  }
}

let abcde = obj.name;
console.log(abcde);
obj.display();

class age{
  constructor(age){
    this.age = age;

  }

   age1(age) {
    console.log(age);
    
  }

 
}


let obj5 = new age;
obj5.age1(22112312);




/////////////////////////////////////

let obj99 = {
  name : "xyz",
  age : 22,
  display :  () => {
console.log(this);
  }
}

obj99.display();