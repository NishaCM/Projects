// //gets a resource from some location
// fetch('fetch.json')
// .then(res=> res.json())
// .then(json => console.log(json))

// //example on back tick ``
// let personFirst = 'Nisha';
// let personLast = 'Chottath'
// let msg = `Hi! ${personFirst} ${personLast}. How are you today?`;
// console.log(msg);

// //modify the DOM based on API
// const mainDivElement = document.getElementById('mainDiv');
// const personName = 'Nisha Chottath';
// // mainDivElement.innerHTML = 'Hello'+ personName +'welcome to the page';//original way
// mainDivElement.innerHTML = `Hello, ${personName} welcome to the page`


function fetchData() { 
fetch('fetch.json')
.then(res=> res.json())
.then(json => console.log(json))
 console.log("fetchData button clicked");
}
 
 function showData() { 
    fetch('fetch.json')
    .then(res=> res.json())
    .then(json => {
        const showDataDiv = document.getElementById('showData')
        showDataDiv.innerHTML = ' ',

        jsonData.forEach((person) => {showDataDivElement.innerHTML = showDataDivElement.innerHTML + `<li> ${person} </li>`;
        });



    })
     
    
    console.log("showData button clicked");}



// example on array
// const arrayOfObjects = [ { "name": "john", "age": 27 }, { "name": "Mary", "age": 22 }, { "name": "Ethan", "age": 17 }, { "name": "Joe", "age": 53 }, { "name": "Amelia", "age": 87 }, { "name": "Adam", "age": 34 } ]// Each element in this array is by itself an object 

// arrayOfObjects.forEach(obj => console.log(obj.name.toUpperCase()))