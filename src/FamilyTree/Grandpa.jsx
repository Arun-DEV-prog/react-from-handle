import React, { createContext } from 'react'
import Dad from './Dad'
import Uncle from './Uncle'
import Anti from './Anti'



const Grandpa = ({ assets}) => {
  return (
    <div>
       <h3>Gradpa</h3>
        <section className='flex'>
             <Dad assets={assets}></Dad>
             <Uncle />
             <Anti />
        </section>
    </div>
  )
}

export default Grandpa
