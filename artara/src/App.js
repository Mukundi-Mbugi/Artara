import './App.css';
import Home from './components/Home/Home';
import Exhibitions from './components/Exhibitions/Exhibitions';
import Signup from './components/Signup/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Artists from './components/Artists/Artists';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Dashboard from './components/Dashboard/Dashboard';
import {useEffect, useState} from "react"

function App() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
    .then(res => res.json())
    .then(data => setImages(data));
  }, [])
  
  return (
    <div>
      <Navbar />
      <Home images={images}/>
      <Dashboard />
      <Signup />
      <Exhibitions />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/Artists" component={Artists} />
          <Route path="/Exhibitions" component={Exhibitions} /> 
          <Route path="/Signup" component={Signup} />
      </Routes>
      </BrowserRouter> */}
      <Footer />
    </div>
  );
}

export default App;
