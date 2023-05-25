import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import FormDetails from './components/FormDetails'
import SubmissionPage from './Components/SubmissionPage'
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/form-details" element={<FormDetails />} />
          <Route path="/submission-page" element={<SubmissionPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
