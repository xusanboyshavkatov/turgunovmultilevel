import React from 'react'
import './card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import testimg2 from '../../assets/test2.png'
import { faCrown, faUnlock } from '@fortawesome/free-solid-svg-icons';



const Card = () => {
  return (
    <div className='card'>
      <img src={testimg2} alt="" />
      <div className="card-title-fovorite">
        <h1>Hometown</h1>
        <FontAwesomeIcon icon={faHeart} className='faHeart' />
      </div>
      <div className="card-categories">
        <FontAwesomeIcon icon={faPenToSquare} className='faPenToSquare' />
        <h1>Speaking</h1>
      </div>
      {/* <div className="card-free">
        <FontAwesomeIcon icon={faUnlock} className='faUnlock' />
        <h1>free</h1>
      </div> */}
      <div className="card-paid">
        <FontAwesomeIcon icon={faCrown} className='faCrown' />
        <h1>Piad (15000 uzs)</h1>
      </div>
      <button
      style={{
        backgroundColor: '#FFBF00',
        color: 'black'
      }}
      >Buy test</button>
    </div>
  )
}

export default Card