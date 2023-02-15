import './Home.css'; 
import Hero from "./HomeSections/Hero/Hero";
import HomeHeader from "./HomeSections/HomeHeader/HomeHeader";
import About_us from "./HomeSections/About-us/About_us";
import Contact_us from "./HomeSections/Contact_us/Contact_us";
import Footer from "./HomeSections/Footer/Footer";
import Service from "./HomeSections/Services/Service";


const Home = () => {
  return (
    <div className='home container-fluid'>
      <HomeHeader />
      <Hero />
      <About_us/>
      <Service/>
      <Contact_us/>
      <Footer/>
      
    </div>
  )
}

export default Home
