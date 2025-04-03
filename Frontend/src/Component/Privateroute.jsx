import { useNavigate} from "react-router-dom";
import Dashboard from "./Dashboard.jsx";


const Privateroute = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem("authtoken");

  // return token ? <Dashboard/> : <Navigate to="/" />;
  if(!token){
    return navigate('/')
  }
  return
};

export default Privateroute;