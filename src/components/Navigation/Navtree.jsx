import React from 'react'
import Navelement from './Navelement'
import VSData from '../../data/Veranstaltungsdaten'


//Actual Navigation root component


const Navtree = ({ title }) => {
  const navStructure = VSData.find(item => item.title === title)?.subPages || [];
  return (
    <div>
      {navStructure.map((item, index) => (
        <Navelement key={index} {...item} />
      ))}
    </div>
  );
};

export default Navtree