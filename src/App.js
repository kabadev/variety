import "./App.css";
import Cart from "./pages/cart/Cart";
import Category from "./pages/category/Category";
import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import ProductDetail from "./pages/productDetail/ProductDetail";
import { Route, Routes, Navigate } from "react-router-dom";
import ScrollToTop from "./helper/ScrollTop";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./context/AuthContext";
import axios from "axios";

export const AppContext = createContext();
function App() {
  const { loggedUser, config } = useContext(AuthContext);
  const [cartCount, setCartCount] = useState(0);
  const [cart, setCart] = useState([]);

  const fetchCart = async () => {
    const res = await axios.get("/carts/find/" + loggedUser._id, config);
    setCart(res.data);
    setCartCount(res.data.length);
  };
  useEffect(() => {
    fetchCart();
  }, [loggedUser]);
  return (
    <AppContext.Provider
      value={{ cartCount, setCartCount, fetchCart, cart, setCart }}
    >
      <div className="App">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/product/:p_slug" element={<ProductDetail />} />
          <Route path="/category/:catSlug" element={<Category />} />
          <Route path="/subCategory/:subCatSlug" element={<Category />} />
          <Route
            path="/cart"
            element={loggedUser ? <Cart /> : <Navigate to="./login" />}
          />
          <Route
            path="/orders"
            element={loggedUser ? <Order /> : <Navigate to="./login" />}
          />
          <Route
            path="/login"
            element={loggedUser ? <Navigate to="/" /> : <Login />}
          />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
