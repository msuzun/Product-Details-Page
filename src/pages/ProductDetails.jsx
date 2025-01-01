import { useParams, useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


const priceList = [
  { name: 'Cheese', price: '20' },
  { name: 'Milk', price: '10' },
  { name: 'Tissues', price: '5' },
];

export default function ProductDetails() {
  const { id } = useParams();
  const location = useLocation();
  const [product, setProduct] = useState({});

  useEffect(() => {
    if (location.state) {
      const productData = location.state;
      const productPrice = priceList.find(item => item.name === productData.name).price
      setProduct({ ...productData, price: productPrice });
    } 
  }, [id,location.state]);

  if (!product.name) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Link to="/" style={{textDecoration:'none',color:'green'}}>Back home</Link>
      <div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <h3>${product.price}</h3>
        <img src={product.image} width='100' alt={product.name} />
      </div>
    </div>
  );
}
