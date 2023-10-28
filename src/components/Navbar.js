import React from 'react'

function Navbar() {
  return (
    <div className='main-header'>
      <div className="header">
        <div className="logo">
          <span className='send'>Send</span><span className='crypt'>Crypt</span>
        </div>
        <div className='mr'>Markets</div>
        <div className='mr'>Portfolio</div>
        <div className='mr'>Products</div>
      </div>
      <button>
        Connect Wallet
      </button>
    </div>
  )
}

export default Navbar;
