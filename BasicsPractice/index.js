//DOM Manipulation

// get and store the html element, add css styles to it
let element=document.getElementById('click');
console.log(element)
elementClass=document.getElementsByClassName('text-success');
console.log(elementClass)
elementClass[0].classList.add('bg-primary')
elementClass[0].classList.add('text-success')
console.log(elementClass.innerHTML);
console.log(innerTEXT);

// get and store another html element and create a new element add contents tot it and add tot he original  
let tagName=document.getElementsByTagName('div')
console.log(tagName)
createdElement=Document.createElement('p');
createdElement.innerTEXT="Satwi's creating her 1st para";
tagName[0].appendChild(createdElement);

createdElement2=Document.createElement('b');
createdElement2.innerTEXT="Satwi's bold para";
tagName[0].replaceChild(createdElement2,createdElement);

//removeChild(elememt);

//Selecting using Query
sel = document.querySelector('.container')
 console.log(sel)
 sel = document.querySelectorAll('.container')
 console.log(sel)

function clicked(){
    console.log('The button was clicked')
 }
 window.onload = function(){
    console.log('The document was loaded')
 }


//Events in JavaScript
firstContainer.addEventListener('click', function(){
    document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
    console.log("Clicked on Container")
})

firstContainer.addEventListener('mouseover', function(){
    console.log("Mouse on Container")
})

firstContainer.addEventListener('mouseout', function(){
    console.log("Mouse out of Container");
})

let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
firstContainer.addEventListener('mouseup', function(){
    document.querySelectorAll('.container')[1].innerHTML = prevHTML;
    console.log("Mouse up when clicked on Container");
})

firstContainer.addEventListener('mousedown', function(){
    document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
    console.log("Mouse down when clicked on Container");
})


//Arrow Functions
function summ(a, b){
    return a+b;
}
summ = (a,b)=>{
    return a+b;
}

logKaro = ()=>{
    document.querySelectorAll('.container')[1].innerHTML = "<b> Set interval fired</b>"
    console.log("I am your log")
}
//SetTimeout and setinterval
clr = setTimeout(logKaro, 5000);
clr = setInterval(logKaro, 2000);
//use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout

//JavaScript localStorage
localStorage.setItem('name', 'harry') 
localStorage 
localStorage.getItem('name')
localStorage.removeItem('name')
localStorage.clear();

// converting oj to Json and viceversa
// only "" are allowed in json
obj = {name: "harry", length: 1, a: {this: 'tha"t'}}
jso = JSON.stringify(obj);
console.log(typeof jso)
console.log(jso)
parsed = JSON.parse(`{"name":"harry","length":1,"a":{"this":"that"}}`)
console.log(parsed);


// Template literals - Backticks
a = 34;
console.log(`this is my ${a}`)