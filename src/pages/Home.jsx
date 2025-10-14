import React, { useEffect, useState } from 'react'

import CounterSection from '../components/modulesComponents/CounterSection'
import SlidersSection from '../components/modulesComponents/SlidersSection'
import CardsSection from '../components/modulesComponents/CardsSection'
import ServicesSection from '../components/modulesComponents/ServicesSection'
import PartnersSection from '../components/modulesComponents/PartnersSection'
import Testimonials from '../components/modulesComponents/TestiMonials'
import NewsSection from '../components/modulesComponents/NewsSection'
import { fetchData } from '../assets/js/getData'



const Home = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData("en/pages/main").then((data)=>{
          setData(data);
        })
      },[]);

      console.log(data)

      const slidersModule = data.modules?.find(module =>
        module.content?.slides !== undefined
      );

      
      const countersModule = data.modules?.find(module =>
        module.content?.counters !== undefined
      );
    

    return (
        <main className="main">
            <SlidersSection slidesData={slidersModule?.content?.slides}/>
            <CounterSection countersData={countersModule?.content?.counters}/>

            <CardsSection />
            <ServicesSection />


            <PartnersSection />

            <Testimonials />

            <NewsSection />
        </main>
    )
}

export default Home 