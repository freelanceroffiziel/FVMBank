import { useContext } from "react";
import { AuthContext } from "./AuthContextProvider"; 

const useAuth = () => useContext(AuthContext);

export default useAuth;