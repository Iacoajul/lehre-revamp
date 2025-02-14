import '../../index.css'
import WeekDay from './WeekDay'
import VSData from '../../data/Veranstaltungsdaten';

//erstellt für jeden Wochentag ein WeekDay component mit den jeweils stattfindenden Veranstaltungen
function Week() {
    const week = createWeek(VSData);
    return(
        <>
            <WeekDay day='Montag' events={week.monday}/>
            <WeekDay day='Dienstag' events={week.tuesday}/>
            <WeekDay day='Mittwoch' events={week.wednesday}/>
            <WeekDay day='Donnerstag' events={week.thursday}/>
            <WeekDay day='Freitag' events={week.friday}/>
        </>
    )
}

export default Week

function createWeek(vs){
    const week = {
        monday: [],
        tuesday: [],
        wednesday: [],
        thursday: [],
        friday: []
    };

    if(Array.isArray(vs)){
        vs.forEach(element => {
            switch (element.date.weekday){
                case "Mo.":
                    week.monday.push(element);
                    break;
                case "Di.":
                    week.tuesday.push(element);
                    break;
                case "Mi.":
                    week.wednesday.push(element);
                    break;
                case "Do.":
                    week.thursday.push(element);
                    break;
                case "Fr.":
                    week.friday.push(element);
                    break;
            }
        });   
    }

    return week;
}