import './VSBox.css'
import '../../index.css'

//Box mit Daten zur Veranstaltung auf der Startseite. Leitet zur Hauptseite der Veranstaltung weiter.
function VSBox() {
    return(
        <>
            <div className="VSBox">
                <h4>IT-Zertifikat der Phil. Fak.: Advanced IT Basics</h4>
                <div className='dates'>
                    <p>10:00 - 11:30</p>
                    <p>103 S93</p>
                    <p className='teacher'>Laura Pascale Berg</p>
                </div>
            </div>
        </>
    );
}

export default VSBox;