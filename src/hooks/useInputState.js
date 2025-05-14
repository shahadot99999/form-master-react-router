import { useState } from "react"

const useInputState = (defaltValue = null)=>{
    const [value, setValue]= useState(defaltValue);

    // const handleChange = e =>{
    //     setValue(e.target.value);
    // }
    // return [value, handleChange];

    const onChange = e =>{
        setValue(e.target.value);
    }
    return{
        value,
        onChange
    }

}

export default useInputState;