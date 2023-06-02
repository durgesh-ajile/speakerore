import logo from './logo.svg';
import './App.css';
import Works from './utilities/works/Works';
import Footer from './utilities/footer/Footer';
import Agriculture from './utilities/agriculture/Agriculture';
import Goldmine from './utilities/GoldMine/Goldmine';
import Home from './components/Home';
import Landing from './components/Landing';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PersistentDrawerLeft from './utilities/Events/Sidebar';
import Subscription from './utilities/Subs/Subscription';
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Landing/>}></Route>
      <Route exact path='/event' element={<PersistentDrawerLeft/>}></Route>
      <Route path='/subscription' element={<Subscription/>}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
