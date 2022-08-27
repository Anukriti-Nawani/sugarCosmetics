import React from 'react'
import { useState, useEffect } from 'react'
 import { useParams } from 'react-router-dom'
import {useCart} from "react-use-cart"
import "./productDetails.css"
let FaceProduct=[
    {img:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-all-set-to-go-banana-powder-13289662218323.jpg?v=1619115199",name:"ALL SET GO BANANA POWDER",price:"Rs.599",rating:"4.8",id:"1"},
    {img:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-all-set-to-go-banana-powder-13289662218323.jpg?v=1619115199",name:"ALL SET GO BANANA POWDER",price:"Rs.599",rating:"4.8",id:"2"},
    {img:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-all-set-to-go-banana-powder-13289662218323.jpg?v=1619115199",name:"ALL SET GO BANANA POWDER",price:"Rs.599",rating:"4.8",id:"3"},
    {img:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-all-set-to-go-banana-powder-13289662218323.jpg?v=1619115199",name:"ALL SET GO BANANA POWDER",price:"Rs.599",rating:"4.8",id:"4"},
    {img:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-all-set-to-go-banana-powder-13289662218323.jpg?v=1619115199",name:"ALL SET GO BANANA POWDER",price:"Rs.599",rating:"4.8",id:"5"},
    {img:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-all-set-to-go-banana-powder-13289662218323.jpg?v=1619115199",name:"ALL SET GO BANANA POWDER",price:"Rs.599",rating:"4.8",id:"6"}
]

export const ProductDetails = () => {
    const { id } = useParams()
    const [mens, setMens] = useState({})
    const { addItem, items } = useCart();
    console.log(id)

    let handleAdd = (mens)=>{
        addItem(mens,1);
        alert("item added to checkout");
        window.location.href="/cart"; 
      }
       console.log("getItems",items);
       localStorage.setItem("Items",JSON.stringify(items))
      const getData = async () => {
        
      
        const detailData = FaceProduct.filter((e) => {
          return e.id === id
        })
        console.log(detailData[0])
        setMens(detailData[0])
      }
      useEffect(() => {
        getData()
      }, [])
    
      return (
      <div>
    <div className='Main-div'>
        <div className='submain-div'>
                  <div className="details-img">
                        <img className='img' img src={mens.img} alt="mens" />
                  </div> 
                 <div className="mens-category1">
               
                        <h5>{mens.name}</h5>
                        <h5>{mens.price} </h5>
                        <h5>{mens.rating}</h5>
                  </div> 
                  <div className='Add-to-cart-div'>
                          <button className="add-to-cart" onClick={()=>{handleAdd(mens)}}>Add to Cart</button>
                          {/* <button className="add-to-wish">Add to Wishlist</button> */}
                  </div> 
        </div>
    </div>
      </div>
   )
      }