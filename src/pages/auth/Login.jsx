import "./auth.css";

import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import authImg from "../../img/auth.svg";
import { AuthContext } from "../../context/AuthContext";
function Login() {
  const { setLoggedUser, setAccessToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginForm = async (e) => {
    e.preventDefault();

    const data = {
      email: email,
      password: password,
    };
    setIsLoading(true);
    const res = await axios.post("/users/login", data, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    setIsLoading(false);
    if (res.status === 200) {
      setLoggedUser(res.data);
      setAccessToken(res.data.accessToken);

      navigate("/");
    } else if (res.statusCode === 400) {
      setErrorMsg(res.response.data);
    } else {
      setErrorMsg("Login Faild! Please try again later!");
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setErrorMsg(null);
    }, 3000);
  }, [errorMsg]);

  return (
    <div>
      <Header />
      <main>
        <div className="product-container">
          <div className="product-box  ">
            <div className="product-main">
              <div className="auth">
                <div className="auth_form">
                  <div className="form_header">
                    <h3>Login</h3>
                  </div>
                  <form onSubmit={handleLoginForm}>
                    <div className="inputs">
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
                        <label htmlFor="name">Password</label>
                        <input
                          type="password"
                          placeholder="Password"
                          id="name"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="auth_other">
                      <p>
                        Don't have an Account?
                        <Link to="/register">Register Here</Link>
                      </p>
                      {errorMsg && <p className="error">{errorMsg}</p>}
                    </div>
                    <div className="action_btn">
                      <button className="btn btn-primary" disabled={isLoading}>
                        {isLoading ? "Loading" : "Login"}
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

export default Login;
