// import React from "react";
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// // import Home from "./Home";
// // import Services from "./Services";
// // import PageNotFound from "./PageNotFound";
// import ProductCards from "./ProductCards";
// import ProductInfo from "./ProductInfo";
// const Routing = () =>{
//     return(
//         <>
//             <BrowserRouter>
//                 <Routes>
//                     <Route path="/" element= {<Home />} />
//                     <Route path="/Services" element= {<Services />} />
//                     <Route path="*" element= {<PageNotFound />} />
//                     <Route path="/" element= {<ProductCards />} />
//                     <Route path="/ProductInfo" element= {<ProductInfo />} />
//                     <Route path="*" element= {<PageNotFound />} />
//                 </Routes>
//             </BrowserRouter>
//         </>
//     )
// }

// export default Routing;
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductCards from "./ProductCards";
import ProductInfo from "./ProductInfo";
// Uncomment these if you have these components
// import Home from "./Home";
// import Services from "./Services";
// import PageNotFound from "./PageNotFound";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Optional Home Route */}
        {/* <Route path="/" element={<Home />} /> */}

        {/* Product listing page */}
        <Route path="/" element={<ProductCards />} />

        {/* Optional Services page */}
        {/* <Route path="/Services" element={<Services />} /> */}

        {/* Product detail page with dynamic ID */}
        <Route path="/ProductInfo/:id" element={<ProductInfo />} />

        {/* Optional fallback route */}
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;