import React from 'react'
import Sidebar from '../Navigation/Sidebar'
import Header from '../Header'
import Content from '../Content'
import Footer from '../Footer'

/*
  * SubP is the subpage of the application.
  * The Component is mainly used for routing
*/

const SubP = () => {

  //Some inline styling for the layout and flexing to know bad css practice ;)
  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'right',
  };
  const contentStyle = {
    flex: '1',
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
      <Footer />
    </>
  );
}

export default SubP