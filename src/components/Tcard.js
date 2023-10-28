import React from 'react'

function Tcard(props) {
    let image= props.img;
    let from = props.from;
    let to= props.to;
    let message= props.message;
    let amount = props.amount;
  return (
    <div className='tcard'>

        <div className="tcard-img">
            <img src={image} alt="" />
        </div>
        <div className="tcard-date">
            <div className="date">
                2021-11-04 02:02
            </div>
        </div>
        <div className="tcard-desc">
            <div className='from'>{from}</div>
            <div className='to'>{to}</div>
            <div className='amount'>{amount}</div>
            <div className='message'>{message}</div>
        </div>
      
    </div>
  )
}

export default Tcard;
