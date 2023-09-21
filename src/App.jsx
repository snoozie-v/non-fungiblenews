import './App.css'
import Headlines from './pages/Headlines'
import { Routes, Route } from "react-router-dom";
import Directory from './pages/Directory'
import Layout from './pages/Layout';
import NoPage from './pages/NoPage';
import Home from './pages/Home';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter

function App() {
  

  return (
    <Router>
    < Routes>
    <Route path ="/" element={<Layout />}>
        <Route index element = {<Home />} />
        <Route path="headlines" element={<Headlines />} />
        <Route path="directory" element={<Directory />} />
        <Route path="*" element={<NoPage />} />
        </Route>
    </Routes>
    </Router>
  )
}

export default App
