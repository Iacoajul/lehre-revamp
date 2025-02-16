import './MainPage.css'
import './Semester.css'
import Semester from './Semester';

//Plathalter
function Semesterüberblick() {
    return(
        <div className='semesterListe'>
            <Semester/>
            <Semester/>
            <Semester/>
        </div>
    );
}

export default Semesterüberblick;