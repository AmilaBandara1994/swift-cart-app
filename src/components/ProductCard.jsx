import React from 'react'
import css from './ProductCard.module.css'


const ProductCard = ({product, button='Add to cart', clickHandler}) => {


  return (
    <div className={css.card} >
        <div className={css.top} >
           <img src={product.image} alt="logo" />
        </div>
        <div className={css.body} >
            <div className={css.title} >{product.title}</div>
            <div className={css.price} > ${product.price}</div>
            <div className={css.description} > {product.description} </div>
            <div className={css.controllers} >
                <button className='btn' onClick={()=> clickHandler(product)}> {button} </button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard