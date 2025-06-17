import { useContext } from "react";
import { AuthContext } from "./../Auth/Authprovider";

const UseAuth = () => {
  const AuthContexts = useContext(AuthContext);
  return AuthContexts;
};

export default UseAuth;
