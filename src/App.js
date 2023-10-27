// import React, { useState } from "react";
// import TheNav from "./components/Header/TheNav";
// import Sections from "./components/Sections/Sections";
// import Cart from "./components/Cart/Cart";
// import CartProvider from "./components/store/CartProvider";
// import TheFooter from "./components/Footer/TheFooter";
// import Swal from "sweetalert2";

// const App = () => {
//   //Using useState hook
//   const [cartIsShown, setCartIsShown] = useState(false);
//   //END

//   //Managing the state of the cart component using useState
//   const onShowCartHandler = () => {
//     setCartIsShown(true);
//   };

//   const onCloseCartHandler = () => {
//     setCartIsShown(false);
    
//   };
//   //END

//   //EVent to occur on Order
//   const onOrderHandler = () => {
//     setCartIsShown(false);

//     Swal.fire({
//       title: "Successful!",
//       text: "Your order is on the way",
//       icon: "success",
//     });
//   };

//   //END

//   //Rendering the cart and all the sections
//   return (
    
//     <CartProvider>
//       {cartIsShown && (
//         <Cart onCloseCart={onCloseCartHandler} onOrder={onOrderHandler} />
//       )}
//       <TheNav onShowCart={onShowCartHandler} />
//       <Sections />
//       <TheFooter />
//     </CartProvider>
    
//   );
//   //END
// };

// export default App;
import React from "react"; 
import Home from "./Home.js";
import LoginForm from "./form.js";
import Pay from './components/Cart/pay.js';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>;
        <Route path="/form" element={<LoginForm/>}/>
        <Route path="/Pay" element={<Pay/>}/>
      </Routes>
    </Router>
  )
}
export default App;