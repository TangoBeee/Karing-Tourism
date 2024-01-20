import { ThemeProvider } from "styled-components"
import PrimaryButton from "../Buttons/PrimaryButton"
import { NewsLetterContainer } from "./NewsLetter.style"
import { responsiveTheme } from "../../utils/style-constants"

const NewsLetter = () => {

  const newsLetterSubmission = (event) => {
    event.preventDefault()
    console.log(event)
  }

  return (
    <ThemeProvider theme={ responsiveTheme }>
      <NewsLetterContainer>
          <div className="newsletter-container">
              <div className="newsletter-img"></div>

              <div className="newsletter-content">
                  <h1>Get special offers, and more from Traveler</h1>
                  <p>Subscribe to see secret deals prices drop the moment you sign up!</p>

                  <form onSubmit={newsLetterSubmission} className="form-wrapper">
                      <input type="email" name="nlemail" id="nlemail" placeholder="Email" required />
                      <PrimaryButton buttonText={"Subscribe"} className={"subscribe-btn"} />
                  </form>
              </div>
          </div>
      </NewsLetterContainer>
    </ThemeProvider>
  )
}

export default NewsLetter