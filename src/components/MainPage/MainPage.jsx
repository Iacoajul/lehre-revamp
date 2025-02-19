import './MainPage.css'
import '../../index.css'
import Week from './Week';
import Semesterüberblick from './Semesterüberblick';
import VSData from '../../data/Veranstaltungsdaten';

function MainPage() {
    return(
        <div className='wrapper'>

            <h1 className='IDH_textgradient'>Lehrveranstaltungen</h1>

            <h2 className='IDH_blue'>Wintersemester 2024 / 2025</h2>
            <div className='container'><Week data={VSData}/></div>

            <h2 className='IDH_blue'>Semesterüberblick</h2>
            <div className='container'><Semesterüberblick/></div>
            
        </div>
    );
}

export default MainPage
