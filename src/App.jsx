import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyImage from "./assets/react.svg"
import FunctionComponent from './FunctionComponent.jsx'
function App() {
   const MyCards = [
      {
        image: MyImage,
        Price: 200,
        Brand: "USPA" m         
      },
      {
         image: MyImage,
        Price: 20050,
        Brand: "USTA"
      },
      {
         image: MyImage,
        Price: 2000,
        Brand: "USP"
      },
      {
         image: MyImage,
        Price: 20000,
        Brand: "US"
      }
    ];
  return (
    <>
     <div className="parent">
   {MyCards.map((MyCards) => (
    <FunctionComponent Data={MyCards}/>
   ))}
   </div>
   </>
  )
}

export default App