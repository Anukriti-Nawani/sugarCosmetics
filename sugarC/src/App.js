
 import './App.css';

// import AllRoutes from './Components/AllRoutes';
import {ProductData} from './Components/Cart/ProductData';
import {Routes, Route} from "react-router-dom";
import {ProductDetails} from './Components/Cart/ProductDetails';
import Cart from "./Components/Cart/Cart"
import Home from './Components/Home';


function App() {
  return (
    <div className="App">
      {/* <AllRoutes/> */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/menswear" element={<Menswear />} />
        <Route path="/Womenswear" element={<Womenswear />} />
  <Route path="/everything" element={<Everything />} /> */}
        <Route path="/cart" element={<Cart />} /> 
        {/* <Route path="/login" element={<Login/>}></Route> */}
        {/* <Route path="/register" element={<Register/>}></Route> */}
        <Route path="/ProductData" element={<ProductData/>}></Route>
        <Route path="/ProductData/:id" element={<ProductDetails/>}></Route> 
       {/* <Route path="/womenswear/:id" element={<WomenDetails/>}></Route>
        <Route path="/everything/:id" element={<EveryDetails/>}></Route> */}
      </Routes>

    </div>
  );
}

export default App;
