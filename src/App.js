import { useState } from 'react';
import './App.css';

function App() {
  const [count,setcount] = useState(0)
  return (
    <div>
      <h1>Welcome To shopping amazing product </h1>
      <p>Currently there are {count} product added to your cart .</p>
      <p>Go choose your favorite product</p>
      <button onClick={()=>{setcount (count+1)}}>+</button>
      <button onClick={()=>{setcount (count-1)}}>-</button>
      <button  onClick={()=>{setcount (0)}}>delete</button>
      
    </div>
  );
}

export default App;
