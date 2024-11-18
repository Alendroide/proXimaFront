import Profile from "../components/User/Profile";
import UserFetch from "../services/UserFetch";

const User = () => {
    const data = UserFetch();
    return(
        <div>
            <div className="m-5">
                <Profile data={data}/>
            </div>
        </div>
    )
}
export default User;