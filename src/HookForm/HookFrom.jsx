import React from 'react'
import Useinputhook from '../Hooks/Useinputhook';

const HookFrom = () => {
    const [name,nameOnchange]=Useinputhook('')
    const[email,emailOnchange]=Useinputhook('')
     const handleSubmit=e=>{
        e.preventDefault();
         console.log('sb',name,"email",email)
     }
  return (
    <div>
       <form onSubmit={handleSubmit}>
         <input defaultValue={name} type="text" onChange={nameOnchange} />
         <br />
          <input type="email" defaultValue={email} onChange={emailOnchange} name="" id="" />
         <br />
         <input type="submit" value="submit" />
       </form>
    </div>
  )
}

export default HookFrom
