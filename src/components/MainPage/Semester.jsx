import './Semester.css';
import '../../index.css';
import React, { useState, useRef, useEffect } from 'react';

function Semester({name, events}) {

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
                    <h5>{name}</h5>
                </div>
                <div ref={contentRef} className='collapsibleContent' style={{maxHeight: height,}}>
                    <ul>
                        {
                            events.map((element) => (
                                <li><a href='vslink'>{element.title}</a></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Semester;
