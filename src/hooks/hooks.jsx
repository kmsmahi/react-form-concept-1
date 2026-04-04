import { useState } from "react"

const useInputField=(defaulValue)=>{
    const[value,setValue]=useState(defaulValue);
    const handleOnChange=(e)=>{
        setValue(e.target.value);
        
    }
    return [value, handleOnChange];
}

export default useInputField;