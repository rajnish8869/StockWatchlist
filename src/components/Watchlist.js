import React from 'react'
import google_logo from '../image/google-logo.png'
import search from '../image/search.png'
import cross from '../image/cross.png'


export default function Watchlist() {
    return (
        <div>
            <div className="searchbar">
                
                <img src={cross} className="cross-button" alt='cross' height="32px"/>
                <img src={search} className="search-button" alt='search' height="22px"/> 
                <input className="search-input" type='text' placeholder="Search stocks to add to watchlist"/>
            </div>
            <h3>Popular Stocks</h3>
                <div className="heading-stock">
                    <p>COMPANY</p>
                    <p>MARKET PRICE</p>
            </div>
            <div className='row'>
                <div className='col-6 '>
                  <img src={google_logo} alt='google logo' height="40px"/>
                  <small>Google</small>
                </div>
                <div className='col-6 text-right'>
                    <p>$2500 <small className="usd">USD</small></p>
                    <small>+$250 USD (2.33%)</small>
                </div>
            </div>
        </div>
    )
}
