import React from 'react'
// import CountUp from 'react-countup';
// import { ToastContainer,toast } from 'react-toastify';
// import Tilty from 'react-tilty';
import { RotatingLines } from 'react-loader-spinner';

// import IMG from './assets/Nature.jpg'

function Npmpack() {
//   return (
//     <div style={{textAlign:"center", marginTop:"20%"}}>
//     <h1><CountUp
//       end={200}
//       duration={2}
//     /></h1>
//     </div> 
//   )
    // return (
    //   <div style={{ textAlign: "center", overflow: "hidden", marginTop: "10%" }}>
    //     <Tilty >
    //         <img src={IMG} alt="React Logo"  height={400} />
    //     </Tilty>
    //   </div>
    // );
    // const notify = () => toast("Wow so easy!");

    // return (
    //      <div style={{ textAlign: "center", overflow: "hidden", marginTop: "10%" }}>
    //      <button onClick={notify}>Notify!</button>
    //     <ToastContainer />
    //   </div>
    // );
     return(
        <>
        <h1>Loading</h1>
        <RotatingLines/>
        </>
     )
}

export default Npmpack