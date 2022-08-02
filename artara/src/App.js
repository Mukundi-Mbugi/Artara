import './App.css';
import Home from './components/Home/Home';
import Exhibitions from './components/Exhibitions/Exhibitions';
import Signup from './components/Signup/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Artists from './components/Artists/Artists';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Signup />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/Artists" component={Artists} />
          <Route path="/Exhibitions" component={Exhibitions} /> 
          <Route path="/Signup" component={Signup} />
      </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
