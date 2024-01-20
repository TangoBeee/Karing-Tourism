import { FooterContainer } from "./Footer.style"
import { Link } from "react-router-dom"
import Logo from "../../assets/images/small-logo.jpg"
import { ThemeProvider } from "styled-components"
import { responsiveTheme } from "../../utils/style-constants"

const Footer = () => {
  return (
    <ThemeProvider theme={ responsiveTheme }>
        <FooterContainer className="container">
            <div className="branding">
                <div className="logo-wrapper">
                    <img className="logo" src={Logo} alt="logo" />
                    <p>Karing Tourism</p>
                </div>

                <div className="branding-content">
                    <p>Copyright &copy; {new Date().getFullYear()} </p>
                    <p>All Rights Reserved.</p>
                </div>
            </div>

            <div className="footer-links-container">
                <div className="company-container footer-section">
                    <h3>Company</h3>

                    <ul>
                        <li>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        
                        <li>
                            <Link to="/About">
                                About
                            </Link>
                        </li>
                        
                        <li>
                            <Link to="/privacy-policy">
                                Privacy policy
                            </Link>
                        </li>

                        <li>
                            <Link to="/terms-of-service">
                                Terms of service
                            </Link>
                        </li>
                    </ul>
                </div>


                <div className="service-container footer-section">
                    <h3>Activities</h3>

                    <ul>
                        <li>
                            <Link to="/">
                                Desert Safari
                            </Link>
                        </li>
                        
                        <li>
                            <Link to="/">
                                Horse Riding
                            </Link>
                        </li>

                        <li>
                            <Link to="/activities">
                                See More...
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="social-container footer-section">
                    <h3>Social Media</h3>

                    <ul>
                        <li>
                            <a target="_blank" href="https://twitter.com/karnatakaworld">Twitter</a>
                        </li>
                        
                        <li>
                            <a target="_blank" href="https://www.linkedin.com/company/karing-rka-tousim-llc/">LinkedIn</a>
                        </li>
                        
                        <li>
                            <a target="_blank" href="https://www.tiktok.com/@karingrkatourism">TikTok</a>
                        </li>

                        <li>
                            <a target="_blank" href="https://www.instagram.com/karingrkatourism/">Instagram</a>
                        </li>
                    </ul>
                </div>

                {/* <div className="contact-container footer-section">
                    <h3>Contact</h3>

                    <ul>
                        <li>
                            <a target="_blank" href="https://maps.app.goo.gl/1QRjALu1SpmNcRpQ7">Dubai, United Arab Emirates</a>
                        </li>
                        
                        <li>
                            <a href="mailto:info@karingrkatourism.com">info@karingrkatourism.com</a>
                        </li>
                        
                        <li>
                            <a href="tel:+971507936750">+971 507936750</a>
                        </li>
                    </ul>
                </div> */}
            </div>
        </FooterContainer>
    </ThemeProvider>
  )
}

export default Footer