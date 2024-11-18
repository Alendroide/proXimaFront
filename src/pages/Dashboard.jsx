import axios from "axios";
import { useState, useEffect } from "react";
import Post from "../components/Dashboard/Post";

const Dashboard = () => {
    const [data,setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/posts')
        .then(posts=>setData(posts.data))
        .catch(error=>console.error(error));
    },[])

    return(
        <div>
            {data.map(post=>(
                <Post post={post} author={post.author}/>
            ))}
        </div>
    )
}

export default Dashboard;