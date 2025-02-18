import './MainPage.css'
import '../../index.css'
import Week from './Week';
import Semesterüberblick from './Semesterüberblick';
import VSData from '../../data/Veranstaltungsdaten';
import {groupBySemester} from '../../data/util'

function MainPage() {
    
    const currentSemester = "Wintersemester 2024 / 2025";
    const { current, archive } = groupBySemester(VSData, currentSemester);

    return (
        <div className='wrapper'>
            <h1 className='IDH_textgradient'>Lehrveranstaltungen</h1>

            <h2 className='IDH_blue'>{currentSemester}</h2>
            <div className='container'><Week events={current} /></div>

            <h2 className='IDH_blue'>Semesterüberblick</h2>
            <div className='container'><Semesterüberblick archive={archive} /></div>
        </div>
    );
}

export default MainPage