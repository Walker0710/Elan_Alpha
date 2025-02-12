import './App.css';
import {BrowserRouter, Route, Routes, useLocation} from 'react-router-dom';
import React, { useEffect } from "react";


import Home from './pages/Home/Home.jsx';
import Events from './pages/Events/Events.jsx';
import Workshops from './pages/Workshops/Workshops.jsx';
import Accommodation from './pages/Accommodation/Accommodation.jsx';
import Merch from './pages/Merch/Merch.jsx';
import Team from './pages/Team/Team.jsx';
import Sponsors from './pages/Sponsors/Sponsors.jsx';
import Competitions from './pages/Competitions/Competitions.jsx';
import Map from './pages/Map/Map.jsx';

import CultiCompetitions from './pages/CultiCompetitions/CultiCompetitions.jsx';
import TechyCompetitions from './pages/TechyCompetitions/TechyCompetitions.jsx';
import LitCompetitions from './pages/LitCompetitions/LitCompetitions.jsx';

import ComingSoon from './pages/ComingSoon/ComingSoon.jsx';

import NavBar from './components/NavBar/NavBar.jsx';
import Footer from './components/Footer/Footer.jsx';
import ReactLenis from 'lenis/react';


import FaviconSwitcher from './components/FaviconSwitcher/FaviconSwitcher.jsx';

function App() {

  const ScrollToTop = () => {
    const location = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname]);
  
    return null;
  };

  useEffect(() => {
    // Function to update the CSS variable
    const updateViewportWidth = () => {
      const viewportWidth = window.innerWidth; // Includes scrollbar
      const effectiveWidth = document.documentElement.clientWidth; // Excludes scrollbar
      document.documentElement.style.setProperty("--adaptive-vw", `${effectiveWidth}px`);
    };

    // Update on component mount
    updateViewportWidth();

    // Add resize event listener
    window.addEventListener("resize", updateViewportWidth);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", updateViewportWidth);
    };
  }, []);


  return (
    <ReactLenis root>
      <BrowserRouter>
        <ScrollToTop/>
          <FaviconSwitcher />
        <NavBar/>
        <Routes>
          <Route exact path='/' element={
            <>
              <Home/>
            </>
          }/>
          <Route exact path='/events' element={
            <>
              <Events/>
            </>
          }/>
          <Route exact path='/culti-competitions' element={
            <>
              <CultiCompetitions/>
            </>
          }/>
          <Route exact path='/techy-competitions' element={
            <>
              <TechyCompetitions/>
            </>
          }/>

          <Route exact path='/lit-competitions' element={
            <>
              <LitCompetitions/>
            </>
          }/>
          <Route exact path='/workshops' element={
            <>
              <Workshops/>
              
            </>
          }/>
          <Route exact path='/accommodation' element={
            <>
              <Accommodation/>
            </>
          }/>
          <Route exact path='/merch' element={
            <>
              <Merch/>
            </>
          }/>
          <Route exact path='/team' element={
            <>
              <Team/>
            </>
          }/>
          <Route exact path='/sponsors' element={
            <>
              <Sponsors/>
            </>
          }/>
          <Route exact path='/competitions' element={
            <>
              <Competitions/>
            </>
          }/>
          <Route exact path='/map' element={
            <>
              <Map/>
            </>
          }/>

          <Route exact path='/comingsoon' element={
            <>
              <ComingSoon/>
            </>
          }/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </ReactLenis>

  );
}

export default App;
