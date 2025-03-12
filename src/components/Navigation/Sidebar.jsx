import React, { useState } from 'react';
import Navtree from './Navtree';
import { useParams } from 'react-router-dom';
import styles from './Sidebar.module.css';

//Stylable Container for actual navigation

const Sidebar = () => {
  const { id } = useParams();
  const mainId = id.slice(0, 3);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <Navtree id={mainId} />
      </div>
      <button className={`${styles.toggleButton} ${isOpen ? styles.open : ''}`} onClick={toggleSidebar}>
        ☰
      </button>
    </>
  );
};

export default Sidebar;