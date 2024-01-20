import "./App.css"
import { Route, Routes } from "react-router-dom"
import Navigation from "./components/Navigation/Navigation"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Activity from "./pages/Activity/Activities"
import Contact from "./pages/Contact/Contact"
import Footer from "./components/Footer/Footer"
import PageNotFound from "./components/PageNotFound/PageNotFound"
import WhatsappIcon from "./assets/images/global/whatsapp-icon.svg";
import { useEffect, useState } from "react"
import getCurrency from "./utils/get-current-currency"
import { DEFAULT_CURRENCY } from "./utils/api-constants"

const App = () => {
  const [currency, setCurrency] = useState(DEFAULT_CURRENCY)

  useEffect(() => {
    getCurrency(setCurrency)
  }, [])

  return (
    <>
      <Navigation />

      <hr className="navSeprator" />

      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/home" element={ <Home /> } />
        <Route path="/About" element={ <About /> } />
        <Route path="/Activities" element={ <Activity /> } />
        <Route path="/Contact" element={ <Contact /> } />
        <Route path="*" element={ <PageNotFound /> } />
      </Routes>

      <a className="whatsapp-icon" target="_blank" href="https://api.whatsapp.com/send/?phone=971507936750&text=Hi%2C+I%27m+interested+in+Karing+RKA+Tourism.&type=phone_number&app_absent=0">
        <img src={WhatsappIcon} alt="whatsapp-icon" />
      </a>

      <Footer />
    </>
  )
}

export default App