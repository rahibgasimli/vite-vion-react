// App.jsx
import React, { useState, useEffect } from "react";
import { Routes, Route, useParams, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { fetchPageData, fetchDetailData } from "./assets/utils/getData";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./assets/css/style.css";

import ListSection from "./components/modulesComponents/ListSection";
import ModelsSection from "./components/modulesComponents/ModelsSection";
import BannerSection from "./components/modulesComponents/BannerSection";
import CardsSection from "./components/modulesComponents/CardsSection";
import CounterSection from "./components/modulesComponents/CounterSection";
import FAQSection from "./components/modulesComponents/FAQSection";
import FeaturesSection from "./components/modulesComponents/FeaturesSection";
import NewsSection from "./components/modulesComponents/NewsSection";
import PartnersSection from "./components/modulesComponents/PartnersSection";
import ServicesSection from "./components/modulesComponents/ServicesSection";
import SlidersSection from "./components/modulesComponents/SlidersSection";
import Testimonials from "./components/modulesComponents/Testimonials";
import FullWidthImageSection from "./components/modulesComponents/FullWidthImageSection";
import NewsletterSection from "./components/modulesComponents/NewsletterSection";
import PromotionSection from "./components/modulesComponents/PromotionSection";
import FullWidthMultipleImagesSection from "./components/modulesComponents/FullWidthMultipleImagesSection";
import ContactSection from "./components/modulesComponents/ContactSection";
import FullWidthSection from "./components/modulesComponents/FullWidthSection";
import TextSection from "./components/modulesComponents/TextSection";

// DYNAMIC PAGE KOMPONENTİ - BU ƏSAS SƏHİFƏ KOMPONENTİDİR
const DynamicPage = () => {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { slug } = useParams();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  useEffect(() => {
    const loadPageData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchPageData(slug);
        console.log("AGAGAGAGAGG Data: ", data);
        setPageData(data);
      } catch (err) {
        console.error("Səhifə məlumatları alınarkən xəta:", err);
        setError("Səhifə tapılmadı");
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
        <a href="/" className="btn btn-primary">
          Ana səhifəyə qayıt
        </a>
      </div>
    );
  }

  return <PageRenderer pageData={pageData} />;
};

// PAGE RENDERER KOMPONENTİ
const PageRenderer = ({ pageData }) => {
  if (!pageData?.modules) return null;

  const moduleComponents = {
    "List Section": ListSection,
    "Models Section": ModelsSection,
    "Banner Section": BannerSection,
    "Cards Section": CardsSection,
    "Counter Section": CounterSection,
    "FAQ Section": FAQSection,
    "Features Section": FeaturesSection,
    "News Section": NewsSection,
    "Partners Section": PartnersSection,
    "Services Section": ServicesSection,
    "Slider Section": SlidersSection,
    "Testimonials Section": Testimonials,
    "Full-Width Image Section": FullWidthImageSection,
    Newsletter: NewsletterSection,
    Promotion: PromotionSection,
    "Full-Width Multiple Images Section": FullWidthMultipleImagesSection,
    Contact: ContactSection,
  };

  return (
    <>
      {pageData.modules.map((module, index) => {
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
            pageTitle={pageData.title}
            pageDescription={pageData.description}
            {...module}
          />
        );
      })}
    </>
  );
};

// DETAIL PAGE KOMPONENTİ
const DetailPage = ({ type }) => {
  const [detailData, setDetailData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    const loadDetailData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchDetailData(type, slug);
        setDetailData(data);
      } catch (err) {
        console.error(`${type} məlumatları alınarkən xəta:`, err);
        setError(`${type} tapılmadı`);
      } finally {
        setLoading(false);
      }
    };

    loadDetailData();
  }, [slug, type]);

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
        <h1>404 - {type} tapılmadı</h1>
        <p>{error}</p>
        <a href={`/${type}`} className="btn btn-primary">
          {type} səhifəsinə qayıt
        </a>
      </div>
    );
  }

  return <DetailRenderer detailData={detailData} type={type} />;
};

// DETAIL RENDERER KOMPONENTİ
const DetailRenderer = ({ detailData, type }) => {
  if (!detailData || !detailData.modules) {
    console.log("No modules found in detailData:", detailData);
    return null;
  }

  // Banner üçün məlumatları çıxarın
  const { title, image, description, published_at, date } = detailData;

  return (
    <>
      {/* BANNER - BÜTÜN DETAIL SƏHİFƏLƏRİ ÜÇÜN */}
      {title && (
        <section className="section-box">
          <div
            className="banner-hero banner-head-image"
            style={{
              background: image
                ? `url(https://vion.make.az/storage/${image})`
                : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            }}
          >
            <div className="container">
              <div className="text-center">
                {/* Tarix */}
                {(published_at || date) && (
                  <span className="tag-1 bg-6 color-green-900">
                    {new Date(published_at || date).toLocaleDateString("en-GB")}
                  </span>
                )}
                <h1 className="text-heading-1 color-white mt-30 text-center">
                  {title}
                </h1>
                {description && (
                  <p className="text-body-text color-white mt-20">
                    {description}
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* DİGƏR MODULLAR */}
      {detailData.modules.map((module, index) => {
        const moduleComponents = {
          "List Section": ListSection,
          "Models Section": ModelsSection,
          "Cards Section": CardsSection,
          "Counter Section": CounterSection,
          "FAQ Section": FAQSection,
          "Features Section": FeaturesSection,
          "News Section": NewsSection,
          "Partners Section": PartnersSection,
          "Services Section": ServicesSection,
          "Slider Section": SlidersSection,
          "Testimonials Section": Testimonials,
          "Full-Width Image Section": FullWidthImageSection,
          Newsletter: NewsletterSection,
          Promotion: PromotionSection,
          "Full-Width Multiple Images Section": FullWidthMultipleImagesSection,
          Contact: ContactSection,
          "Full-Width Text Section": FullWidthSection,
          Text: TextSection,
        };

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
            pageTitle={detailData.title}
            pageDescription={detailData.description}
            {...module}
          />
        );
      })}
    </>
  );
};

// ƏSAS APP KOMPONENTİ
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          {/* Dinamik səhifələr */}
          <Route path="/" element={<DynamicPage />} />
          <Route path="/:slug" element={<DynamicPage />} />

          {/* Detail səhifələr - API strukturuna uyğun */}
          <Route
            path="/services/:slug"
            element={<DetailPage type="services" />}
          />
          <Route
            path="/projects/:slug"
            element={<DetailPage type="project" />}
          />
          <Route path="/blogs/:slug" element={<DetailPage type="blogs" />} />
          <Route
            path="/industry/:slug"
            element={<DetailPage type="industry" />}
          />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
