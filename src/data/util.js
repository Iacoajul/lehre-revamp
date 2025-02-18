/*Verschiedene hilfreiche Funktionen für den Umgang mit den Veranstaltungsdaten*/


/*Die Funktion erhält den Namen des aktuellen Semesters und eine Sammlung an Veranstaltungen und gruppiert sie nach Semestern.
Es werden zwei Objekte zurückgegeben: eins für das aktuelle semester und ein Archiv mit vergangenen Semestern */

export function groupBySemester(events, currentSemester) {

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

/*Erstellt ein Objekt in welchem jeder Wochentag einem leeren Array zugeordnet wird.
Anschließend wird jedes Array mit Veranstaltungen gefüllt, die an diesem Wochentag stattfinden */

export function groupByWeekday(vs) {

    //Diese Map verknüpft die ausgeschriebenen Wochentag mit ihren Abkürzungen
    const weekdayMap = {
        "Mo.": "Montag",
        "Di.": "Dienstag",
        "Mi.": "Mittwoch",
        "Do.": "Donnerstag",
        "Fr.": "Freitag"
    };

    //erstelle ein leeres Array für jeden Wochentag
    const week = Object.fromEntries(
        Object.values(weekdayMap).map(day => [day, []])
    );

    //iteriere durch jede Veranstaltung und sortiere sie in den entsprechenden Wochentag
    if (Array.isArray(vs)) {
        vs.forEach(event => {
            const day = weekdayMap[event.date.weekday];
            if (day) {
                week[day].push(event);
            }
        });
    };
    return week;
}