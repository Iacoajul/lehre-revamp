import React from 'react';
import { Link} from 'react-router-dom';
import styles from './Navelement.module.css';

/*
  * Navelement is a recursive component that renders a single navigation element.
  * If the element has subPages, it renders them as well.
  * Navelemt is the smallest unit of the navigation tree and handles the individual links
*/

const Navelement = ({ id, title, subPages }) => {
 
  const subData = subPages || [];  //saving subpages locally to avoid errors

  return (
        <div className={styles.navCell}> {/*Container for the navigation elements; including individual subpages*/}
          <Link to={`/veranstaltung/${id}`} className={styles.navLink}>
            {title}
          </Link> {/*Link to the individual pages*/}
          {subData.length > 0 && ( //if there are subpages, render them
            <><span className={styles.expandIcon}> {/*Icon to indicate that there are subpages*/}
              ▶
            </span>
        <div className={styles.subPages}> {/*Container for the subpages*/}
          {subData.map((subPage, index) => ( //mapping over the subpages to render them
            <Navelement key={index} {...subPage} /> //recursive call to render the subpages
          ))}
          </div></> //closing the conditional rendering
      )}
      </div>
 

  );
};

export default Navelement;