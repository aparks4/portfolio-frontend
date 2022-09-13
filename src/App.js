import './App.css';
// IMPORT COMPONENTS
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes, Switch } from 'react-router-dom';
// IMPORT PAGES
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  const URL = "https://aryns-portfolio.herokuapp.com/";
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/projects' element={<Projects  URL={URL}/>} />
        <Route exact path='/about' element={<About URL={URL}/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
