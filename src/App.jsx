import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './component/navbar/Navbar'
import { About, Home, Contacts, Stories } from './component/pages/index.jsx'

function App() {

  return (
    <>

    <div className="main-container">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      
    </div>
    </>
  )
}

export default App
