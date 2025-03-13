import React, { useState } from 'react';
import Navtree from './Navtree';
import { useParams } from 'react-router-dom';
import styles from './Sidebar.module.css';

//Stylable Container for actual navigation

const Sidebar = () => {
  const { id } = useParams(); // Get the ID from the URL
  const mainId = id.slice(0, 3); // Slice Id so that the subpages dont just render their own subpages but keep the whole seminar navigation

  const [isOpen, setIsOpen] = useState(false); // State for the sidebar hiding
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}> {/*Sidebar container*/}
        <Navtree id={mainId} /> {/*Render the navigation tree*/}
      </div>
      <button className={`${styles.toggleButton} ${isOpen ? styles.open : ''}`} onClick={toggleSidebar}> {/*Button to toggle the sidebar*/}
        ☰
      </button>
    </>
  );
};

export default Sidebar;