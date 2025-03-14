import './Semester.css';
import '../../index.css';
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

/*Ein Semester aus dem Semesterüberblick. Kann ausgeklappt werden 
um eine Auflistung der Veranstaltungen anzuzeigen*/

function Semester({ name, events }) {
  // collapsible behavior
  const [isExpanded, setExpanded] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState('0px');

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isExpanded ? `${contentRef.current.scrollHeight}px` : '0px');
    }
  }, [isExpanded]);

  return (
    <>
      <div className='semesterContainer'>
        <div
          className={isExpanded ? 'collapsibleHeadActive' : 'collapsibleHead'}
          onClick={() => setExpanded(!isExpanded)}
        >
          <h5>{name}</h5>
        </div>
        <div ref={contentRef} className='collapsibleContent' style={{ maxHeight: height }}>
          <ul>
            {
              // Erzeuge ein Listenelement für jede Veranstaltung
              events.map((element) => (
                <li key={element.id}>
                  <Link to={`/veranstaltung/${element.id}`}>{element.title}</Link>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </>
  );
}

export default Semester;
