
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import SignIn from "./SignIn";
import Footer from "../Components/Footer/Footer";



function AllRoutes(){
    return(
        <div>
            
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/signin" element={<SignIn/>}></Route>
            </Routes>
            <Footer/>
        </div>
    )
}
export default AllRoutes;