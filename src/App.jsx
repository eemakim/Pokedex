import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage/landingPage";

export default function App() {

  return (
    <>
      <BrowserRouter>
        <nav>
          <NavLink to='/' element={<LandingPage />}></NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<LandingPage />} />


        </Routes>

      </BrowserRouter>
    </>
  )
}
