import PrimaryButton from "../../components/Buttons/PrimaryButton"
import { ContactContainer } from "./Contact.style"
import { MdEmail, MdLocationCity, MdPhone } from "react-icons/md";
import * as palette from "../../utils/style-constants"
import { ThemeProvider } from "styled-components";
import ScrollToTop from "../../utils/ScrollToTop";

const Contact = () => {

  const onFormSubmit = (event) => {
    event.preventDefault()
    console.log(event)
  }

  return (
    <ThemeProvider theme={ palette.responsiveTheme }>
      <ContactContainer className="container">
        
        <ScrollToTop />

        <div className="contact-form-container">
          <div className="form-container">
            <div className="form-content">
              <h1>Contact us!</h1>
              <p>For further information about our tours, or to make a booking, feel free to get in touch</p>
            </div>

            <form onSubmit={onFormSubmit}>
              <input type="text" name="uname" id="uname" placeholder="Full name" required />
              <input type="email" name="uemail" id="uemail" placeholder="Your email" required />
              <textarea name="umessage" id="umessage" cols="30" rows="10" placeholder="Message" required />

              <PrimaryButton buttonText="Submit" className="contact-btn" />
            </form>
          </div>

          <div className="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28883.685739499844!2d55.28167!3d25.187681!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f694895d099cf%3A0xd53cb96e55f451c0!2sRamee%20Dream%20Hotel%20Downtown!5e0!3m2!1sen!2sus!4v1703835905800!5m2!1sen!2sus" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>

        <div className="other-contact-info">
          <div className="contact-item">
            <MdLocationCity color={palette.PRIMARY_COLOR} size={64} className="contact-icon" />
            <div className="contact-info">
              <h6>Location:</h6>
              <a target="_blank" href="https://maps.app.goo.gl/1QRjALu1SpmNcRpQ7">Dubai, United Arab Emirates</a>
            </div>
          </div>

          <div className="contact-item">
            <MdEmail color={palette.PRIMARY_COLOR} size={64} className="contact-icon" />
            <div className="contact-info">
              <h6>Email:</h6>
              <a href="mailto:info@karingrkatourism.com">info@karingrkatourism.com</a>
            </div>
          </div>

          <div className="contact-item">
            <MdPhone color={palette.PRIMARY_COLOR} size={64} className="contact-icon" />
            <div className="contact-info">
              <h6>Phone:</h6>
              <a href="tel:+971507936750">(+971)507936750</a>
              </div>
          </div>
        </div>
      </ContactContainer>
    </ThemeProvider>
  )
}

export default Contact