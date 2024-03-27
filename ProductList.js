// ProductList.js
import React from 'react';

function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product">
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          <p>Category: {product.category}</p>
          {/* Add more product details here */}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
