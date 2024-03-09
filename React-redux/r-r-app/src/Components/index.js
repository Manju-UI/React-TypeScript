import React from 'react'
import Learner from './Learner'
import Topics from './Teacher'


function Home(props) {

    const news = 'You can learn when you practice more';
  return (
    <div>
        <img src= {props.logo} alt="React Logo"/>
        <Learner news={news}/>
        <Topics/>
    </div>
  )
}

export default Home