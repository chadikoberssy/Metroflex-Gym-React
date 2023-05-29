//import logo from './logo.svg';
import './styles/styles.scss';

import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
//import parse from 'url-parse';
//import homepage from '../package.json';
//import './App.css';


//const basename = parse(homepage).pathname;

function App() {
  return (
    <>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/" element={<About />} />
      </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
