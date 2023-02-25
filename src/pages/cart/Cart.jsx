// import "./home.css";

import "./cart.css";
import { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import { Modal, useMantineTheme, Notification } from "@mantine/core";
import { IconCheck, IconX } from "@tabler/icons";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { AppContext } from "../../App";
import axios from "axios";
function Cart() {
  const { loggedUser, config } = useContext(AuthContext);
  const { cart, setCart, fetchCart } = useContext(AppContext);

  const { checkAuth } = useContext(AuthContext);
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [cout, setqourt] = useState(2);

  useEffect(() => {
    checkAuth();
  }, []);
  const decreaseQty = (qty) => {
    setqourt(qty - 1);
  };
  const increaseQty = (qty) => {
    return qty + 1;
  };

  const removeProduct = async (id) => {
    const res = await axios.delete("/carts/" + id, config);
    fetchCart();
  };

  const totalPrice = cart.reduce((accumulator, currentProduct) => {
    return accumulator + currentProduct.product.price * currentProduct.quatity;
  }, 0);
  const totalDel = cart.reduce((accumulator, currentProduct) => {
    return accumulator + 2;
  }, 0);
  const total = totalPrice + totalDel;

  return (
    <div className="home">
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        overlayColor={
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        overlayOpacity={0.55}
        overlayBlur={3}
      >
        {isLoading ? (
          <Notification loading title="Placing Your Order" disallowClose>
            Please Wait...
          </Notification>
        ) : (
          <Notification
            icon={<IconCheck size={18} />}
            color="teal"
            title="Your Order Placed Successfully"
            disallowClose
          >
            <div className="action_btn">
              <button className="btn btn-outline">View Detail</button>
            </div>
          </Notification>
        )}
      </Modal>
      <Header />
      <main>
        <div className="product-container">
          <div className="container">
            <Sidebar />
            <div className="cart_Container">
              <div className="cart_header">
                <h2 className="title">Cart</h2>
              </div>
              <div className="dflex">
                <div className="cart_box has-scrollbar">
                  <div className="cart_title">
                    <p className="header_cart pdetail">Product Details</p>
                    <p className="header_cart pqty">Quantity</p>
                    <p className="header_cart ptolalprice">Total</p>
                  </div>
                  <div className="cart_products">
                    {cart.length > 0
                      ? cart.map((cart, i) => (
                          <div className="cart_product" key={i}>
                            <div className="product_card">
                              <div className="product_image">
                                <img src={cart.product.img} alt="" />
                              </div>
                              <div className="product_info">
                                <p className="product_name">
                                  {cart.product.title.slice(0, 30)}..
                                </p>
                                <p className="product_price">
                                  ${cart.product.price}
                                </p>
                                <p className="df">
                                  Delivery Fee: <b>$5.0</b>
                                </p>
                                <p className="df">
                                  Expected: <b>Friday feb 20 2023</b>{" "}
                                </p>
                                <button
                                  className="remover"
                                  onClick={() => removeProduct(cart._id)}
                                >
                                  x
                                </button>
                              </div>
                            </div>

                            <div className="cart_product_quatity">
                              <button
                                className="qty_btn"
                                onClick={() => decreaseQty(cart.quatity)}
                              >
                                -
                              </button>
                              <span className="qty_btn">{cart.quatity}</span>
                              <button className="qty_btn" onClick={increaseQty}>
                                +
                              </button>
                            </div>
                            <div className="product_total">
                              <p className="total_price">
                                ${cart.product.price * cart.quatity}
                              </p>
                            </div>
                          </div>
                        ))
                      : "No Product on cart"}
                  </div>
                </div>
                <div className="order_summary">
                  <h4 className="title">Order Summary</h4>

                  <div className="summary_content">
                    <div className="top">
                      <div className="total_item">
                        <p>Items(5):</p>
                        <p>${totalPrice}</p>
                      </div>
                      <br />
                      <p className="method">Pay On Delivery</p>
                      <div className="total_item">
                        <p>Delivery Fees:</p>
                        <p>${totalDel}</p>
                      </div>
                    </div>

                    <div className="bottom">
                      <div className="total_amount">
                        <p>TOTAL</p>
                        <p>${total}</p>
                      </div>

                      <button class="checkout-btn">CheckOut</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Cart;
