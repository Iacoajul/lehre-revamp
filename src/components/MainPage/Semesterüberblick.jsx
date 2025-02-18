import './MainPage.css'
import './Semester.css'
import Semester from './Semester';

//Eine Auflistung von allen Semestern (außer dem aktuellen)
function Semesterüberblick(props) {
    const archive = props.archive;
    return(
        <div className='semesterListe'>
            {Object.entries(archive).map(([semestername, events]) => (
                <Semester key={semestername} name={semestername} events={events} />
            ))}
        </div>
    );
}

export default Semesterüberblick;