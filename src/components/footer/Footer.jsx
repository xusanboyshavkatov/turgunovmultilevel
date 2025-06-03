import {React, useState, useEffect} from 'react'
import './footer.css'
import { faFileInvoice, faHouse, faHeart, faPieChart, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {

    return (
        <div className="footer">
            <div className="footer-home-btn">
                <FontAwesomeIcon icon={faHouse} className='faicon'/>
                <h3>Home</h3>
            </div>
            <div className="footer-home-btn">
                <FontAwesomeIcon icon={faFileInvoice} className='faicon'/>
                <h3>Exams</h3>
            </div>
            <div className="footer-home-btn">
                <FontAwesomeIcon icon={faHeart} className='faicon'/>
                <h3>Favorites</h3>
            </div>
            <div className="footer-home-btn">
                <FontAwesomeIcon icon={faPieChart} className='faicon'/>
                <h3>Statistics</h3>
            </div>
            <div className="footer-home-btn">
                <FontAwesomeIcon icon={faUser} className='faicon'/>
                <h3>Profile</h3>
            </div>
        </div>
    )
}

export default Footer