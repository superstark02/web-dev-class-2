import React from 'react'
import './App.css';
import AnimatedText from './Components/AnimatedText';
import {Footer} from './Components/MyAppBar'

var items = 0;

function App() {

  var add_to_cart = () => {

    items = items + 1;
    console.log(items)
    setItem_state(items) 
  }

  const [item_state, setItem_state] = React.useState(0)
  const [input_vlaue, setInputVlaue] = React.useState("")

  return (
    <div className="App" id="id">

      <Footer title="APP BAR" />

      <div style={{textAlign:"center"}} >
        <button onClick={add_to_cart} >
          ADD TO CART
        </button>
      </div>
      <div style={{textAlign:"center"}} >
        {item_state}
      </div>

      <div>
        <input placeholder="Name" onChange={
          (e)=>{setInputVlaue(e.target.value)}
          } ></input>
      </div>
      {input_vlaue}

      <div>
        <AnimatedText/>
      </div>
    </div>
  );
}

export default App;
