
import './Components/fontawesome';
import Home from './Components/Home';
import Aboutpage from './Components/Aboutpage'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import  Portfolio  from './Components/Portfolio';
import Contact from './Components/Contact';
import ServicePage from './Components/ServicePage'


function App() {
  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/about' element = {<Aboutpage/>}/>
      <Route path='/portfolio' element = {<Portfolio/>}/>
      <Route path='/services' element = {<ServicePage/>}/>
      <Route path='/contact' element = {<Contact/>}/>
    </Routes>
   </BrowserRouter>
    
   </>
    
  );
}

export default App;
