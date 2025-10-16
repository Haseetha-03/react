import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
function ImagePath2() {
  const [ImagePath,setImagePath]=useState(null);
  const GetData=(event)=>{
    const file=event.target.files[0];
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload=()=>{
      setImagePath(reader.result)
      console.log(reader.result)
    }
  }
  return (
    <>
    <input type="file" onChange={(event) => GetData(event)} />
    {ImagePath ? <img className="myimage" src={ImagePath} alt="Image Cracked" /> : <p>No image uploaded</p>}
    </>
  );
}
 export default ImagePath2;