import Lottie from "lottie-react"
import { PageNotFoundContainer, HomeButton } from "./PageNotFound.style"
import PageNotFoundImage from "../../assets/images/PageNotFound/404-error-lottie.json"
import { ThemeProvider } from "styled-components"
import { responsiveTheme } from "../../utils/style-constants"

const PageNotFound = () => {
  return (
    <ThemeProvider theme={responsiveTheme}>
      <PageNotFoundContainer className="container">
          <div className="background-image">
              <div className="error-content">
                  <h1>Go Home,</h1>
                  <h1>You're Drunk!</h1>

                  <HomeButton className="home-button" to="/">Back To Home</HomeButton>
              </div>

              <div className="error-404">
                  <Lottie animationData={PageNotFoundImage} loop={true} />
              </div>
          </div>
      </PageNotFoundContainer>
    </ThemeProvider>
  )
}

export default PageNotFound