import { FaHatCowboy, FaBed, FaPaperPlane } from "react-icons/fa6";
import { ServiceContainer } from "./Service.style"
import { responsiveTheme } from "../../utils/style-constants";
import { ThemeProvider } from "styled-components";

const Service = () => {
  return (
    <ThemeProvider theme={ responsiveTheme }>
        <ServiceContainer>
            <div className="service-heading-container">
                <h6>Our Service</h6>
            </div>

            <div className="services-wrapper">
                <div className="service-item item1">
                    <FaHatCowboy color="lightgreen" size={40} className="service-icon" />

                    <div className="service-content">
                        <h4>Experienced guide</h4>
                        <p>With an experienced guide, your trip will be much easier.</p>
                    </div>
                </div>

                <div className="service-item item2">
                    <FaPaperPlane color="skyblue" size={40} className="service-icon" />
                    
                    <div className="service-content">
                        <h4>Easy trip booking</h4>
                        <p>Just by filling in a certain form, you can order without admin fees!</p>
                    </div>
                </div>

                <div className="service-item item3">
                    <FaBed color="orange" size={40} className="service-icon" />

                    <div className="service-content">
                        <h4>Best Place to Stay</h4>
                        <p>For Travel, we have collaborated with several well-known hotels.</p>
                    </div>
                </div>
            </div>
        </ServiceContainer>
    </ThemeProvider>
  )
}

export default Service