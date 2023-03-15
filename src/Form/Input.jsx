import { useField } from "formik";
import React from "react";






function Input({ 
   
    name,
   
    label,
    className,
    id,
    type,
...rest
}) {


    const field = useField(name);

      const [data,meta] = field;

      const { onBlur,onChange,value} = data;
      const {error,touched} = meta;

       
      if(touched && error) {

        className = "border-2 border-red-600  rounded-lg w-60 lg:w-80 p-2"
      }




    return(

       <div>
       <div className="px-10">
       <label htmlFor={id} className="sr-only">{label}</label>
       <input type={type} 
       id={id}
       name = {name}
       onChange = {onChange}
       onBlur = {onBlur}
       value = {value}
      
      {...rest}
       className= {className + " " + className} />
       {touched && error && <div className="text-red-700"> {error}</div>}
       
   </div>
       
       </div>
    )
}

export default Input;