import './MainPage.css'
import '../../index.css'
import VSBox from "./VSBox";

//Ein Wochentag. Listet die Veranstaltungen auf die an diesem Tag stattfinden.
function WeekDay() {
    return(
        <>
            <h3 className='IDH_purple'>Montag</h3>
            <div className='VSContainer'>
                <VSBox/>
                <VSBox/>
                <VSBox/>
                <VSBox/>
                <VSBox/>
                <VSBox/>
            </div>
        </>
    );
}

export default WeekDay;