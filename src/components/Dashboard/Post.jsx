import {Link} from 'react-router-dom';
import {format} from 'date-fns';
import {es} from 'date-fns/locale';
const Post = (props) => {
    const dateFormat = (fecha) => {
        return(format(new Date(fecha),"p '|' d 'de' MMMM, yyyy",{locale:es}))
    }
    return(
        <div className="w-50 shadow-lg rounded-5 py-5 px-3 my-4 mx-auto">
            <Link to={`/post?p=${props.post.id}`}>
                <div className='mx-2'>
                    <Link to={`/user?u=${props.author.id}`}>
                        <div className="d-flex align-items-center mb-3">
                            <img
                                style={{
                                    width : '40px',
                                    height : '40px',
                                    borderRadius : '50%'
                                }}
                                className="mx-2"
                                src={props.author.img ? (props.author.img):('logo192.png')}
                                alt="userImage"
                            />
                            <h5>{props.author.username}</h5>
                        </div>
                    </Link>
                    <p style={{
                        fontWeight : '500'
                    }}>
                        {props.post.content}
                    </p>
                    <p style={{
                        color : 'rgb(170,170,170)'
                    }}>
                        {dateFormat(props.post.created_at)}
                    </p>
                </div>
            </Link>
        </div>
    )
}
export default Post;