import { useMemo } from 'react';
import '../../index.css';
import WeekDay from './WeekDay';


// Weekday mapping from short German notation to full names
const weekdayMap = {
    "Mo.": "Montag",
    "Di.": "Dienstag",
    "Mi.": "Mittwoch",
    "Do.": "Donnerstag",
    "Fr.": "Freitag"
};

// Sortiert alle Veranstaltungen nach Wochentagen
function sortByWeekday(vs) {
    const week = Object.fromEntries(
        Object.values(weekdayMap).map(day => [day, []]) // Create empty arrays for each day
    );

    if (Array.isArray(vs)) {
        vs.forEach(event => {
            const day = weekdayMap[event.date.weekday]; // Convert short notation to full name
            if (day) {
                week[day].push(event);
            }
        });
    };
    return week;
}

function Week(props) {
    // Memoize week calculation to avoid unnecessary recalculations
    const week = useMemo(() => sortByWeekday(props.data), [props.data]);
    console.log(week);

    return (
        <>
            {Object.entries(week).map(([day, events]) => (
                <WeekDay key={day} day={day} events={events} />
            ))}
        </>
    );
}

export default Week;
