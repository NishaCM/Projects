
// document.getElementById('mainContent').innerText = 'Hello there';
// 1
// $('#mainContent').text("Hey there");

//2 // .text() method without any parameters gives you the existing element value

// const mainParaJ = $('#mainContent');
// console.log('mainParaJ.text() is ', mainParaJ.text());mainParaJ.text(mainParaJ.text() + ' Nisha');

// //3 click
// function changeColor('#colorChangeButton'){
//     document.body.style.backgroundColor = 'Green';
// }
// $('#colorChangeButton').click(changeColor);

//double click - Js method

function changeColorBlue() {  document.body.style.backgroundColor = 'blue';}
function changeColorGreen() {  document.body.style.backgroundColor = 'green';}
// const buttonElement = document.getElementById('colorChangeButton');
// buttonElement.addEventListener('click', changeColorGreen);buttonElement.addEventListener('dblclick', changeColorBlue);

// JQuery Method

$('#colorChangeButton').click(changeColorGreen);
$('#colorChangeButton').dblclick(changeColorBlue);