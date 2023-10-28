import React from 'react'
import Tcard from './Tcard';
import Image1 from './im1.gif';
import Image2 from './im2.gif';
import Image3 from './im3.gif';
import Image4 from './im4.gif';
import Image5 from './im5.gif';
import Image6 from './im6.gif';

function Transaction() {
  return (
    <div className='tran'>
      <div className='tr'>
        <div className="tr-head">Latest Transactions</div>
        <div className="tr-cards">
            <Tcard img={Image1} from="From: dUfUenk...hPklj3WC" to="To: Q2IcH9P...ZwG4WsvY" amount="Amount: 0.0004 ETH" message="Message: Hello Developers"></Tcard>
            <Tcard img={Image2} from="From: dUfUenk...hPklj3WC" to="To: Q2IcH9P...ZwG4WsvY" amount="Amount: 0.0004 ETH" message="Message: Hello Developers"></Tcard>
            <Tcard img={Image3} from="From: dUfUenk...hPklj3WC" to="To: Q2IcH9P...ZwG4WsvY" amount="Amount: 0.0004 ETH" message="Message: Hello Developers"></Tcard>
            <Tcard img={Image4} from="From: dUfUenk...hPklj3WC" to="To: Q2IcH9P...ZwG4WsvY" amount="Amount: 0.0004 ETH" message="Message: Hello Developers"></Tcard>
            <Tcard img={Image5} from="From: dUfUenk...hPklj3WC" to="To: Q2IcH9P...ZwG4WsvY" amount="Amount: 0.0004 ETH" message="Message: Hello Developers"></Tcard>
            <Tcard img={Image6} from="From: dUfUenk...hPklj3WC" to="To: Q2IcH9P...ZwG4WsvY" amount="Amount: 0.0004 ETH" message="Message: Hello Developers"></Tcard>
        </div>
      </div>
    </div>
  )
}

export default Transaction;
