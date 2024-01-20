import { GetStartedButton, HeroContainer } from "./Hero.style"
import BgVideo from "../../assets/images/home/hero/bg-video.webm"
import BgVideoPoster from "../../assets/images/home/hero/bg-video-poster.png"
import { useRef } from "react"
import { responsiveTheme } from "../../utils/style-constants"
import { ThemeProvider } from "styled-components"

const Hero = () => {
  const bgVideoRef = useRef(null);

  bgVideoRef.oncanplay = () => {
    bgVideoRef.play()
  }
  return (
    <ThemeProvider theme={ responsiveTheme }>
      <HeroContainer>
        <div className="hero-content-container">
          <div className="hero-content">
            <h1>Find The Best Place to Stress Release</h1>
            <p>A new way to relieve your stress by going on vacation! Find the trip you want then book it immediately!</p>  
          </div>

          <hr />

          <GetStartedButton to={"/activities"} className="get-start-btn">Get Started</GetStartedButton>
        </div>

        <div className="bg-video-container">
          <video ref={bgVideoRef} autoPlay loop muted preload="none" poster={BgVideoPoster}>
            <source src={BgVideo}/>
            Your browser does not support the video tag.
          </video>
        </div>
      </HeroContainer>
    </ThemeProvider>
  )
}

export default Hero