import React from 'react'
import css from './ProductCard.module.css'

const ProductCard = ({title='Product Name', price='', desc='Description goes here', button='Add to cart',img}) => {
  return (
    <div className={css.card} >
        <div className={css.top} >
           <img src={img} alt="logo" />
        </div>
        <div className={css.body} >
            <div className={css.title} >{title}</div>
            <div className={css.price} > ${price}</div>
            <div className={css.description} > {desc} </div>
            <div className={css.controllers} >
                <button className='btn'> {button} </button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard