import { createContext, useState } from "react";
import clayful from "clayful/client-js";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(false);

  const isAuthenticated = () => {
    var Customer = clayful.Customer;

    var options = {
      customer: localStorage.getItem("accessToken"),
    };

    Customer.isAuthenticated(options, function (err, result) {
      if (err) {
        // Error case
        console.log(err.code);
        setIsAuth(false);
        return;
      }
      var data = result.data;

      if (data.authenticated) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    });
  };

  const signOut = () => {
    setIsAuth(false);
    localStorage.removeItem("accessToken");
    navigate("/login");
  };

  const AuthContextData = {
    isAuth,
    isAuthenticated,
    signOut
  };

  return (
    <AuthContext.Provider value={AuthContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
