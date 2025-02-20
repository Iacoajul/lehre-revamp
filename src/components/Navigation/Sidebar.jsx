import React from 'react'
import Navtree from './Navtree'
import {useParams} from 'react-router-dom'


import './Sidebar.css'

//Stylable Container for actual navigation

const Sidebar = () => {

const { id } = useParams();

  return (
    <>
    <div className='sticky'>
    
        <Navtree title="IT-Zertifikat der Phil. Fak.: Advanced IT Basics" id="001"></Navtree>
</div>
</>
  )
}

export default Sidebar