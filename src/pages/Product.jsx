import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Product({ details }) {
  const [count, setCount] = useState(0);

  function handleIncrementClick() {
    setCount((c) => c + 1);
  }
  function handleDecrementClick() {
    if (count > 0) {
      setCount((c) => c - 1);
    }
  }

  return (
    <Link
      to={`/product/${details.id}`}
      state={{ 
        name: details.name, 
        description: details.description, 
        price: details.price, 
        image: details.image 
      }}
      style={{textDecoration:'none',color:'green'}}
    >
      <div className='product'>
        <img src={details.image} width='50' alt={details.name} />
        <div className='product-info'>
          <h2>{details.name}</h2>
          <p>{details.description}</p>
        </div>
      </div>
    </Link>
  );
}
