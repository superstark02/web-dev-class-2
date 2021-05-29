import React, {useState} from 'react'
import "./App.css"
import Lib from './Components/Lib';
import MyAppBar, {Footer} from "./Components/MyAppBar"

var items = 0;

function App() {

  var add_to_cart = () => {
    items = items+1;
    console.log(items);
    
    setItem(items);
  }

  const [item, setItem] = useState(0);

  return (
    <div className="App" id="id">
      <MyAppBar title="APP BAR" />

      <div style={{textAlign:"center"}} >
        <button onClick={add_to_cart} >
          ADD TO CART
        </button>
      </div>

      <div className="output" >
        {item}
      </div>

      <Lib/>

      <Footer />
    </div>
  );
}

export default App;


function sum(a,b){
  return a+b;
}