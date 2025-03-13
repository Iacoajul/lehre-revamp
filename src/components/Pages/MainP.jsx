import React from 'react'
import Header from '../Header'
import MainPage from '../MainPage/MainPage'
import VSData from '../../data/Veranstaltungsdaten';
import Footer from '../Footer'

/*
  * MainP is the main page of the application.
  * The Component is only used for routing
*/
const MainP = () => {
  return (
    <>
        <Header />
        <MainPage />
        <Footer />
    </>
  )
}
export default MainP;