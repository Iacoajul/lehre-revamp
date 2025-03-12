import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './Navelement.module.css';

const Navelement = ({ id, title, subPages }) => {
  const { id: currentId } = useParams();
  const subData = subPages || [];

  console.log(`Rendering Navelement: ${title}, subPages:`, subData);

  return (
    <div className={styles.navContainer}>
      <div className={styles.navRow}>
        <div className={styles.navCell}>
          <Link to={`/veranstaltung/${id}`} className={styles.navLink}>
            {title}
          </Link>
          {subData.length > 0 && (
            <span className={styles.expandIcon}>
              ▶
            </span>
          )}
      {subData.length > 0 && (
        <div className={styles.subPages}>
          {subData.map((subPage, index) => (
            <Navelement key={index} {...subPage} />
          ))}
          </div>
      )}
      </div>
      </div>
    </div>
  );
};

export default Navelement;