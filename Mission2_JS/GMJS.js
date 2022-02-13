//Event + Function
function mOver(obj){
    obj.innerHTML = "On Specials!!!"
}
   
function mOut ( obj){
    obj.innerHTML = "Get $250 off!!!";
}

//Get element by id - not sure if this worked

function para(){
    document.getElementById("para").style.fontSize ="X-large";
};


//Use or Var , Let or Const
function myFunction() {
    let text;
    let person = prompt("Please enter your name:", "First & Last");
    if (person == null || person == "") {
      text = "Hello! how can we help ?";
    } else {
      text = "Welcome"+ " " + person + " " +"! How are you today?";
    }
    document.getElementById("demo").innerHTML = text;
  }
    
