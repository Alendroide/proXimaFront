import { Navigate } from 'react-router-dom';
function Redirect(props) {
    return(<Navigate to={props.url}/>)
}
export default Redirect;