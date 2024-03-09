import React from 'react'
import { Link } from 'react-router-dom'


function Index() {
  return (
    <nav>
        <div style={{display:"flex",justifyContent:"space-between", border:"2px solid gray", 
        padding:".5rem",
        color:"white !important",
         backgroundColor:"GrayText"}}>
            <div><Link to="/">Home</Link></div>
            <div><Link to="shop">Shop</Link></div>
            <div><Link to="/application">Applicatio</Link></div>
            <div><Link to="/about">About</Link></div>
        </div>
    </nav>
  )
}

export default Index