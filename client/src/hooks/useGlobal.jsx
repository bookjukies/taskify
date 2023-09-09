import { useContext } from "react";
import GlobalContext from "../Context/GlobalContext";

const useGlobal = () => useContext(GlobalContext)

export default useGlobal