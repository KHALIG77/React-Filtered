import React, { useEffect, useState } from 'react'


const Header = () => {
    const [categories,setCategories]=useState()
    const[item,setItem]=useState()
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products/categories")
        .then(response=>response.json())
        .then(data=>setCategories(data))
    })
    const CategoryHandler=(e)=>{
       e.preventDefault()
       fetch(`https://fakestoreapi.com/products/category/${e.target.innerHTML}`)
       .then(res=>res.json())
       .then(dat=>console.log(dat))
    }
  return (
   <header className='bg-success py-4'>
 {
    categories && categories.map(item=>{
        return(
            <a onClick={CategoryHandler} href="" className='links'>{item}</a>
        )
    })
 }
   </header>
  )
}

export default Header