import React, { useContext } from 'react'
import{AssetContext} from './Framilytree'

const Special = ({ assets}) => {
     const nwAsst=useContext(AssetContext)
  return (
    <div>
      <h3>Special:{ assets}</h3>
      <p>New Asset: {nwAsst}</p>
    </div>
  )
}

export default Special
