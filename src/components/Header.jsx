import React from 'react'
import css from './Header.module.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {

  const cartProducts = useSelector(state=> state.cart);

  return (
    <div className={css.header} >
        <div className={css.left_nav} >
          <div className={css.logo}>
            <h1> <Link to='/'>SwisCart</Link></h1>
          </div>
          <nav>
              <ul className={css.menu_items} >
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/products'>Products</Link></li>
              </ul>
          </nav>
        </div>

        <div className={css.right_nav} >
        <ul className={css.menu_items} >
                  <li><Link to='/cart'>My Bag {cartProducts.length} </Link></li>
              </ul>
        </div>
    
    </div>
  )
}

export default Header