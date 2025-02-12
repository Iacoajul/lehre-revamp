import './MainPage.css'
import '../../index.css'
import WeekDay from './WeekDay'
import Semesterliste from './Semesterliste';

//Die Startseite. Beinhaltet Auflistungen und Daten von Lehrveranstaltungen
function MainPage() {
    return(
        <div className='wrapper'>

            <h1 className='IDH_textgradient'>Lehrveranstaltungen</h1>
            <h2 className='IDH_blue'>Wintersemester 2024 / 2025</h2>

            <div className='container'>
                <WeekDay/>
            </div>

            <h2 className='IDH_blue'>Vergangene Semester</h2>
            
            <div className='container'>
                <Semesterliste/>
            </div>
        </div>
    );
}

export default MainPage
