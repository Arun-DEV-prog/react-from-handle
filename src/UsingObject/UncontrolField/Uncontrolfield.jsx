import React, { useRef } from 'react'

const Uncontrolfield = () => {
     const emailRef=useRef('')

    const handleSubmit=e=>{
         e.preventDefault();
         console.log(emailRef.current.value)
    }

  return (
    <div>
       <form onSubmit={handleSubmit}>
         <input ref={emailRef} type="email" name='' />
         <br />
         <input type="password" name='' />
         <br />
        <input type="submit" value="submit" />
       </form>
    </div>
  )
}

export default Uncontrolfield
