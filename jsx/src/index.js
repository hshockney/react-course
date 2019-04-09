//Import librarys or modules
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


//Create react component
//old way
//const App = function() {
//    return <div>Hi there!</div>;
//};
//new way arrow function
const App = () => {
    const buttonText = {text: 'Click Me!'};
    const labelText = 'Enter Name:';
    return (
      <div>
        <label className="label" htmlFor="name">{labelText}</label>
        <input id="name" type="text" />
        <button style ={{ backgroundColor:'purple',color:'white' }}>{ buttonText.text }</button>
      </div>
      );
};
//Show react component on screen
ReactDOM.render(<App />, document.querySelector('#root'));

