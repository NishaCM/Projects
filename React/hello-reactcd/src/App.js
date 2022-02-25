
// import {useEffect, useState } from 'react';

// function App() {
//   const [color, setColor] = useState('yellow');
//   const [divColor, setDivColor] = useState('green');
  

//   useEffect(()=> {
//     console.log(`The color is ${color}`);
//   },[color]);

//   useEffect(()=>{
//     console.log('color of div changed to', setDivColor);
//   },[setDivColor]);

//   function changeColor() {
//     setColor('red');
//   }
//   function changeDivColor (){
//     setDivColor('pink');
//   }


//   return (
//   <div>
//     <h1 style={{background: color}}>Today is Tuesday</h1>
//     <div style = {{background:divColor}}>Some Div</div>
//     <button onClick={changeColor}>Change Color</button>
//     <button onClick={changeDivColor}>Change Div color</button>
//   </div>
//   );
// }
// export default App;

import {useState} from 'react';
// function App() {
//   const [userInput, setUserInput] = useState('');

  // function handleChange(event) {
  //   const newInputText = event.target.value;
  //   console.log(newInputText);
  //   setUserInput(newInputText); // this updates the state
  
//   return (
//     <>
//       <div>
//         <label>Your name</label>
//         <div>
//           <input type="text" onChange={handleChange} />
//         </div>
//         {userInput} <br />
//       </div>
//     </>
//   );
// }
// export default App;

//form//

 
  //   const [userInput, setUserInput] = useState('');
  //   function handleFormSubmit(event) {
  //     event.preventDefault(); // Prevents page from being reloaded
  //     // console.log(event.target.elements[0].value);
  //     setUserInput(event.target.elements[0].value);
  //   };
  //   return (
  //     <>
  //       <form onSubmit={handleFormSubmit}>
  //         <div>
  //           <label>Your name</label>
  //           <input type="text" />
  //           <p>
  //             When you click on the submit button, the form submit event is
  //             triggered
  //           </p>
  //           <button type="submit">Submit Form</button>
  //         </div>
  //       </form>
  //       {userInput}
  //     </>
  //   );
  
  // export default App;


  export default function App() {
    const [showContent, setShowContent] = useState(false);
    const changeContent = () => setShowContent(!showContent);
    return (
      <div>
        <button onClick={changeContent}>Click</button>
        <div>
          {showContent && 'Congrats you found the hidden content!'}
        </div>
      </div>
    );
  }