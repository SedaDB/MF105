import { BrowserRouter, Route, Routes } from "react-router";
import { ToastContainer } from 'react-toastify';
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Detail from "./pages/detail/Detail";
import Cart from "./pages/cart/Cart";
import Footer from "./components/footer/Footer";
import { CartProvider } from "./store/context/cartContext";

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  )
}
