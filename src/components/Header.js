import React from 'react'
import { navbar } from '../data/navMenu'
import logo from './../assets/logo.png'
import DarkMode from './DarkModeToggle'
const Header = () => {
    return (
        <header className='header'>
            <div className='top-header '>
                <ul className='row'>
                    <li className='item-list'>
                        <ion-icon name="menu-outline"></ion-icon>
                        <span className="item-text">Menu</span>
                    </li>
                    <li className='item-list'>
                        {/* <ion-icon name="moon"></ion-icon> */}
                        <DarkMode />
                    </li>
                </ul>

            </div>
            <div className='middle-header row'>

                <div className='site-logo'>
                    <img className='logo-img' src={logo} />
                </div>

            </div>
            <div className='bottom-header'>
                <nav className='navbar'>
                    <ul className='nav-menu row'>
                        {
                            navbar.map((item, index) => {
                                return (
                                    <li key={index} className="item-list">
                                        <a className='item-link link-hohver' href={item.link}>{item.text}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header