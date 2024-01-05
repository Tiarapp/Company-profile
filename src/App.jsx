import { Routes, Route } from "react-router-dom"

import NavbarComponent from "./components/NavbarComponent"
// import FooterComponent from "./components/FooterComponent"

import HomePage from "./pages/HomePage"
import ClassPage from "./pages/ClassPage"
import FaqPage from "./pages/FaqPage"
import TestimonialPage from "./pages/TestimonialPage"
import TermConditionPage from "./pages/TermConditionPage"

function App() {
  return <div>
    <NavbarComponent />
    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/class" Component={ClassPage} />
      <Route path="/faq" Component={FaqPage} />
      <Route path="/testimonial" Component={TestimonialPage} />
      <Route path="/term" Component={TermConditionPage} />
    </Routes>
    {/* <FooterComponent /> */}
  </div>
}

export default App