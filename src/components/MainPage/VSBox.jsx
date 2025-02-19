import './VSBox.css'
import '../../index.css'
import {Link} from 'react-router-dom'

//Box mit Daten zur Veranstaltung auf der Startseite. Leitet zur Hauptseite der Veranstaltung weiter.
function VSBox(props) {
    const teachers = (props.teachers && Array.isArray(props.teachers)) ? props.teachers.join(" | ") : "No teachers listed";
    const date = props.date || {};

    return(
        <Link to={`/veranstaltung/${props.id}`} >
            <div className="VSBox">
                <h4>{props.title}</h4>
                <div className='dates'>
                    <p>{date.time || "unbekannte Uhrzeit"}</p>
                    <p>{date.place || "unbekannter Raum"}</p>
                    <p className='teacher'>{teachers}</p>
                </div>
            </div>
        </Link>
    );
}

export default VSBox;