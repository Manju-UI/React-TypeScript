import React from 'react'

function Dem1() {
    const isLoggedIn = "true";

    let msg ;
    if (!isLoggedIn) {
        msg =(
        <>
        Welcome To new React and redux Ap....
        </>)
    }else{
        msg =(
        <>
        <p>Please Sign Inqq</p>
        <input placeholder='userName'/>
        </>)
    }

  return (
    <>
    {!isLoggedIn ? (
        <>
        Welcome To new React and redux App
        </>
    ):(
        <>
        <p>Please Sign In</p>
        <input placeholder='userName'/>
        </>
    )},
    <br/>
        {msg}
    
    </>
  )
}

export default Dem1