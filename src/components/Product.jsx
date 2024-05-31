import React,{useState, useEffect} from 'react'
import ProductCard from './ProductCard';
import css from './Product.module.css'

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        //api
        fetch('https://fakestoreapi.com/products')
        .then(data => data.json())
        .then(result => setProducts(result));
    },[]);

  return (
    <>
        <div className={css.card_container} >
            {
                products.map((product) =>(
                    <ProductCard 
                    key={product.id} 
                    title={product.title} 
                    desc={product.description} 
                    img={product.image} 
                    price={product.price}
                     />
                ))
            }
            
        </div>
    </>
  )
}

export default Product