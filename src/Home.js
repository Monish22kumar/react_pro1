import React, { useState } from "react";
import TheNav from './components/Header/TheNav.js';
import Sections from './components/Sections/Sections.js';
import Cart from './components/Cart/Cart.js';
import CartProvider from './components/store/CartProvider.js';
import TheFooter from './components/Footer/TheFooter.js';

import Swal from "sweetalert2";

const Home = () => {
  //Using useState hook
  const [cartIsShown, setCartIsShown] = useState(false);
  //END

  //Managing the state of the cart component using useState
  const onShowCartHandler = () => {
    setCartIsShown(true);
  };

  const onCloseCartHandler = () => {
    setCartIsShown(false);
    
  };
  //END

  //EVent to occur on Order
  const onOrderHandler = () => {
    setCartIsShown(false);

    Swal.fire({
      title: "Successful!",
      text: "Your order is on the way",
      icon: "success",
    });
  };

  //END

  //Rendering the cart and all the sections
  return (
    
    <CartProvider>
      {cartIsShown && (
        <Cart onCloseCart={onCloseCartHandler} onOrder={onOrderHandler} />
      )}
      <TheNav onShowCart={onShowCartHandler} />
      <Sections />
      <TheFooter />
    </CartProvider>
    
  );
  //END
};

export default Home;
