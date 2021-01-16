import React from 'react'
import { BeatLoader } from 'react-spinners';
import './index.css'

const Loading = () => {
  return (
    <div className='spinner'>
      <BeatLoader size={48} color='#4f6b5f'/>
    </div>
  )
}

export default Loading
