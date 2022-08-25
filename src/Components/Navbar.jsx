import { Link } from "react-router-dom";
import { FaUser, FaHeart, FaShoppingBag } from "react-icons/fa";
import { MdLocalOffer } from "react-icons/md";
function Navbar(){
    return(
        <div>
         <div style={{display:"flex",width:"100%",height:"80px",backgroundColor:"#efefef"}}>
          <img style={{height:"50px",paddingLeft:"60px",paddingTop:"10px"}}
           src="https://media.sugarcosmetics.com/upload/SUGARLogo1.png" alt=""/>
          <input style={{height:"40px",width:"550px",marginLeft:"80px",marginTop:"20px",border:"none",borderTopLeftRadius:"30px",borderBottomLeftRadius:"30px",paddingLeft:"20px"}} 
           type="text"
           placeholder='Try "Liquid Lipstick"' />
           <button style={{border:"none",backgroundColor:"black",height:"43px",width:"120px",marginTop:"20px",
             color:"white",borderTopRightRadius:"30px",borderBottomRightRadius:"30px",fontSize:"17px"}}>
            Search
            </button>
             <FaUser style={{marginTop:"30px",marginLeft:"100px",fontSize:"20px"}}/>
             <Link to="/signin"><p style={{textDecoration:"underline", marginLeft:"5px", marginTop:"30px", color:"black"}}>Login/Register</p></Link>
             <FaHeart style={{marginTop:"25px",marginLeft:"70px",color:"dark-gray", paddingRight:"-1rem", fontSize:'25px'}}/>
             <FaShoppingBag  style={{marginTop:"25px",marginLeft:"30px",color:"dark-gray", paddingRight:"-2rem", fontSize:"25px"}}/>
             <MdLocalOffer style={{marginTop:"25px",marginLeft:"30px", paddingRight:"3rem", fontSize:"25px"}}/>
         </div>
        </div>
    )
}
export default Navbar;