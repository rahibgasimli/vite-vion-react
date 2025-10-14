import React from 'react'
import { Route, Routes } from 'react-router-dom'

// PAGES 
import Home from '../pages/Home';
import About from '../pages/About';
import Team from '../pages/Team';
import Career from '../pages/Career';
import Services from '../pages/Services';
import ServicesDetail from '../pages/ServicesDetail';
import Industries from '../pages/Industries';
import OurWork from '../pages/OurWork';
import OurWorkDetail from '../pages/OurWorkDetail';
import News from '../pages/News';
import NewsDetail from '../pages/NewsDetail';
import Contacts from '../pages/Contacts';

const RouterConfig = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/team' element={<Team />} />
        <Route path='/career' element={<Career />} />
        <Route path='/services' element={<Services />} />
        <Route path='/services-detail/:slug' element={<ServicesDetail />} />
        <Route path='/industries' element={<Industries />} />
        <Route path='/our-work' element={<OurWork />} />
        <Route path='/our-work-detail/:slug' element={<OurWorkDetail />} />
        <Route path='/news' element={<News />} />
        <Route path='/news-detail/:slug' element={<NewsDetail />} />
        <Route path='/contacts' element={<Contacts />} />
    </Routes>
  )
}

export default RouterConfig