import './assets/css/vendors/bootstrap.min.css';
import './assets/css/style.css';
import Footer from './components/Footer'
import Header from './components/Header'
import RouterConfig from './config/RouterConfig'

function App() {

  return (
    <div className="">
    <Header />
    <RouterConfig />
    <Footer />
  </div>
  )
}

export default App
