import { useContext } from "react";
import AuthContext from "./AuthContext";

const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const login = (user) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  return { user, login, logout };
};

export default useAuth;
