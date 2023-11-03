import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
import { useState } from 'react';

function App() {

  const [product, setProduct] = useState([
   
    {
      url: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/i/blue-block-phone-&-computer-glasses:-black-full-rim-wayfarer-lenskart-blu-lb-e14058-c8_g_1795_7_20_22.jpg',
      name: 'blue transparaent frame',
      category: 'specs frame',
      seller: 'lenskart  ltd',
      price: 2999
    },
    {
      url: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/i/black-full-rim-square-lenskart-air-fusion-la-e13069-c1-eyeglasses_lenskart-air-la-e13033-c1-eyeglasses_eyeglasses_g_7876_2a_28july23.jpg',
      name: 'black full rem',
      category: 'specs frame',
      seller: 'lenskart  ltd',
      price: 3999
    },
    {
      url: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/i/blue-block-phone-&-computer-glasses:-pink-transparent-pink-full-rim-wayfarer-lenskart-blu-glasses-lb-e14058-c10_g_1825_13_july.jpg',
      name: 'lenskart pint lb frame',
      category: 'specs frame',
      seller: 'lenskart  ltd',
      price: 4999
    },
    {
      url: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/e/lenskart-air-la-e14018-c1-eyeglasses_lenskart-air-la-e14018-c1-eyeglasses_G_9850.jpg',
      name: 'lenskart air la frame',
      category: 'specs frame',
      seller: 'lenskart  ltd',
      price: 3456
    },
    {
      url: 'https://partners.lenskart.com/cdn/shop/products/lenskart-air-la-e14100-c3-c3-eyeglasses_G_7620_1325x.jpg?v=1637890108',
      name: 'blue cat eye frame',
      category: 'specs frame',
      seller: 'lenskart  ltd',
      price: 2897
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNo5Nju1E1oDJ9CuK0n--e5yM36ktP-99ncg&usqp=CAU',
      name: 'air flex light weight frame',
      category: 'specs frame',
      seller: 'lenskart  ltd',
      price: 3999
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx7AIl0Rx4bpUynVICL1z40COJpXz1NmkVvQ&usqp=CAU',
      name: 'yellow gunmental frame',
      category: 'specs frame',
      seller: 'lenskart  ltd',
      price: 1999
    },
    {
      url: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-air-la-e14798-c2-eyeglasses_g_7149_26_12_2022.jpg",
      name: 'green grey frame',
      category: 'specs frame',
      seller: 'lenskart  ltd',
      price: 2000
    },
    {
      url: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/i/Gunmetal-Black-Full-Rim-Square-Lenskart-Air-Clip-On-LA-E14400-C2-Eyeglasses_G_7810.jpg',
      name: 'black frame',
      category: 'specs frame',
      seller: 'lenskart ',
      price: 1999
    },
    {
      url: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/u/lux-ray-ban-0rb3025jm-001-x3-58-aviator-sunglasses_j_4155_1_1.jpg',
      name: 'red gold frame ',
      category: 'specs lens',
      seller: 'lenskart Ltd ',
      price: 2599
    },
    {
      url: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/e/lenskart-air-la-e13519-c3-eyeglasses_lenskart-air-la-e13519-c3-eyeglasses_g_3929_2_1.jpg',
      name: 'white primium',
      category: 'specs frame',
      seller: 'lenskart ltd',
      price: 5000
    },
    {
      url: 'https://partners.lenskart.com/cdn/shop/products/blue-gradient-black-maroon-full-rim-round-lenskart-studio-hip-hop-lk-s15196-c3-sunglasses_g_0552_21_02_2023_1325x.jpg?v=1684286649',
      name: 'round red frame',
      category: 'specs frame',
      seller: 'lenskart  LTD',
      price: 4000
    },
    {
      url: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/blue-transparent-silver-full-rim-rectangle-lenskart-air-signia-la-e15308-c1-eyeglasses_g_2391_02_11_23.jpg',
      name: 'fibar white  ',
      category: 'specs frame',
      seller: 'lenskart  Ltd',
      price: 2000
    },
    
    
  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <div>
      <Header count={cart.length}
        handleShow={handleShow} ></Header>

      {
        showCart ?
          <CartList cart={cart} ></CartList> :
          <ProductList product={product} addToCart={addToCart} ></ProductList>
      }


    </div>
  );
}

export default App;
