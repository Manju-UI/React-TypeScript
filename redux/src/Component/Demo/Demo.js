import React from 'react'
import Demo2 from './Demo2/Demo2'
import Demo3 from './demo3/Demo3'
import Dem1 from './demo1/Dem1'

function Demo() {
  const styleDemo = {
    color:"green",
    backgroundColor:"yellow",
    width:"70%",
    margin:"auto",
    height:"20rem",
    border:"5px solid yellowGreen",
    marginTop:"15px"
  }
  return (
    <div>
      <div style={styleDemo}>
      <Demo3/>
      </div>
      <div style={styleDemo}>
      <Demo2/>
      </div>
      <div style={styleDemo}>
      <Dem1/>
      </div>
        
    </div>
  )
}

export default Demo