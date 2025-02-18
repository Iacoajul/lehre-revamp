import './MainPage.css'
import '../../index.css'
import Week from './Week';
import Semesterüberblick from './Semesterüberblick';
import VSData from '../../data/Veranstaltungsdaten';

function MainPage() {
    const currentSemester = "Wintersemester 2024 / 2025";
    const { current, archive } = groupBySemester(VSData, currentSemester);

    console.log("Current Semester Events:", current);
    console.log("Archived Semesters:", archive);

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

function groupBySemester(events, currentSemester) {
    return events.reduce((acc, event) => {
        const semester = event.semester;
        if (semester === currentSemester) {
            if (!acc.current) {
                acc.current = [];
            }
            acc.current.push(event);
        } else {
            if (!acc.archive) {
                acc.archive = {};
            }
            if (!acc.archive[semester]) {
                acc.archive[semester] = [];
            }
            acc.archive[semester].push(event);
        }
        return acc;
    }, { current: [], archive: {} });
}