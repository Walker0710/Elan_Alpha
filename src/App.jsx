import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Events from './pages/Events/Events.jsx';
import Workshops from './pages/Workshops/Workshops.jsx';
import Accomodation from './pages/Accomodation/Accomodation.jsx';
import Merch from './pages/Merch/Merch.jsx';
import Team from './pages/Team/Team.jsx';
import Sponsors from './pages/Sponsors/Sponsors.jsx';
import Competitions from './pages/Competitions/Competitions.jsx';
import Map from './pages/Map/Map.jsx';

import CultiCompetitions from './pages/CultiCompetitions/CultiCompetitions.jsx';
import TechyCompetitions from './pages/TechyCompetitions/TechyCompetitions.jsx';

import ComingSoon from './pages/ComingSoon/ComingSoon.jsx';


import NavBar from './components/NavBar/NavBar.jsx';
import Footer from './components/Footer/Footer.jsx';
import ReactLenis from 'lenis/react';

import React, { useEffect } from "react";

function App() {

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
        <Routes>
          <Route exact path='/' element={
            <>
              <NavBar/>
              <Home/>
              <Footer/>
            </>
          }/>
          <Route exact path='/events' element={
            <>
              <NavBar/>
              <Events/>
              <Footer/>
            </>
          }/>
          <Route exact path='/culti-competitions' element={
            <>
              <NavBar/>
              <CultiCompetitions/>
              <Footer/>
            </>
          }/>
          <Route exact path='/techy-competitions' element={
            <>
              <NavBar/>
              <TechyCompetitions/>
              <Footer/>
            </>
          }/>
          <Route exact path='/workshops' element={
            <>
              <NavBar/>
              <Workshops/>
              <Footer/>
              
            </>
          }/>
          <Route exact path='/accomodation' element={
            <>
              <NavBar/>
              <Accomodation/>
              <Footer/>
            </>
          }/>
          <Route exact path='/merch' element={
            <>
              <NavBar/>
              <Merch/>
              <Footer/>
            </>
          }/>
          <Route exact path='/team' element={
            <>
              <NavBar/>
              <Team/>
              <Footer/>
            </>
          }/>
          <Route exact path='/sponsors' element={
            <>
              <NavBar/>
              <Sponsors/>
              <Footer/>
            </>
          }/>
          <Route exact path='/competitions' element={
            <>
              <NavBar/>
              <Competitions/>
              <Footer/>
            </>
          }/>
          <Route exact path='/map' element={
            <>
              <NavBar/>
              <Map/>
              <Footer/>
            </>
          }/>

          <Route exact path='/comingsoon' element={
            <>
              <NavBar/>
              <ComingSoon/>
              <Footer/>
            </>
          }/>
        </Routes>
      </BrowserRouter>
    </ReactLenis>

  );
}

export default App;
