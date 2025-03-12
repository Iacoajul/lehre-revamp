import React from 'react'
import Sidebar from '../Navigation/Sidebar'
import Header from '../Header'
import Content from '../Content'

const SubP = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'right',
  };

  const contentStyle = {
    flex: '1',
  
    // maxWidth: '80%',
  };

  const sidebarStyle = {
    
    width: '20%',
    minWidth: '15%',
  };

  return (
    <>
      <Header />
      <div style={containerStyle}>
        <div style={sidebarStyle}>
          <Sidebar />
        </div>
        <div style={contentStyle}>
          <Content />
        </div>
      </div>
    </>
  );
}

export default SubP