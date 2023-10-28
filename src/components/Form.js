import React from 'react'
import image from './07 1.jpg'

function Form() {
  return (
    <div className='form'>
      <div className='image'>
        <img src={image} alt="" />
      </div>
      <div className='form-1'>
        <form action="">
            <input className='text' type="text" placeholder='Receiver Address' />
            <input className='text' type="text" placeholder='Amount (ETH)'/>
            <input className='text' type="text" placeholder='Enter GIF Link'/>
            <input className='text' type="text" placeholder='Enter Message' />
            <button className='button-2'>Send Now</button>
        </form>
      </div>
    </div>
  )
}

export default Form
