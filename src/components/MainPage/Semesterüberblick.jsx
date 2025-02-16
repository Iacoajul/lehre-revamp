import './MainPage.css'
import './Semester.css'
import Semester from './Semester';

//Plathalter
function Semesterüberblick(props) {

    return(
        <div className='semesterListe'>
            <Semester Semester="Sommersemester 2024"/>
            <Semester Semester="Sommersemester 2024"/>
            <Semester Semester="Sommersemester 2024"/>
        </div>
    );
}

export default Semesterüberblick;