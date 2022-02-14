
// document.getElementById('mainContent').innerText = 'Hello there';
// 1
// $('#mainContent').text("Hey there");

//2 // .text() method without any parameters gives you the existing element value

const mainParaJ = $('#mainContent');
console.log('mainParaJ.text() is ', mainParaJ.text());mainParaJ.text(mainParaJ.text() + ' Nisha');