import React, { useState } from 'react'

const FromHandle = () => {
     const [formdata,setFromdata]=useState({
        name:"",
        password:""
     })
     const [error,setError]=useState('');

      const handleChange=(e)=>{
         e.preventDefault();
         const {name,value}=e.target;
          setFromdata((prevData)=>({
             ...prevData,
             [name]:value
          }))
      }
      console.log(formdata)

      const handleSubmit=(e)=>{
         e.preventDefault();
          if(formdata.password.length<6){
             setError('password must be at least 6 characters longer')
          }else{
             setError('');
          }
      }
  return (
    <div>
       <form onSubmit={handleSubmit}>
         <input type="text" name='name' placeholder='name' />
         <br />
         <input type="password" name="password" onChange={handleChange} value={formdata.password} />
          {
             error && <p style={{ color: 'red' }}>{error}</p>
          }
          <input type="submit" value="Submit" />
       </form>
       {

       }
    </div>
  )
}

export default FromHandle