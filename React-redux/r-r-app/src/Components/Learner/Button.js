import React from 'react'

function Button({children , alertme}) {

  return (
    <div>
        <button onClick={alertme}> {children} </button>
    </div>
  )
}

export default Button