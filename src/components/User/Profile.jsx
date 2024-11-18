import { format } from "date-fns";
import { es } from "date-fns/locale";
const Profile = (props) => {
    const fechaFormato = (fecha) => {
        const nuevaFecha = format(new Date(fecha),"d 'de' MMMM, yyyy",{locale:es});
        return(nuevaFecha);
    }
    return(
        <div className="bg-light d-inline-block p-5 shadow-lg rounded-5">
            <img
                style={{
                    width : '250px',
                    height : '250px',
                    borderRadius : '50%',
                    margin : '0 auto',
                    display : 'block'
                }}
                src={
                    props.data.img?
                    (props.data.img):
                    ('logo192.png')
                }
                alt="" />
                <div style={{
                    backgroundColor : 'white',
                }}
                className="my-3 rounded-3 p-3 shadow-sm"
                >
                    <div className="d-flex justify-content-center">
                        <h4>{props.data.username}</h4>
                    </div>
                    {props.data.bio}
                </div>
                {props.data.created_at&&(
                <p style={{
                    color: 'rgb(170,170,170)'
                }}>
                Se unió el {fechaFormato(props.data.created_at)}
                </p>
            )}
        </div>
    )
}
export default Profile;