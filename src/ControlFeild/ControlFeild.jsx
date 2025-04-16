import React, { useState } from 'react'

const ControlFeild = () => {
   
     const [password,setPassword]=useState('')

     const handleSubmit=(e)=>{
         e.preventDefault();
          console.log(e.target.password.value)
     }
      const handleOnchange=(e)=>{
         console.log(e.target.value)
      }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input type="text" name="name" id="" placeholder='Name' />
       <br />
       <input type="password" onChange={handleOnchange} defaultValue={password} name="password" id="" required  placeholder='Password'/>
       <br />
        <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default ControlFeild
 