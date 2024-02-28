import { createContext, useContext, useEffect, useState } from "react";

export const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [service, setService] = useState("");

  const storeTokenLs = (token) => {
    return localStorage.setItem("token", token);
  };

  const LogoutUser = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  let isLoggedIn = !!token;
  console.log("isLoggedIn :", isLoggedIn);

  const userAuthentication = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log("userData2 : ", data.userData);
        setUser(data.userData);
      }
    } catch (error) {
      console.log(" error fetching user data");
    }
  };
  const getServices = async () => {
    let serviceData = await fetch("http://localhost:3000/api/service", {
      method: "GET",
    });
    if (serviceData.ok) {
      const data = await serviceData.json();
      console.log("service Data : ", data);
      setService(data.message);
    } else {
      console.log("error in loading service data...");
    }
  };
  useEffect(() => {
    getServices();
    userAuthentication();
  }, []);
  return (
    <TokenContext.Provider
      value={{ storeTokenLs, LogoutUser, isLoggedIn, user, service }}
    >
      {children}
    </TokenContext.Provider>
  );
};

export const useToken = () => {
  const useTokenValue = useContext(TokenContext);
  if (!useTokenValue) {
    throw new Error("useTokenValue is used outside of provider");
  }
  return useTokenValue;
};
