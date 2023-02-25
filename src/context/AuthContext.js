import { useState, createContext, useEffect } from "react";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(false);

  const [loggedUser, setLoggedUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [accessToken, setAccessToken] = useState(loggedUser?.accessToken);

  const config = {
    headers: {
      token: `Bearer ${accessToken}`,
      withCredentials: true,
    },
  };
  useEffect(() => {
    setAccessToken(loggedUser?.accessToken);
  }, [loggedUser]);

  // const LoginFunction = async (data, isLoading) => {
  //   setIsLoading(true);
  //   try {
  //     isLoading = true;
  //     const res = await axios.post("/users/login", data, {
  //       headers: { "Content-Type": "application/json" },
  //       withCredentials: true,
  //     });
  //     setLoggedUser(res.data);
  //     localStorage.setItem("user", JSON.stringify(res.data));
  //     setAuth(true);
  //     setIsLoading(false);
  //   } catch (error) {
  //     if (error.response.status === 400) {
  //       setError(error.response.data);
  //       setAuth(false);
  //       setIsLoading(false);
  //     } else {
  //       setError("Login Faild! Please try again later!");
  //       setAuth(false);
  //       setIsLoading(false);
  //     }
  //     setAuth(false);
  //     setIsLoading(false);
  //     navigate("/");
  //   }
  // };
  const checkAuth = async () => {
    try {
      const res = await axios.get("/users/checkAuth/valid", config);
      if (res.status === 200) {
        setLoggedUser(res.data);
      } else {
        setLoggedUser(null);
        navigate("/login");
      }
    } catch (error) {
      setLoggedUser(null);
      navigate("/login");
    }
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(loggedUser));
  }, [loggedUser]);
  // useEffect(() => {
  //   checkAuth();
  // }, []);

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        checkAuth,
        loggedUser,
        setLoggedUser,
        config,
        setAccessToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
