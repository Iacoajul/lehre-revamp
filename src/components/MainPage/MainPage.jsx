import './MainPage.css'
import '../../index.css'
import Week from './Week';
import Semesterüberblick from './Semesterüberblick';

//Die Startseite. Beinhaltet Auflistungen und Daten von Lehrveranstaltungen
function MainPage() {
    return(
        <div className='wrapper'>

            <h1 className='IDH_textgradient'>Lehrveranstaltungen</h1>

            <h2 className='IDH_blue'>Wintersemester 2024 / 2025</h2>
            <div className='container'><Week/></div>

            <h2 className='IDH_blue'>Semesterüberblick</h2>
            <div className='container'><Semesterüberblick/></div>
            
        </div>
    );
}

export default MainPage
