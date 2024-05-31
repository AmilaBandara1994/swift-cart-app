import React from 'react'
import css from './Header.module.css'

const Header = () => {
  return (
    <div className={css.header} >
        <div className={css.company_logo} >
            <h1>SwisCart</h1>
        </div>
    
        <nav>
            <ul>
                <li><a href="/"> Home </a></li>
                <li><a href="/Products"> Products </a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header