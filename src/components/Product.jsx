import React,{useState, useEffect} from 'react'
import ProductCard from './ProductCard';
import css from './Product.module.css'
import { add } from '../store/cartSlice'
import { useDispatch } from 'react-redux'

const Product = () => {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        //api
        fetch('https://fakestoreapi.com/products')
        .then(data => data.json())
        .then(result => setProducts(result));
    },[]);

    const addtocart = (product) => {
         dispatch(add(product));
    }

  return (
    <>
        <div className={css.card_container} >
            {
                products.map((product) =>(
                    <ProductCard 
                    key={product.id} 
                    product={product}
                    clickHandler={addtocart}
                     />
                ))
            }
            
        </div>
    </>
  )
}

export default Product