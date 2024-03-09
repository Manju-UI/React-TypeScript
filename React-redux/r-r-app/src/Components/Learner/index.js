import React from "react";
import Button from "./Button";

function Learner({news}) {
  const newtext = ()=>{"Hi iam learning react and redux"};
  const oldText = ()=>{" i know html and css and javascript basics"};
  const alertme = (item)=>{alert(item)}

  let learner = true;
  return <>
 {learner ? newtext() : oldText()}
  <p>{news}</p>
  <Button alertme={()=> alertme('Click to Learn')} >Click to Learn</Button>
  <Button alertme={()=> alertme('Click to test') } >Click to test</Button>
  <Button alertme={()=> alertme('Click to write')} >Click to write</Button>
  </>
}

export default Learner;
