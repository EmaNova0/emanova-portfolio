
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Clarity from './pages/Clarity'
import Bowtify from './pages/Bowtify'
import Space from './pages/Space'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/clarity" element={<Clarity />} />
        <Route path="/bowtify" element={<Bowtify />} />
        <Route path="/space" element={<Space />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
