import React from 'react'
import Navelement from './Navelement'
import VSData from '../../data/Veranstaltungsdaten'
import { Link } from 'react-router-dom'
import styles from './Navtree.module.css'

//Actual Navigation root component


const Navtree = ({ id}) => {
  const navStructure = VSData.find(item => item.id === id)?.subPages || [];
  const title = VSData.find(item => item.id === id)?.title || '';
  return (
    <nav className={styles.Navtree}>
      <Link to={`/veranstaltung/${id}`}><h4>{title}</h4></Link>
      <ul>
      {navStructure.map((item, index) => (
      <li> <Navelement key={index} {...item} /> </li>
      ))}
      </ul>
    </nav>
  );
};

export default Navtree