import './MainPage.css';
import '../../index.css';
import VSBox from './VSBox';

// Ein Wochentag. Listet die Veranstaltungen auf, die an diesem Tag stattfinden.
function WeekDay({ day, events }) {
    return (
        <>
            <h3 className="IDH_purple">{day}</h3>
            {Array.isArray(events) && events.length > 0 ? (
                <div className="VSContainer">
                    {events.map((element) => (
                        <VSBox key={element.id} {...element} />
                    ))}
                </div>
            ) : (
                <p>Keine Veranstaltungen an diesem Tag</p>
            )}
        </>
    );
}

export default WeekDay;
