import React, { useEffect, useState } from 'react'
import './Products.css'

function Products() {
  const [product,setProduct]=useState([])
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>{console.log(data)
            setProduct(data)})
  },[])
  return (
    <div className='products'>
      <div className='items'>
        {product.length>0?<div className='interface'>
          {product.map((item)=>{
            return(
              <div className='contents'>
              <img src={item.image} width={300} height={300} alt={item.title}/>
              <h3>{item.title}</h3>
              <h4>Category: {item.category} </h4>
              <p>Price: {item.price}</p>
              </div>
            )
          })}
        </div>:<h2>No Items To Display</h2>}
      </div>
    </div>
  )
}

export default Products
