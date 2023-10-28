import React from 'react'
import image from './07 1.jpg';

function Hero() {
  return (
    <div className='hero'>

    
            <div className='hero-1'>
                <div className='head'>Start Sending Crypto Currency Easily</div>
                <div className='head-1'>Join the world largest crypto exchange</div>
                <button>Connect Wallet</button>
            </div>
            <div className='hero-2'>
                <div className="image">
                    <img src={image} alt="" />
                </div>
            </div>
        
      
    </div>
  )
}

export default Hero;
