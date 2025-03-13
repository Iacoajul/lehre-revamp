import React from 'react';
import Navelement from './Navelement';
import VSData from '../../data/Veranstaltungsdaten';
import { Link } from 'react-router-dom';
import styles from './Navtree.module.css';

/*
  * Navtree is the main navigation component.
  * It is the parent component of Navelement and handles the rendering of the navigation tree.
  * It also handles most "database" operations, such as finding the correct data for the current page.
*/

const Navtree = ({ id }) => {
  const navStructure = VSData.find(item => item.id === id)?.subPages || []; //find the correct navigation data for the current page
  const title = VSData.find(item => item.id === id)?.title || ''; //find the correct title for the current page

  return (
    <nav className={styles.Navtree}> {/*Container for the navigation tree*/}
      <div className={styles.stickyHeader}> {/*Sticky header for the navigation tree*/}
        <Link to={`/veranstaltung/${id}`}><h4>{title}</h4></Link> {/*Link to the main page*/}
      </div>
      <div className={styles.elementContainer}> {/*Container for the navigation elements*/}
      {navStructure.map((item, index) => ( //mapping over the navigation structure to render the elements
        <Navelement key={index} {...item} /> //rendering the individual navigation elements
      ))}
      </div>
    </nav>
  );
};

export default Navtree;