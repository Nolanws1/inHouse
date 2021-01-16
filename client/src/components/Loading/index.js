import React from 'react'
import { BeatLoader } from 'react-spinners';
import './index.css'

const Loading = () => {
  return (
    <div className='spinner'>
      <BeatLoader size={48} color='blue'/>
    </div>
  )
}

export default Loading
