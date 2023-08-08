import React from 'react';
import products from './products';

function ProductList() {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product">
          <img src={process.env.PUBLIC_URL + `/product-images/${product.image}`} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price.toFixed(2)}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
