import Auth from "../services/Auth";
import {Link} from "react-router-dom";

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
            <div className="me-auto d-flex align-items-center ms-3">
                <Link to='/dashboard'>
                    <img
                        style={{
                            width : '100px'
                        }}
                        src="http://localhost:3000/logo.png"
                        alt=""
                    />
                </Link>
                <div className="mx-3">
                    <Link to='/dashboard'>
                        <h5 className="m-0">Home</h5>
                    </Link>
                </div>
            </div>
            <div>
                <Auth/>
            </div>
        </nav>
    )
}
export default Navbar;