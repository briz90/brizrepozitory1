import { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import RequestForm from './components/RequestForm'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Reviews from './pages/Reviews'
import Contacts from './pages/Contacts'

function App() {
  const [formOpen, setFormOpen] = useState(false)

  const openForm = () => setFormOpen(true)
  const closeForm = () => setFormOpen(false)

  return (
    <Router>
      <Layout onOpenForm={openForm}>
        <Routes>
          <Route path="/" element={<Home onOpenForm={openForm} />} />
          <Route path="/services" element={<Services onOpenForm={openForm} />} />
          <Route path="/about" element={<About />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contacts" element={<Contacts onOpenForm={openForm} />} />
        </Routes>
      </Layout>
      <RequestForm isOpen={formOpen} onClose={closeForm} />
    </Router>
  )
}

export default App
