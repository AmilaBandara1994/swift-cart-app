import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from './ProductCard';
import css from './Cart.module.css'
import { remove } from '../store/cartSlice';

const Cart = () => {
  const cartProducts = useSelector(state=> state.cart);
  const dispatch = useDispatch();

  const removefromcart =(product)=>{

    //dispatch a remove action
    dispatch(remove(product.id))

  }

  return (
    <div className={css.card_container}>
       {
                cartProducts.map((product) =>(
                    <ProductCard 
                    key={product.id} 
                    button='Remove'
                    product={product}
                    clickHandler={removefromcart}
                     />
                ))
            }
    </div>
  )
}

export default Cart