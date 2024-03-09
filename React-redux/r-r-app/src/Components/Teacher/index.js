import React from 'react'

function Topics() {
    const topics = ['HTMl', 'CSS', 'JavaScript', 'React', 'Redux', 'BootStrap']
    
  return (
    <div>
         {topics.map((topic,i) => (<li key={i} >{topic}</li>))}
    </div>
  )
}

export default Topics