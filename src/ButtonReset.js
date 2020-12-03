
import React from 'react'

const ButtonReset = ({onClickFunction}) => 
{
    const handleClick = () => { onClickFunction() }

    return <button onClick={handleClick} >RESET</button>
}
 
export default ButtonReset