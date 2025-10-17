// App.jsx
import React, { useState, useEffect } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { fetchPageData } from './assets/utils/getData';
import './assets/css/style.css'

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

const PageRenderer = ({ pageData }) => {
  if (!pageData?.modules) return null;

  console.log('Bütün modullar:', pageData.modules); 

  const moduleComponents = {
    'List Section': ListSection,
    'Models Section': ModelsSection,
    'Banner Section': BannerSection,
    'Cards Section': CardsSection,
    'Counter Section': CounterSection,
    'FAQ Section': FAQSection,
    'Features Section': FeaturesSection,
    'News Section': NewsSection,
    'Partners Section': PartnersSection,
    'Services Section': ServicesSection,
    'Slider Section': SlidersSection,
    'Testimonials Section': Testimonials,
  };

  return (
    <>
      {pageData.modules.map((module, index) => {
        console.log(`Modul ${index}:`, module.module_type, module.content); // Hər modul üçün
        const Component = moduleComponents[module.module_type];
        if (!Component) {
          console.warn(`Naməlum modul: ${module.module_type}`);
          return null;
        }

        return (
          <Component
            key={module.id || index}
            data={module.data}
            content={module.content}
            {...module}
          />
        );
      })}
    </>
  );
};

const DynamicPage = () => {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    const loadPageData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchPageData(slug);
        setPageData(data);
      } catch (err) {
        console.error('Səhifə məlumatları alınarkən xəta:', err);
        setError('Səhifə tapılmadı');
      } finally {
        setLoading(false);
      }
    };

    loadPageData();
  }, [slug]);

  if (loading) {
    return (
      <div className="container text-center py-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Yüklənir...</span>
        </div>
        <p className="mt-2">Yüklənir...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container text-center py-5">
        <h1>404 - Səhifə tapılmadı</h1>
        <p>{error}</p>
        <a href="/" className="btn btn-primary">Ana səhifəyə qayıt</a>
      </div>
    );
  }

  return <PageRenderer pageData={pageData} />;
};

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<DynamicPage />} />
          <Route path="/:slug" element={<DynamicPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;