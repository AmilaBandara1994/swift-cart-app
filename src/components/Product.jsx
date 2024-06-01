import React,{useEffect} from 'react'
import ProductCard from './ProductCard';
import css from './Product.module.css'
import { add } from '../store/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import  { getproducts }  from '../store/productSlice';

const Product = () => {
    const dispatch = useDispatch();
    const {data: products, status}= useSelector(state => state.products);

    useEffect(()=>{
        // dispatch an action for get product;
        dispatch(getproducts());
    },[dispatch]);

    const addtocart = (product) => {
         dispatch(add(product));
    }

  return (
    <>
        <div className={css.card_container} >
            {
                status ===  'loading'  ? (
                    <h2> Loading... </h2>
                ):( 
                products.map((product) =>(
                    <ProductCard 
                    key={product.id} 
                    product={product}
                    clickHandler={addtocart}
                    />
            
            )))
            }
            
        </div>
    </>
  )
}

export default Product