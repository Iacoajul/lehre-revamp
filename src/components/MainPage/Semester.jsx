import './Semester.css';
import '../../index.css';
import React, { useState, useRef, useEffect } from 'react';

function Semester(props) {

    //collapsible behavior
    const [isExpanded, setExpanded] = useState(false);
    const contentRef = useRef(null);
    const [height, setHeight] = useState('0px');

    useEffect(() => {
        if (contentRef.current) {
            setHeight(isExpanded ? `${contentRef.current.scrollHeight}px` : '0px');
        }
    }, [isExpanded]);

    //props management


    return (
        <>
            <div className='semesterContainer'>
                <div
                    className={isExpanded ? 'collapsibleHeadActive' : 'collapsibleHead'}
                    onClick={() => setExpanded(!isExpanded)}
                >
                    <h5>{props.Semester}</h5>
                </div>
                <div ref={contentRef} className='collapsibleContent' style={{maxHeight: height,}}>
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
