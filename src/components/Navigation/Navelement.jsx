import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './Navelement.module.css';

const Navelement = ({ id, title, subPages }) => {

const { id: currentId } = useParams();

  return (
    <div>
      <Link to={`/veranstaltung/${id}`}>
        <button className={styles.button}>{title}</button>
      </Link>
      {subPages && (
        <div style={{ paddingLeft: '20px' }}>
          {subPages.map((subPage, index) => (
            <Navelement key={index} {...subPage} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Navelement;