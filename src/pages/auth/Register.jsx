import "./auth.css";

import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import authImg from "../../img/auth.svg";
function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      fullName: fullName,
      email: email,
      mobile: mobile,
      address: address,
      password: password,
    };
    if (fullName && email && mobile && address && password) {
      try {
        const res = await axios.post("/users", data);
        if (res.status === 200) {
          window.location.href = "/login";
        } else {
          console.log("noo");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setIsError(true);
    }
  };

  return (
    <div className="Register">
      <Header />
      <main>
        <div className="product-container">
          <div className="product-box  ">
            <div className="product-main">
              <div className="auth">
                <div className="auth_form">
                  <div className="form_header">
                    <h3>Register</h3>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="inputs">
                      <div className="input">
                        <label htmlFor="name">Full Name</label>
                        <input
                          type="text"
                          placeholder="Full Name"
                          id="name"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                        />
                      </div>
                      <div className="input">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          placeholder="Email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="input">
                        <label htmlFor="mobile">Mobile</label>
                        <input
                          type="number"
                          placeholder="mobile"
                          id="mobile"
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                        />
                      </div>
                      <div className="input">
                        <label htmlFor="address">Full Address</label>
                        <input
                          type="text"
                          placeholder="Address"
                          id="address"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </div>
                      <div className="input">
                        <label htmlFor="password">Password</label>
                        <input
                          type="password"
                          placeholder="Password"
                          id="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="auth_other">
                      <p>
                        Already have an Account{" "}
                        <Link to="/login">Login Here</Link>
                      </p>
                      {isError && (
                        <p className="error">All Fields are required</p>
                      )}
                    </div>
                    <div className="action_btn">
                      <button className="btn btn-primary" type="submit">
                        Register
                      </button>
                    </div>
                  </form>
                </div>
                <div className="auth_banner">
                  <img src={authImg} alt="" />
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

export default Register;
