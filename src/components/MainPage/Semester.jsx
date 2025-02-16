import './Semester.css'
import '../../index.css'

function Semester() {

    return(
        <>
            <div className='semesterContainer'>
                <div className='collapsibleHead IDH_purple'>
                    <h5>Sommersemester 2024</h5>
                </div>
                <div className='collapsibleContent'>
                    <ul>
                        <li><a href='link zur vs hier einfügen'>IT-Zertifikat der Phil. Fak.: Advanced IT Basics</a></li>
                        <li><a href='link zur vs hier einfügen'>IT-Zertifikat der Phil.Fak.: Advanced Web Basics</a></li>
                        <li><a href='link zur vs hier einfügen'>IT-Zertifikat der Phil. Fak.: Tools & Methods in DH</a></li>
                        <li><a href='link zur vs hier einfügen'>IT-Zertifikat der Phil.Fak: Digital Objects</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Semester;