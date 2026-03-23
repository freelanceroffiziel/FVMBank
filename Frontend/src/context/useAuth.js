import { useContext } from "react";
import { AuthContext } from "./AuthContextProvider"; // use the SAME AuthContext

const useAuth = () => useContext(AuthContext);

export default useAuth;