import React,{useState} from 'react'

const Navbar=(props)=>{
  let [state,setState]=useState(0)
  function open(){
    
  }
  return (
  <header>
  <div className="logo"><a href="#">Iqbal.net</a></div>
  <nav>
    <a href="#" className="active">Home</a>
    <a href="#">Blog</a>
    <a href="#">Profile</a>
  </nav>
  <div className="hamburger " onClick={open}>
    <span></span>
    <span></span>
    <span></span>
  </div>
  </header>
  )
}

export default Navbar