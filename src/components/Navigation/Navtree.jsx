import React from 'react'
import Navelement from './Navelement'
import VSData from '../../data/Veranstaltungsdaten'


//Actual Navigation root component


const Navtree = ({ id}) => {
  const navStructure = VSData.find(item => item.id === id)?.subPages || [];
  return (
    <div>
      Navtree exists
      {navStructure.map((item, index) => (
        <Navelement key={index} {...item} />
      ))}
    </div>
  );
};

export default Navtree