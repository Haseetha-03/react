// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import MyImage from "./assets/react.svg"
// import FunctionComponent from './FunctionComponent.jsx'
// function App() {
//    const MyCards = [
//       {
//         image: MyImage,
//         Price: 200,
//         Brand: "USPA" m         
//       },
//       {
//          image: MyImage,
//         Price: 20050,
//         Brand: "USTA"
//       },
//       {
//          image: MyImage,
//         Price: 2000,
//         Brand: "USP"
//       },
//       {
//          image: MyImage,
//         Price: 20000,
//         Brand: "US"
//       }
//     ];
//   return (
//     <>
//      <div className="parent">
//    {MyCards.map((MyCards) => (
//     <FunctionComponent Data={MyCards}/>
//    ))}
//    </div>export default App;
//    </>
//   )
// }

// export default App
// hooks1
// import './App.css'
// import { useState } from 'react';
// // import Component1 from './Component1';
// // import Component2 from './Component2';

// function App() {
//   const [data, setData] = useState(0);

//   const change = () => {
//     setData(data + 1);
//   };

//   return (
//     <>
//       <button onClick={change}>Click Me</button>
//       <h1>Count: {data}</h1>
//     </>
//   );
// }
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from "./page1";
import Page2 from "./page2";
import Store from "./store";
function App() {
  const [Count ,setCount] = useState(0)
  return (
    <>
    <Store.Provider value={{Count,setCount}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </BrowserRouter>
    </Store.Provider>
    </>
  );
}

export default App;