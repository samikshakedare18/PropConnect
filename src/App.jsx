import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'
import './App.css'
import { BrowserRouter, Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import NavBar from './Components/NavBar'
import ShowProperty from './Components/ShowProperty'
import FavoriteProperties from './Components/FavoriteProperties'
import ProtectedRoute from './Components/ProtectedRoute'
import LogOut from './Pages/LogOut'
import Footer from './Components/Footer'
import Payment from './Components/Payment'
import Success from './Components/Success'


function App() {

  const [favorite,setFavorite] = useState([]);

  const addToFavorite = (property) => {
    setFavorite([...favorite, property]);
  }
  // localStorage.setItem("isLoggedIN",false);

  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/success" element={<Success />} />
        {/* <Route path="/favorite" element={<FavoriteProperties  favorite={favorite} />} /> */}
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/property/:id" element={<ShowProperty addToFavorite={addToFavorite} />} />
        <Route element={<ProtectedRoute/>}>
        <Route path="/favorite" element={<FavoriteProperties  favorite={favorite} />} />
        </Route>
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
