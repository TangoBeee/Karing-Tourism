import { ThemeProvider } from "styled-components"
import { AboutContainer } from "./About.style"
import { responsiveTheme } from "../../utils/style-constants"
import ScrollToTop from "../../utils/ScrollToTop"

const About = () => {
  return (
    <ThemeProvider theme={ responsiveTheme }>
      <AboutContainer className="container">
        
        <ScrollToTop />

        <div className="about-img"></div>

        <div className="about-content">
          <h1>About the company</h1>

          <p>Karing RKA Tourism LLC is a visionary company that seeks to revolutionize the tourism industry by going beyond traditional tour selling. At Karing RKA Tourism LLC, we have identified three pillars that define our values and what we prioritize the most: Karing, Karing about your pocket, and All about the experience of life.</p>

          <ol>
            <li>
              Redefined meaning of Caring - Karing:
              <p>We believe in redefining the concept of caring and have coined the term “Karing” to represent our unique approach. At Karing RKA Tourism LLC, caring goes beyond just meeting the basic needs of our customers. We strive to create memorable experiences and ensure that every aspect of our service exudes genuine care and attention.</p>
            </li>

            <li>
              Karing about your pocket:

              <p>We understand that luxury shouldn’t always come with a hefty price tag. Our focus is to provide the best possible luxury experiences while being mindful of your budget. At Karing RKA Tourism LLC, we carefully curate our offerings to ensure that you can enjoy a lavish experience without breaking the bank.</p>
            </li>

            <li>
              All about the experience of life:
              
              <p>Travel is not just about visiting new places; it’s about enriching your life with unforgettable experiences. We believe in creating journeys that go beyond the ordinary and leave a lasting impact. Whether it’s exploring cultural landmarks, indulging in thrilling adventures, or immersing yourself in local traditions, Karing RKA Tourism LLC is dedicated to crafting experiences that are truly transformative.</p>
            </li>
          </ol>

          <p>Our passion for doing things differently is evident in every aspect of our company. The co-founders and our entire team share the same vision, and together, we strive to make a difference. Interestingly, when we combine the names of our co-founders, it forms the word “Karing,” which symbolizes our ultimate goal – to care for our customers in every possible way</p>
          <p>As the fastest-growing company in the United Arab Emirates (UAE) and India, we are proud to be expanding our ventures to different cities and nations. No matter where you are coming from or where you are going, Karing RKA Tourism LLC has got you covered. From visa assistance and flight bookings to accommodations, sightseeing tours, and transfers, we are your one-stop destination to make your dream travel experience hassle-free.</p>
          <p>In Dubai, our presence is widespread, with outlets located in hotels and malls across the city. Wherever you go in Dubai, you can easily find us nearby, ready to cater to your travel needs.</p>
          <p>At Karing RKA Tourism LLC, we believe that our caring truly spells like “Karing.” It is our passion for doing things differently that sets us apart. Join us on this journey and let us take you on an extraordinary travel experience that will create memories to cherish for a lifetime.</p>
        </div>
      </AboutContainer>
    </ThemeProvider>
  )
}

export default About