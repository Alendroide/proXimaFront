import Form from "../components/Login/Form";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate()
    const logged = localStorage.getItem('token');
    if(logged){
        navigate('/dashboard');
    }
    return(
        <div>
            <Form/>
        </div>
    )
}

export default Login;