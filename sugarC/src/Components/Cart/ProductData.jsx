import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import React from 'react'
import "./productDetails.css"

let FaceProduct=[
    {img:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-all-set-to-go-banana-powder-13289662218323.jpg?v=1619115199",name:"ALL SET GO BANANA POWDER",price:"Rs.599",rating:"4.8",id:"1"},
    {img:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-all-set-to-go-banana-powder-13289662218323.jpg?v=1619115199",name:"ALL SET GO BANANA POWDER",price:"Rs.599",rating:"4.8",id:"2"},
    {img:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-all-set-to-go-banana-powder-13289662218323.jpg?v=1619115199",name:"ALL SET GO BANANA POWDER",price:"Rs.599",rating:"4.8",id:"3"},
    {img:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-all-set-to-go-banana-powder-13289662218323.jpg?v=1619115199",name:"ALL SET GO BANANA POWDER",price:"Rs.599",rating:"4.8",id:"4"},
    {img:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-all-set-to-go-banana-powder-13289662218323.jpg?v=1619115199",name:"ALL SET GO BANANA POWDER",price:"Rs.599",rating:"4.8",id:"5"},
    {img:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-all-set-to-go-banana-powder-13289662218323.jpg?v=1619115199",name:"ALL SET GO BANANA POWDER",price:"Rs.599",rating:"4.8",id:"6"}
]
export const ProductData = () => {
 
    const [data,setData] = useState([])
    useEffect (()=>{
        
            setData(FaceProduct)
    },[])
    return (
        <div className='mens-data'>
               
               
            {data.map((e)=>
                        {return (
                        <Link key={e.id} className="mens-data-item" to={`${e.id}`}>
                            <img src={e.img} className="menimage" alt="product image"/>
                            {/* <p className='leftinfo'>{e.brand}</p> */}
                            <p className='leftinfo'>{e.name}</p>
                            <p className='leftinfo'>$ {e.price}</p>
                            </Link>
                            )}
                    )}    

            </div>
    )
                       
}