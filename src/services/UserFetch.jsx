import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from './axiosConfig';
const UserFetch = () => {
    const [search] = useSearchParams();
    const id = search.get("u");
    const [data,setData] = useState({});
    useEffect(()=>{
        api.get(`/users/${id}`)
        .then(result=>{
            setData(result.data);
        })
        .catch(error=>{
            console.log(error);
        })
    },[id])
    return data
}
export default UserFetch;