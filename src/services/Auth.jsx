import { useEffect, useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import api from './axiosConfig';

const Auth = () => {
    const navigate = useNavigate();
    const [data,setData] = useState({});

    useEffect(()=>{
        api.get('/token')
        .then(result=>{
            if(result.status===200){
                setData(result.data);
            }
        })
        .catch(error=>{
            localStorage.removeItem('token');
            setData({});
            navigate('/login');
        })
    },[navigate])
    return(
        <div className="d-flex align-items-center mx-3">
            <img
                style={{
                    width : '40px',
                    height : '40px',
                    borderRadius : '50%'
                }}
                src={data.img?(data.img):('logo192.png')}
                alt=""
            />
            <h6 className="m-0 mx-2">
                {data.username ?
                (<Link to={`/user?u=${data.id}`}>{data.username}</Link>):
                (<Link to='/login'>Iniciar sesión</Link>)}
            </h6>
        </div>
    )
}
export default Auth;