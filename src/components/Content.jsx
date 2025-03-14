import { Link, useParams } from 'react-router-dom';
import VSData from '../data/Veranstaltungsdaten';
import "./Content.css";
import React, { useState } from 'react'; // useState importieren



const Content = () => {
  const { id } = useParams();  // Holt die ID aus der URL
  const course = VSData.find(course => course.id === id); // Findet den richtigen Kurs

  const [isOpen, setIsOpen] = useState(false);

  if (!course) {
    return <div className='empty-content'> {/*Catch 404 and offer a way back to Main*/}

      <h1>Kein Inhalt gefunden</h1>
      <span>
      <Link to="/"><button>Zurück zur Startseite</button></Link>
      </span>
    

    </div>; // Falls keine Übereinstimmung, Fehlermeldung anzeigen
  }

  const toggleContent = () => setIsOpen(!isOpen);

  return (
    <div className="content-container">
      <h1>{course.title}</h1>
      <div className="course-info">
        <p>{course.semester}</p>
        <p>{course.teachers}</p>
        <p>{course.date.weekday} {course.date.time}</p>
        <p>Gebäude: {course.date.place}</p>
      </div>

      <div className={`course-topics ${isOpen ? 'open' : ''}`}>
        <h2>Kursinhalte im Überblick</h2>
        {course.content.topics.map((topic, index) => (
          <div key={index}>
            <h3>{topic.category}</h3>
            <ul>
              {topic.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="learning-goals">
        <h2>Was Sie in diesem Kurs lernen werden</h2>
        <ul>
          {course.content.learningGoals.map((goal, index) => (
            <li key={index}>{goal}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

  
export default Content;
