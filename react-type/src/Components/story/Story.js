import React, { useCallback, useMemo, useState } from 'react'
import Button from './Button'

function Story() {
  const [backgroundColor, setBackgroundColor] = useState('blue');

  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [sum, setSum] = useState(0);


  const addition = (a,b)=>{
    return a+b
 }

  useMemo( ()=>{
  let result = addition(a,b)
  setSum(result)
  },[a,b]
  )

 

  // useCallback(()=>{
  // let result = addition(a,b);
  // setSum(result)
  // },[a,b]
  // )

 

  const getColor = ()=>{
    setBackgroundColor('red')
  }
  return (<>
    <div>Need to read lot of storys</div>
    <input type='number' value={a} onChange={(e)=>setA(Number(e.target.value))}/>
    <input type='number' value={b} onChange={(e)=>setB(Number(e.target.value))}/>
    {/* <button onClick={adddition}>ADD</button> */}
    <div>Sum : {sum}</div>

    <Button style={{backgroundColor:backgroundColor}} onMouseUp={getColor}>Hello</Button>
    </>
  )
}

export default Story