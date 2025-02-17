import React from 'react';
import VSData from '../../data/Veranstaltungsdaten';

const Navelement = ({ title, subPages }) => {
  return (
    <div>
    <button>to {title}</button>
      {subPages && (
        <div style={{ paddingLeft: '20px' }}>
          {subPages.map((subPage, index) => (
            <Navelement key={index} {...subPage} />
          ) )}
        </div>
      )}
    </div>
  );
};

export default Navelement;