import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

// Vendor JS 
import '../src/assets/js/vendors/jquery-ui.js'
import '../src/assets/js/vendors/bootstrap.bundle.min.js';
// import '../src/assets/js/all.js';
// import 'swiper/swiper-bundle.min.js';
// import 'slick-carousel/slick/slick.js';
// import 'isotope-layout';
// import 'nouislider/dist/nouislider.min.js';



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
