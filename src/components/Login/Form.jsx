import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Form = () => {
    const navigate = useNavigate();

    const [email,setEmail] = useState('');
    const [password,setPass] = useState('');
    const [error,setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = {
            email : email,
            password : password
        }
        try{
            setError('');
            const {data} = await axios.post('http://localhost:3000/api/login',form);
            localStorage.setItem('token',data.token);
            navigate("/dashboard");
        }
        catch(error){
            console.error(error);
            if(error.status===400){
                setError('Usuario no encontrado');
            }
            else if(error.status===401){
                setError('Contraseña incorrecta');
            }
        }
    }
    return(
        <form
            className="p-5 bg-light rounded-5 shadow-lg m-5"
            onSubmit={handleSubmit}
        >
            <h1>Iniciar sesión:</h1>
            <input
                className="form-control my-3"
                onChange={(e)=>setEmail((e.target.value).toLowerCase())}
                type="email"
                placeholder="Email"
                required
            />
            <input
                className="form-control my-3"
                onChange={(e)=>setPass(e.target.value)}
                type="password"
                placeholder="Contraseña"
                required
            />
            <button className="btn btn-success mb-3">Log In</button>
            {error &&(
                <div className="text-danger">
                    {error}
                </div>
            )}
        </form>
    )
}

export default Form;