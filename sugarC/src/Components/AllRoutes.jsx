
import { Route, Routes } from "react-router-dom";
import Cart from "./Cart/Cart";
import { ProductsDetails } from "./Cart/ProductDetails";
import Home from "./Home";
import SignIn from "./SignIn";



function AllRoutes(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/signin" element={<SignIn/>}></Route>
                <Route path="/cart" element={<Cart/>}></Route>
                <Route path="/product/:id" element={<ProductsDetails/>}></Route>
            </Routes>
        </div>
    )
}
export default AllRoutes;