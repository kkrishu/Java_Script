// var let const
/*
var a;
var a = 10;
let a;
let a = 10;
const a=12;
*/


//declaration and initialisition// 
/*
var a;          declare kara
var a = 10;     declare and initialize bhi kara

let a;
let a  = 10;
*/
// let a = 12;




// FUNCTION


// function dance(){
//     console.log("dance");
//     console.log("dance");
    
// };
// dance();


// let fnc = function(){
//     console.log("HBD")
// };
// fnc();

// let fnc = ()=>{
//     console.log("HBD")

// }
// fnc();

// function dance(A1){
//     console.log(`${A1} nach raha haii`);
// }
// dance("Kush");
// dance("ghoda");
// dance("hiran");
// dance("chuhaa");

// function add(A1,A2){
//     console.log(A1+A2)
// }
// add(200,50);
// add(899,9887);

// function add(V1 =0,V2 =0){
//     console.log(V1+V2)

// }
// add();

// function abcd (...value){
//     console.log(value)

// }
// abcd(1,2,3,4,5,6,7,8,9,10);

// jab arguments bahut sare use kartey haii to usse bachne ke liye hum rest aur spread ka use kartey haii...ager function ka paramete space mai lage to usse rest kehtey haii

// function abc(a,b,c,...value){
//     console.log(a,b,c,value)
// };
// abc(1,2,3,4,5,6,7,8,9);

// Return matlab jaha se aye ho whi jaoo

// function abcd(){
//     return 100 ;
// }

// let value =abcd();
// console.log(value);


// function abcd(A){
//     return 100 + A;
// }

// let val =abcd(57);
// console.log(val);

// first class function -> function ko value ki tarah treat kiyaa

// function abcd(val){
//     val();
// }
// abcd(function(){
//     console.log("HBD");
// });

// higher order function -> ek aisa function hai jo ki return kare function ya accept kare function apne parameter maii

// function abcd(val){

// }
// abcd(function(){

// })

// function abcd(val){
//     return function(){

//     }
// }
// abcd();


// let a = 20;

// function abcd(){  // aisa function jo ki bahar ki value ko na badlee usse pure fnc kehtey haii
//     console.log(a);  // aisa functiom jo ki bahar ki value ko badal dee usse impure fnc kehtey haii
// }

// function hui(){
//     a++;
//     console.log(a);
// }
// abcd();
// hui();

// closures -> ek function jo Return kare ek aur function aur return hone wala function hamesha use karege ek variable parent function kaa


// function abcd(){
//     let a = 12;
//     return function(){
//         console.log(a);

//     }
// }


//lexical scoping
// function abcd(){
//     let a = 12;
//     function efgh(){
//         let b = 13;
//         function ijkl(){
//             let c = 14;
//         }
//     }
// }

// IIFE

// (function(){

// })();

// HOISTING

                   //Fnc declaration mai work karega          
// abcd();  

// function abcd(){
//     console.log("HBD");
// }


//                    //Fnc Expression mai nhi work karega

// efgh();

// let efgh = function(){
//     console.log("HBD");
// }

//use parameter to accept any number and return the total

// function getscore(...scores){
//     let total = 0;
//     scores.forEach(function(val){
//         total=total+val;
//     });
//     return total;

// }
// console.log(getscore(10,12,13,14,18));

//early return

// function checkage(age){
//     if (age <= 18)return "too young";
//     return "Allowed";
// }
// console.log(checkage(23));

// function abcd(val){
//     val();
// }
// abcd(function(){
//     console.log("HBD")
// });

//convert normal function to IFFI
// (function init(){
//     console.log("Initialized");
// })();


//Write a bmi calculator 

// function bmi (weight, height){
//     return weight/(height*height) ;
// }
// console.log(bmi(68,1.75).toFixed(2));

//Discounter calculator

// function DiscountCalculator(discount){
//     return function(price){
//         return price-price*(discount/100);
//     };
// }
// let ten = DiscountCalculator(10);
// let twenty = DiscountCalculator(20);

// console.log(ten(2000));
// console.log(twenty(2000));

// Build a counter using closer

// function counter(){
//     let count=0
//     return function(){
//         count++;
//         return count;
//     };
// }

// let c = counter();
// console.log(c());
// console.log(c());
// console.log(c());

// let d = counter();
// console.log(d());
// console.log(d());
// console.log(d());
// console.log(c());
// console.log(c());
// console.log(c());

// Create a pure function to transform a value

// function double(val){
//     return (val*2);

// }
// console.log(double(10));

//Use IFFI to isolate variable
// (function (){
//     const password = "secret password"
//     console.log(password);
// })();
// console.log(password);



//Create an array with 3 fruits and print the second one 
// let fruit = ["apple","guava","banana"];

//Add mango at the end and pineapple at the start of thi array
// fruit.push("mango");
// fruit.unshift("Pineapple");

//replace the banana with the kiwi in this array
// let fruit = ["apple","guava","banana"];
// fruit.pop("banana");
// fruit.push("kiwi");

//insert red and blue in the index 1 in this array
// let colour = ["green","yellow"];
// colour.splice(1,0,"red","blue");

//extract only three element from the array
// let items = [1,2,3,4,5,6];
// let neww_array = items.slice(1,4);

//short this array alphabetically and then reverse it:
// let names = ["Bhavya","Zara","Sumita","krishu"];
// names.sort().reverse();

//Use .map() to square each number:
// let num = [1,2,3,4,5,6,7,8,9];
// let newnum = num.map(function(val){
//     return val*val;
// });

//Use .filter() to keep number greater than 10:
// let arr = [5,12,20,8,20,3];
// let newarr = arr.filter((val)=>{
//     return val>10;
// });

// Use .reduce() to find sum of this array :
// let arr = [10,20,30];
// let newarr = arr.reduce(function(acc,val){
//     return acc+val;
// }, 0);

//use .find to get fist number less than 10:
// let arr = [12,15,3,8,20];
// let newarr = arr.find(function(val){
//     return val<10;
// });

//Use .some() if any student has scored below 35
// let arr = [45, 60, 38, 28];
// let newarr = arr.some(function(val){
//     return val<35;
// });

// use .every() to check all number are even:
// let arr = [2,3,4,5,6,7,10];
// let newarr = arr.every(function(val){
//     return val % 2 ===0;
// });

//Destructure this array to get firstname and lastname
// let fullname = ["krishu","kumar"];
// let [firstname,lastname]=fullname; 

//Merge two array using spread operator:
// let a = [1,2,3,4];
// let b = [5,6,7,8];
// let c = [...a,...b];

// add "India" to the start of the array
// let countries = ["USA","UK"];
// countries = ["India",...countries];

//Clone this array properly not by reference :
// let arr = [1,2,3,4];
// let arr2 = [...arr];

//Object 
    //key value structure
// let obj = {
//     name: "krishu",
//     age: 19,
//     khana: "Biryani",
// };
// let aa = "name"


//nesting and deep acces 
// const user = {
//     name: "krishu",
//     address:{
//         city:"bhopal",
//         pin:829111,
//         location:{
//             lat: 22.3,
//             lng:89.3,

//         },
//     },
// };

//deep access
// user.address.location.lat

//object destructuring
// let {lat,lng} = user.address.location;


//looping :- for in 
// let obj = {
//     name: "krishu",
//     age: 26,
//     email: "test@test.com",
// };
// for (let key in obj){
//     console.log(key,obj[key])
// }

//Object.keys(obj);
// jab keys ka array banana hota to ye use kartey haii

//Object.entries(obj);

//Copying object:- Spread , object.assign, deep clone
// let obj2 = {...obj}

//let obj2 = Object.assign({price: Infinity}, obj);

//DEEP CLONEING

// let obj = {
//     name: "krishu",
//     age: 19,
//     email: "krishukumar72@gmail.com",
//     address: {
//         city: "Bokaro",
//     },
// };

// let obj2 = {...obj};   
// obj2.address.city = "Pune";
//  is clone se main mai bhi change ho jati haii is liye hum deep clone use kartey haiii.

// let obj2 = JSON.parse(JSON.stringify(obj))
// obj2.address.city = "Pune"

//Optional chaining 
// obj2?.address?.city

//Computed Properties

// let role = "Admin";

// let obj = {
//     name: "krishu",
//     age: 19,
//     email: "krishukumar72@gmail.com",
//     address: {
//         city: "Bokaro",
//     },
//     [role]: "Krishu",
// };













// THE DOM

// let abcd = document.getElementById("abcd");
// console.log(abcd);

// let ABCD = document.getElementsByClassName("ABCD");
// console.log(ABCD);

// let abcd = document.querySelector("h1");
// console.log(abcd)

// let abcd = document.querySelectorAll("h1");
// console.log(abcd)

// let h1 = document.querySelector("h1")
// console.dir(h1);
// h1.innerText = "hlww krishuu";
// h1.textContent = "hwll krishuu kya haal haii";
// h1.innerHTML = "<i>hey</>";

// let a = document.querySelector("a");
// console.dir(a);
// a.href = "https://www.google.com/";
// a.setAttribute("href","https://www.google.com");

// img = document.querySelector("img");
// img.setAttribute("src","https://images.unsplash.com/photo-1770064319616-a7a2d81d09ac?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8");

// let a = document.querySelector("a");
// console.log(a.getAttribute("href"));

// let a = document.querySelector("a");
// a.removeAttribute("href");

//create element 
//prepand and append karo jaha bhii element cahiye waha

// let h1 = document.createElement("h1");
// h1.textContent = "hello ji kaise hooo kya haal chal haii";
// console.log(h1);
// document.querySelector("body").prepend(h1);


//Dynamic and DOM manipulation 

// let h1 = document.createElement("h1");
// h1.textContent = "kya haal hai haan mai bahar se aaya huuu";
// document.querySelector("div").prepend(h1);



// let h1 = document.querySelector("h1");
// h1.style.color = "red";
// console.dir(h1);
// h1.style.backgroundColor = "white"
// h1.style.fontFamily ="Gilroy";
// h1.style.textTransform = "Capitalize";

// let h1 = document.querySelector("h1")
// console.dir(h1);

// h1.classList.add("hulu");
// h1.classList.remove("hulu");
// h1.classList.toggle("hulu");


// question:- Select all <li> elements and print their text using a loop.?

// let lis = document.querySelectorAll("li");

// lis.forEach(function (val){
//     console.log(val.textContent);
// });

// for(let i = 0 ; i< lis.length; i++){
//     console.log(lis[i].textContent);
// };

//question  Select a para and change its content with 

// let p = document.querySelector("p");
// p.innerHTML = "<br>Updated</br> by javascript";

// how to get an img src by using java script?

// let img = document.querySelector("img");
// console.log(src);
// console.log(img.getAttribute("src"));

//What does setAttribute() do?

// document.querySelector("img").setAttribute("src","https://images.unsplash.com/photo-1772381815571-abe72838186e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D");

//Add a title attribute to a div dyanamically...?

// let div = document.querySelector("div");
// div.setAttribute("tittle","Some info");

//Create a new img element with a placeholder source and add it at the top of div.

// let img = document.createElement("img");
// img.setAttribute("src","https://images.unsplash.com/photo-1714578187208-7461b93b6aeb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW1hZ2UlMjBwbGFjZWhvbGRlcnxlbnwwfHwwfHx8MA%3D%3D");

// img.classList.add("place_holder");
// document.querySelector("div").prepend(img);

//Select the first item in list and delete it from the DOM.

// let ul = document.querySelector("ul");
// let li = document.querySelector("li");
// ul.removeChild(li);

// add a highlight class to every even item in a list..?

// let li = document.querySelectorAll("ul li:nth-child(2n)");
// li.forEach(function(elem){
//     elem.classList.add("highlight");
// })

// set a font size of all <p> elements to 18px using .style

// let p = document.querySelectorAll("p");
// p.forEach(function(elem){
//     elem.style.fontSize = "18px";
// })







//EVENT AND EVENT HANDALING



// add event listener:-

// let h1 = document.querySelector("h1");
// h1.addEventListener("click",function(){
//     h1.style.color = "Red";
// });

// let p = document.querySelector("p");
// p.addEventListener("click",function(){
//     p.style.color = "yellow";
// });

// let para = document.querySelector("p");
// para.addEventListener("dblclick",function(){
//     para.style.color = "Blue";
// });

//Remove event listener:-

// let p = document.querySelector("p");

// function dblclick(){
//     p.style.color = "yellow";
// }
// p.addEventListener("dblclick",dblclick);

// p.removeEventListener("dblclick",dblclick);

//Common Event:-
     
         //click event:-
// let p = document.querySelector("p");

// function click(){
//     p.style.color = "Red";
// };
// p.addEventListener("click",click);

      //Input event:-

// let input = document.querySelector("input");
// input.addEventListener("input",function(dets){
//     if (dets.data !== null){
//         console.log(dets.data);
//     }
// });

         //Change Event:-

// let sel = document.querySelector("select");
// let device = document.querySelector("#device");

// sel.addEventListener("change", function(dets){
//     console.log(dets.target.value);
//     // device.textContent = "Device Selected";
//     device.textContent = `${dets.target.value} is Selected`;
// });



// let h1 = document.querySelector("h1");
// window.addEventListener("keydown",function(dets){
//     if(dets.key == " "){
//         h1.textContent = "SPACE"
//     }
//     else{
//         h1.textContent = dets.key ;
//     }
// });


// let btn = document.querySelector("#btn");
// let fileinp = document.querySelector("#fileinp");

// btn.addEventListener("click",function(){
//     fileinp.click();
// });

// fileinp.addEventListener("change",function(dets){
//     const file = dets.target.files[0];
//     if (file){
//         btn.textContent = file.name;
//     }
// });



            //Submit event 

// let form = document.querySelector("form");
// let inputs = document.querySelectorAll("input");

// form.addEventListener("submit",function(dets){
//     dets.preventDefault();
//     // console.log(
//     //     inputs[0].value,
//     //     inputs[1].value,
//     //     inputs[2].value,
//     //     inputs[3].value,
//     // );
// });








// let form = document.querySelector("form");
// let inputs = document.querySelectorAll("input");
// let main = document.querySelector("#main");

// form.addEventListener("submit",function(dets){
//     dets.preventDefault();

//     let card = document.createElement("div");
//     card.classList.add("card");

//     let profile = document.createElement("div");
//     profile.classList.add("profile");

//     let img = document.createElement("img");
//     img.setAttribute("src",inputs[0].value);

//     let h3 = document.createElement("h3");
//     h3.textContent = inputs[1].value;
//     let h5 = document.createElement("h5");
//     h5.textContent = inputs[2].value;
//     let p = document.createElement("p");
//     p.textContent = inputs[3].value;

//     profile.appendChild(img);
//     card.appendChild(profile);

//     card.appendChild(h3);
//     card.appendChild(h5);
//     card.appendChild(p);

//     main.appendChild(card);


//     inputs.forEach(function (inp){
//         if(inp.type !== "submit"){
//             inp.value = "";
//         }
        
//     });
// });



//mouseover & mouseout  :-


// let box = document.querySelector("#box");

// box.addEventListener("mouseover", function () {
//     box.style.backgroundColor = "yellow";
// });
// box.addEventListener("mouseout", function () {
//     box.style.backgroundColor = "red";
// });


// let box1 = document.querySelector("#box1");

// box1.addEventListener("mouseover", function () {
//     box1.style.backgroundColor = "yellow";
// });
// box1.addEventListener("mouseout", function () {
//     box1.style.backgroundColor = "red";
// });


// let box2 = document.querySelector("#box2");

// box2.addEventListener("mouseover", function () {
//     box2.style.backgroundColor = "yellow";
// });
// box2.addEventListener("mouseout", function () {
//     box2.style.backgroundColor = "red";
// });


// let box3 = document.querySelector("#box3");

// box3.addEventListener("mouseover", function () {
//     box3.style.backgroundColor = "yellow";
// });
// box3.addEventListener("mouseout", function () {
//     box3.style.backgroundColor = "red";
// });


// mousemove :-

// let box = document.querySelector("#nav");

// window.addEventListener("mousemove",function(dets){
//     box.style.top = dets.clientY + "px";
//     box.style.left = dets.clientX + "px";
// })


// EVENT BUBBLING

// box.addEventListener("click",function(){
//     alert("clicked");

// })


// let ul = document.querySelector("ul");

// ul.addEventListener("click",function(dets){
//     dets.target.style.textDecoration = "line-through";
// })
// ul.addEventListener("click",function(dets){
//     dets.target.classList.toggle("lt");
    

// });

// bubbling & capturing phase


// let a = document.querySelector(".a");
// let b = document.querySelector(".b");
// let c = document.querySelector(".c");
// let btn = document.querySelector("button");

// btn.addEventListener("click",function(){
//     console.log("btn clicked");
// });

// c.addEventListener("click",function(){
//     console.log("c clicked");
// }
// );

// b.addEventListener("click",function(){
//     console.log("b clicked");
// },true
// );

// a.addEventListener("click",function(){
//     console.log("a clicked");
// },true
// );

// let inp = document.querySelector("input");
// let spn = document.querySelector("span");
// inp.addEventListener("input",function(){
//     spn.textContent = inp.value.length;

// });

// let inp = document.querySelector("input");
// let spn = document.querySelector("span");
// inp.addEventListener("input",function(){
//     let left = 20 - inp.value.length;
//     spn.textContent = left;
//     if (left < 0){
//         spn.style.color = "red";
//     }
//     else{
//         spn.style.color = "white";
//     }

// });


// Forms and Forms validation

// let nm = document.querySelector("#name");
// let form = document.querySelector("form");

// form.addEventListener("submit",function(dets){
//     dets.preventDefault();

//     if(nm.value.length <= 2){
//         document.querySelector("#hide").style.display = "initial";
//     }
//     else{
//         document.querySelector("#hide").style.display = "none";
//     }
// })


// form.addEventListener("submit",function(dets){
//     dets.preventDefault();
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     let ans = emailRegex.test("a.@34.com");
//     console.log(ans);

// })


// password & email Validator

// let email = document.querySelector("#email");
// let password = document.querySelector("#password");
// let form = document.querySelector("form");

// form.addEventListener("submit",function(dets){
//     dets.preventDefault();

//     document.querySelector("#emailError").textContent = "";
//     document.querySelector("#passwordError").textContent = "";

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

//     let emailans = emailRegex.test(email.value);
//     let passwordans = passwordRegex.test(password.value);
//     let isValid = true;
//     if (!emailans){
//         document.querySelector("#emailError").textContent = "Email is incorrect";
//         document.querySelector("#emailError").style.display = "initial";
//         isValid = false;
//     }
//     if (!passwordans){
//         document.querySelector("#passwordError").textContent = "Use Valid formate";
//         document.querySelector("#passwordError").style.display = "initial";
//         isValid = false;
//     }
//     if (isValid){
//         document.querySelector("#Resultmesg").textContent = "Alll Correct"
//     }
// });


//settimeout function

// let tm = setTimeout(function(){
//     console.log("hello")
// },3000);

// clearTimeout(tm);

// let count = 10;

// let interval = setInterval(function(){
//     if(count >= 0){
//         console.log(count);
//         count--;
//     }
//     else{
//         clearInterval(interval);
//     }
    
// },1000);


//download progress bar

// let count = 0;
// let progress = document.querySelector(".progress-bar");
// let percentage = document.querySelector("#percentText");
// let int = setInterval(function(){
//             if (count<100){
//                 count++;
//                 progress.style.width = `${count}%`;
//                 percentage.textContent = `${count}%`;
//             }
//             else{
//                 document.querySelector("h2").textContent = "Download Completed";
//                 clearInterval(int);
//             }

// },10000/100);


// let tmout = setTimeout(function(){

//         document.querySelector(".glass-card").style.display = "none";

// },3000);




// LOCAL STORAGE --> aapke browser ke andar ki data jo ki aapke browser ke close hone ke baad bhi delete nhi hota haii wo usse save rakhta haii.
            // data STORE kaise kare  --> setItem
            // data FETCH kaise kare  --> getItem
            // data REMOVE kaise kare --> removeItem
            // data UPDATE kaise kare --> setItem se hi update bhi hota haii

    // In done mai hum 5MB tak ka data store kar saktey haii

// SESSION STORAGE --> aapke browser ke andar ki data jo ki apke browser ke close hone pe delete ho jati haii matlab tab close data gayab

// COOKIES ---> ye bhi aapke browser ke andar ke data save kartey haii and apke data browser ke data cookies naam ke property mai save hota haii also ye kaaam data ya lite data ke liye hota haii 
        // isme 4KB tak ki data store kar saktey haiii
 // cookies mai jo bhi data store karoge wo data wo data page reload pe automatically server per jayega



 // local storage mai hum data sirf string ke form mai hi save hoti hai to ager hum object ya koi array save kartey hai to hummne usse JSON.stringfy() kar ke karna hota haii..

//  localStorage.setItem("friends",JSON.stringify(["krishu","bhavya","sumita","kush"]));
//  //to get this data we have to parse it back to array using JSON.parse()
//  let fr = JSON.parse(localStorage.getItem("friends"));




// theme preference practice:-


// function setDarkorLight (){
//     if (window.matchMedia('(prefers-colour-scheme: dark)').matches){
//         document.body.classList.add("dark");
//         document.body.classList.remove("light");
//     } else {
//         document.body.classList.add("light");
//         document.body.classList.remove("dark");
//     }
// } 
// setDarkorLight();

// if (localStorage.getItem("theme")){
//     document.body.classList.add(localStorage.getItem("theme"));
// }else{
//     setDarkorLight();

// }
// window
// .matchMedia("(prefers-colour-scheme:dark)")
// .addEventListener("change",function(){
//     if(localStorage.getItem("theme")){
//         setDarkorLight();
//     }
    
// });

// let btn = document.querySelector("button");
// btn.addEventListener("click",function(){
//     if(document.body.classList.contains("dark")) {
//         document.body.classList.remove("dark");
//         document.body.classList.add("light");

//         localStorage.setItem("theme","light");
//     }else{
//         document.body.classList.remove("light");
//         document.body.classList.add("dark");

//         localStorage.setItem("theme","dark");
//     }
// });

// document.body.classList.add(localStorage.getItem("theme"));







// Real time search filter:-

// const users = [

// {
// name: "Amisha Rathore",
// pic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900",
// bio: "Silent chaos in a loud world | not for everyone"
// },

// {
// name: "Aarav Mehta",
// pic: "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8MXwwfHx8MA%3D%3D",
// bio: "Building dreams with code | Coffee lover"
// },

// {
// name: "Riya Sharma",
// pic: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww",
// bio: "Sunsets, music and good vibes"
// },

// {
// name: "Kabir Singh",
// pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900",
// bio: "Living life one adventure at a time"
// },

// {
// name: "Neha Kapoor",
// pic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdpcmx8ZW58MHwxfDB8fHww",
// bio: "Dream big | Work hard | Stay humble"
// },

// {
// name: "Rahul Verma",
// pic: "https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbnxlbnwwfDF8MHx8fDA%3D",
// bio: "Tech enthusiast | Always learning"
// },

// {
// name: "Simran Kaur",
// pic: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
// bio: "Chasing goals and good moments"
// }

// ];

// function showUsers(arr){

// const container = document.querySelector(".cards-container");

// container.innerHTML = "";

// arr.forEach(function(user){

// const card = document.createElement("div");
// card.className = "card";

// const img = document.createElement("img");
// img.src = user.pic;
// img.className = "bg-img";

// const blurLayer = document.createElement("div");
// blurLayer.className = "blurred-layer";
// blurLayer.style.backgroundImage = `url(${user.pic})`;

// const content = document.createElement("div");
// content.className = "content";

// const heading = document.createElement("h3");
// heading.textContent = user.name;

// const para = document.createElement("p");
// para.textContent = user.bio;

// content.appendChild(heading);
// content.appendChild(para);

// card.appendChild(img);
// card.appendChild(blurLayer);
// card.appendChild(content);

// container.appendChild(card);

// });

// }

// showUsers(users);


// const searchInput = document.querySelector("#searchInput");

// searchInput.addEventListener("input",function(){

// const value = searchInput.value.toLowerCase();

// const filtered = users.filter(function(user){

// return user.name.toLowerCase().includes(value);

// });

// showUsers(filtered);

// });



//ALL VARIABLE AND ELEMENT SELECTION HERE

let addNote = document.querySelector("#add-note");
let formContainer = document.querySelector(".form-container");
let closeForm = document.querySelector(".CloseForm");

// form
const form = document.querySelector("form");

// inputs
const imageInput = document.querySelector('input[name="image"]');
const nameInput = document.querySelector('input[name="name"]');
const townInput = document.querySelector('input[name="town"]');
const purposeInput = document.querySelector('input[name="purpose"]');
const categoryRadios = document.querySelectorAll('input[name="category"]');

// containers
const notesContainer = document.querySelector(".notes");


//CODE STARTS HERE

function saveToLocalStorage(obj){
    // phele purene local storage ka data nikalo 
    
    if(localStorage.getItem("tasks")=== null){
        let oldTask =[];
        oldTask.push(obj);
        JSON.stringify(oldTask);
        localStorage.setItem("tasks", JSON.stringify(oldTask));
        }
        else{
            let oldTask = JSON.parse(localStorage.getItem("tasks"));
            oldTask.push(obj);
            localStorage.setItem("tasks", JSON.stringify(oldTask));
        }


}

addNote.addEventListener("click", function(){
    formContainer.style.display = "block";
});

closeForm.addEventListener("click", function(){
    formContainer.style.display = "none";
});

form.addEventListener("submit", function(evt){
    evt.preventDefault();

    const image = imageInput.value.trim();
    const name = nameInput.value.trim();
    const town = townInput.value.trim();
    const purpose = purposeInput.value.trim();


    let selected = false;
    categoryRadios.forEach(function(cat){
        if (cat.checked){
            selected = cat.value;
        }
    })

    if(image === ""){
        alert("Please provide an image URL.");
        return;
    }

    if(name === ""){
        alert("Please provide a name.");
        return;
    }

    if(town === ""){
        alert("Please provide a town.");
        return;
    }

    if(purpose === ""){
        alert("Please provide a purpose.");
        return;
    }
    if(!selected){
        alert("Please select a category.");
        return;
    }

    saveToLocalStorage({image, name, town, purpose, category: selected});

    form.reset();
    formContainer.style.display = "none";

});






function addCards() {

  // CARD
  const card = document.createElement("div");
  card.classList.add("note-card");

  // PROFILE
  const profile = document.createElement("div");
  profile.classList.add("profile");

  const avatar = document.createElement("img");
  avatar.src = "https://i.pinimg.com/736x/2e/d7/f8/2ed7f8bfefbd951a333d91a9c6955cd1.jpg";
  avatar.alt = "profile";

  profile.appendChild(avatar);
  card.appendChild(profile);

  // NAME
  const name = document.createElement("h2");
  name.classList.add("name");
  name.textContent = "Fatima Uma";
  card.appendChild(name);

  // INFO 1
  const info1 = document.createElement("div");
  info1.classList.add("info");

  const span1 = document.createElement("span");
  span1.textContent = "Home town";

  const span2 = document.createElement("span");
  span2.textContent = "Singapore";

  info1.appendChild(span1);
  info1.appendChild(span2);
  card.appendChild(info1);

  // INFO 2
  const info2 = document.createElement("div");
  info2.classList.add("info");

  const span3 = document.createElement("span");
  span3.textContent = "Bookings";

  const span4 = document.createElement("span");
  span4.textContent = "3 times";

  info2.appendChild(span3);
  info2.appendChild(span4);
  card.appendChild(info2);

  // ACTIONS
  const actions = document.createElement("div");
  actions.classList.add("actions");

  const callBtn = document.createElement("button");
  callBtn.classList.add("call-btn");
  callBtn.textContent = "Call";

  const msgBtn = document.createElement("button");
  msgBtn.classList.add("msg-btn");
  msgBtn.textContent = "Message";

  actions.appendChild(callBtn);
  actions.appendChild(msgBtn);
  card.appendChild(actions);

  // TAGS
  const tags = document.createElement("div");
  tags.classList.add("tags");

  const tag1 = document.createElement("div");
  tag1.classList.add("tag", "black");

  const tag2 = document.createElement("div");
  tag2.classList.add("tag", "purple");

  const tag3 = document.createElement("div");
  tag3.classList.add("tag", "orange");

  const tag4 = document.createElement("div");
  tag4.classList.add("tag", "green");

  tags.appendChild(tag1);
  tags.appendChild(tag2);
  tags.appendChild(tag3);
  tags.appendChild(tag4);

  card.appendChild(tags);

  // ADD TO DOM
  document.querySelector(".notes").prepend(card);
}