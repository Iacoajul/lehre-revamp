import React from 'react';
import Navelement from './Navelement';
import VSData from '../../data/Veranstaltungsdaten';
import { Link } from 'react-router-dom';
import styles from './Navtree.module.css';

const Navtree = ({ id }) => {
  const mainId = id.slice(0, 3);
  const navStructure = VSData.find(item => item.id === id)?.subPages || [];
  const title = VSData.find(item => item.id === id)?.title || '';

  return (
    <nav className={styles.Navtree}>
      <div className={styles.stickyHeader}>
        <Link to={`/veranstaltung/${id}`}><h4>{title}</h4></Link>
      </div>
      <div className={styles.elementContainer}>
      {navStructure.map((item, index) => (
        <Navelement key={index} {...item} />
      ))}
      </div>
    </nav>
  );
};

export default Navtree;