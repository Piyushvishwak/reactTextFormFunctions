import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { useState} from 'react';


export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      document.body.style.backgroundColor = newMode ? "#282c34" : "white";
      return newMode;
    });
  };

  return (
    <Router>
      <Navbar title="TextUtils" mode={darkMode ? "dark" : "light"} toggleDarkMode={toggleDarkMode}
      />
      <Alert alert="This is alert!"/>
      <div className={`container my-3 ${darkMode ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
      <Routes>
          <Route path="/" element={<TextForm heading="Enter the text to analyze below" mode={darkMode ? "dark" : "light"} />} />
          <Route path="/about" element={<About mode={darkMode ? "dark" : "light"} />} />
        </Routes>

      </div>
    </Router>
  );
}

