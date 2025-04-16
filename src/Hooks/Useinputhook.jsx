import { useState } from "react";

const Useinputhook=(defaultValue)=>{
  const [fieldvalue,setFieldvalue]=useState(defaultValue);
   const  handleFieldOnchange=e=>{
     setFieldvalue(e.target.value);
   }

   return[fieldvalue,handleFieldOnchange];
}

export default Useinputhook;