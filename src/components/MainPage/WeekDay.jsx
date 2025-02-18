import './MainPage.css';
import '../../index.css';
import './Week.css'
import VSBox from './VSBox';
import React, { useState, useRef, useEffect } from 'react';
import Arrow from '../../assets/icons/collapsible_arrow.svg'

// Ein Wochentag. Listet die Veranstaltungen des aktuellen Semesters auf, die an diesem Tag stattfinden.
function WeekDay({ day, events, startActive }) {
    
    const [isExpanded, setExpanded] = useState(startActive);
    const contentRef = useRef(null);
    const [height, setHeight] = useState('0px');

    useEffect(() => {
        if (contentRef.current) {
            setHeight(isExpanded ? `${contentRef.current.scrollHeight + 15}px` : '0px');
        }
    }, [isExpanded]);

    return (
        <>
            <div className='weekDayHead' onClick={() => setExpanded(!isExpanded)}>
                <img className='arrow' src={Arrow} style={{ transform: `rotate(${isExpanded ? "90deg" : "0deg"})` }}  alt="Arrow Icon"/>
                <h3 className="dayOfWeek IDH_purple">{day}</h3>
            </div>
            <div ref={contentRef} className='VSContainer' style={{height: height}}>
            {Array.isArray(events) && events.length > 0 ? (
                    events.map((element) => (
                        <VSBox key={element.id} {...element} />
                    ))) : ( <p className='disclaimer'>Keine Veranstaltungen an diesem Tag</p>)}
            </div>
        </>
    );
}

export default WeekDay;
