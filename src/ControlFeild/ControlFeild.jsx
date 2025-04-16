import React, { useState } from 'react'

const ControlFeild = () => {
   
     const [password,setPassword]=useState('')
     const [error,setError]=useState('')

    //  const [fromdata,setFromdata]=useState({
    // name: "",
    // password: "",
    // phone:
// })

     const handleSubmit=(e)=>{
         e.preventDefault();
          console.log(e.target.password.value)
        //    when submit the from show error
         if(password.length < 6){
             setError('password must be 6 character')
         }else{
             setError('')
         }
     }
      const handleOnchange=(e)=>{
         console.log(e.target.value)
         setPassword(e.target.value)
        
          if(password.length< 6){
             setError('passoword must be 6 chartacter or longer')
          }else{
             setError('')
          }

      }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder='Name' />
       <br />
       <input type="password" onChange={handleOnchange} defaultValue={password} name="password" required  placeholder='Password'/>
       <br />
        <input type="submit" value="Submit" />
        </form>
        <p style={{color:"red"}}>
             <small>{error}</small>
        </p>
    </div>
  )
}

export default ControlFeild
 