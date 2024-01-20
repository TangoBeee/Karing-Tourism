import Hero from "../../components/Hero/Hero"
import { HomeContainer } from "./Home.style"
import Service from "../../components/Service/Service";
import Activity from "../../components/HomeActivity/HomeActivity";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import ScrollToTop from "../../utils/ScrollToTop";

const Home = () => {

  return (
    <HomeContainer className="container">
      
      <ScrollToTop />
      
      <Hero />

      <Service />

      <Activity />

      <NewsLetter />
    </HomeContainer>
  )
}

export default Home