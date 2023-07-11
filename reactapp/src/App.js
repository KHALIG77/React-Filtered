
import { useEffect, useState } from 'react';
import './App.css';
import UserList from './components/User/UserList';
import Header from './components/User/Header';




function App() {
  const [categories,setCategories]=useState()
    const[item,setItem]=useState()
    const [text,setText]=useState()
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products/categories")
        .then(response=>response.json())
        .then(data=>setCategories(data))
    })
    const CategoryHandler=(e)=>{
       e.preventDefault()
       setText(e.target.innerHTML)
      
    }

  return (
    <div className="App">
     

     <header className='bg-success py-4'>
 {
    categories && categories.map(item=>{
        return(
            <a onClick={CategoryHandler} href="" className='links'>{item}</a>
        )
    })
 }
   </header>
    <UserList text={text}/>
    


    </div>
  );
}

export default App;
