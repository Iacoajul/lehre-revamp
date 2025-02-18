import { useMemo } from 'react';
import '../../index.css';
import './Week.css'
import WeekDay from './WeekDay';
import {groupByWeekday} from '../../data/util'

//Listet alle Wochentage auf
function Week(props) {
    // Memoize week calculation to avoid unnecessary recalculations
    const week = useMemo(() => groupByWeekday(props.events), [props.events]);
    console.log(week);

    return (
        <>
            {Object.entries(week).map(([day, events]) => (
                <WeekDay key={day} day={day} events={events} startActive={day === "Montag"}/>
            ))}
        </>
    );
}

export default Week;
