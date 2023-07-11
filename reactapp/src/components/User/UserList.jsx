import React, { useEffect, useState } from 'react'

import UserItem from './UserItem'
import Loader from './Loader'

const UserList = (props) => {
    // const[category,setCategory]=useState()
    const [users,setUsers]=useState()
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(response=>response.json())
        .then(data=>setUsers(data))
        .catch(response=>console.log(response))
    },[])
    const InputHandler=(e)=>{
       const filtered=users.filter(user=>user.title.toLowerCase().includes(e.target.value.toLowerCase()))
       setUsers(filtered)
    }
    // const SearchHandler=()=>{
     
    // }
  return (
    <div className='container'>
      <input onChange={InputHandler} type="text" className='my-3 w-50'/>
      {/* <button onClick={SearchHandler}>Search</button> */}
<div className='row g-4'>
        {
          users.length > 0 ?  users.map(user=>{
                return(
                    <UserItem userData={user}/>
                )
            }):<div > No data</div>
        
        }
    </div>
    </div>
    
  )
}

export default UserList