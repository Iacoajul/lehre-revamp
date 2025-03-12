import React from 'react'
import Sidebar from '../Navigation/Sidebar'
import Header from '../Header'
import Content from '../Content'
import Footer from '../Footer'

const SubP = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
  };

  const contentStyle = {
    flex: 1,
    minWidth: '80%',
  };

  const sidebarStyle = {
    
    width: '220px',
    minWidth: '15%',
  };

  return (
    <>
      <Header />
      <div style={containerStyle}>
        <div style={contentStyle}>
          <Content />
        </div>
        <div style={sidebarStyle}>
          <Sidebar />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SubP