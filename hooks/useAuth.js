import { useContext } from "react";
import { authContext } from './../context/authProvider/AuthProvider';

const useAuth = () => {
  const auth = useContext(authContext);
  
  return auth;
};

export default useAuth;
