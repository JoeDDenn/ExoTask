import './Home.css'; 
import Hero from "./HomeSections/Hero/Hero";
import HomeHeader from "./HomeSections/HomeHeader/HomeHeader";

const Home = () => {
  return (
    <div className='home container-fluid'>
      <HomeHeader />
      <Hero />
      
    
    </div>
  )
}

export default Home
