import './App.css'
import { useState } from 'react';
// import Component1 from './Component1';
// import Component2 from './Component2';

function App() {
  const [X, setX] = useState(0);

  const change = () => {
    if(X == true){
        setX(false)
    }
    else{
        setX(true);
    }
  };

  return (
    <>
      {X == true ? <h1>hello</h1>:<h1>bye</h1>}
      <button onClick={change}>Click Me</button>
    </>
  );
}

export default App;