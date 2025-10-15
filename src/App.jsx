import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import '../src/assets/css/style.css'

// Komponentləri import edirik
import ListSection from './components/modulesComponents/ListSection';
import ModelsSection from './components/modulesComponents/ModelsSection';
import BannerSection from './components/modulesComponents/BannerSection';
import CardsSection from './components/modulesComponents/CardsSection';
import CounterSection from './components/modulesComponents/CounterSection';
import FAQSection from './components/modulesComponents/FAQSection';
import FeaturesSection from './components/modulesComponents/FeaturesSection';
import NewsSection from './components/modulesComponents/NewsSection';
import PartnersSection from './components/modulesComponents/PartnersSection';
import ServicesSection from './components/modulesComponents/ServicesSection';
import SlidersSection from './components/modulesComponents/SlidersSection';
import Testimonials from './components/modulesComponents/Testimonials';
import { fetchData } from './assets/js/getData';

// Səhifə komponenti
const Page = ({ pageData }) => {
  if (!pageData || !pageData.modules) return null;

  return (
    <div>
      {pageData.modules.map((module, index) => {
        // Module type-a görə uyğun komponenti seçirik
        switch (module.module_type) {
          case 'List Section':
            return (
              <ListSection 
                key={module.id || index}
                data={module.content}
              />
            );
          
          case 'Models Section':
            return (
              <ModelsSection 
                key={module.id || index}
                data={module.data}
                content={module.content}
              />
            );
          
          case 'Banner Section':
            return (
              <BannerSection 
                key={module.id || index}
                data={module.content}
              />
            );
          
          case 'Cards Section':
            return (
              <CardsSection 
                key={module.id || index}
                data={module.content}
              />
            );
          
          case 'Counter Section':
            return (
              <CounterSection 
                key={module.id || index}
                data={module.content}
              />
            );
          
          case 'FAC Section':
            return (
              <FAQSection 
                key={module.id || index}
                data={module.content}
              />
            );
          
          case 'Features Section':
            return (
              <FeaturesSection 
                key={module.id || index}
                data={module.content}
              />
            );
          
          case 'News Section':
            return (
              <NewsSection 
                key={module.id || index}
                data={module.data || module.content}
              />
            );
          
          case 'Partners Section':
            return (
              <PartnersSection 
                key={module.id || index}
                data={module.content}
              />
            );
          
          case 'Services Section':
            return (
              <ServicesSection 
                key={module.id || index}
                data={module.content}
              />
            );
          
          case 'Sliders Section':
            return (
              <SlidersSection 
                key={module.id || index}
                data={module.content}
              />
            );
          
          case 'Testimonials':
            return (
              <Testimonials 
                key={module.id || index}
                data={module.content}
              />
            );
          
          default:
            console.warn(`Naməlum modul tipi: ${module.module_type}`);
            return null;
        }
      })}
    </div>
  );
};

// Dinamik səhifə route-u
const DynamicPage = () => {
  const [pageData, setPageData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    if (slug) {
      // API-dən səhifə məlumatlarını alırıq
      fetchData(`en/pages/${slug}`).then((data) => {
        setPageData(data);
      }).catch(error => {
        console.error('Səhifə məlumatları alınarkən xəta:', error);
      });
    }
  }, [slug]);

  if (!pageData) {
    return <div>Yüklənir...</div>;
  }

  return <Page pageData={pageData} />;
};

// Əsas App komponenti
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            {/* Ana səhifə */}
            <Route path="/" element={<HomePage />} />
            
            {/* Dinamik səhifələr */}
            <Route path="/:slug" element={<DynamicPage />} />
            
            {/* 404 səhifəsi */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

// Ana səhifə komponenti (nümunə)
const HomePage = () => {
  const [homeData, setHomeData] = useState(null);

  useEffect(() => {
    fetchData("en/pages/home").then((data) => {
      setHomeData(data);
    });
  }, []);

  if (!homeData) return <div>Yüklənir...</div>;

  return <Page pageData={homeData} />;
};

// 404 səhifəsi
const NotFound = () => {
  return (
    <div className="container text-center py-5">
      <h1>404 - Səhifə tapılmadı</h1>
      <p>Axtardığınız səhifə mövcud deyil.</p>
    </div>
  );
};

export default App;