import React, { useState } from "react"
import "./header.css"
import { MdLocalGroceryStore } from "react-icons/md";

const Header = () => {
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <header>
        <div className='container flexSB'>
          <nav className='flexSB'>
            <div className='logo'>
              <img src='./images/logotext.png' alt='' />
            </div>
         
            <ul className={Mobile ? "navMenu-list" : "flexSB"} onClick={() => setMobile(false)}>
              <li>
                <a href='/'>Əsas səhifə</a>
              </li>
              <li>
                <a href='/'>Filmlər</a>
              </li>
              <li>
                <a href='/'>Film otaqları</a>
              </li>
              <li>
                <a href='/'>Haqqımızda</a>
              </li>
              <li>
                <a href='/'>Əlaqə</a>
              </li>
            </ul>
            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
          <div className='account flexSB'>
            <i className='fa fa-search'></i>
            <MdLocalGroceryStore />
            <i className='fas fa-user'></i>
            <button>Abone ol </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
