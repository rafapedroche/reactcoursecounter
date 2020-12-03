
import React from 'react'

const ButtonSave = ({onClickFunction}) => 
{
    const handleClick = () => { onClickFunction() }

    return <button onClick={handleClick} >SAVE</button>
}
 
export default ButtonSave