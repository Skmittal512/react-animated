import Navbar from './Components/Navbar'
import Home from './Components/Home'
import DashboardPreview from './Components/DashboardPreview'
import Analytics from './Components/Analytics'
import Feature from './Components/Feature'
import Distribution from './Components/Distribution'
import Footer from './Components/Footer'
import STTop from './Components/STTop'
import './sass/app.scss'

function App() {


  return (
    <div className='app'>
    <Navbar/>
    <Home/>
    <DashboardPreview/>
    <Analytics/>
    <Feature/>
    <Distribution/>
    <Footer/>
    <STTop/>
    </div>
  )
}

export default App
