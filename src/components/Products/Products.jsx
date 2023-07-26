import React, {useEffect, useContext} from 'react';

import './Products.css';
import ProductCard from '../ProductCard/ProductCard';
import Loading from '../Loading/Loading';
import AppContext from '../../contexts/AppContext';

function Products() {

  const {products, loading, setLoading} = useContext(AppContext);

  useEffect(()=> {
    setLoading(false);
  }, []);

  return ( 
    (loading && <Loading />) || (
      <section className="products container">
        {products.map((product)=> <ProductCard key={product.id} data={product} /> )}
      </section>
    )
    
  );
}

export default Products;
