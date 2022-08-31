
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Banner from './components/Banner';
import { Route, Routes } from 'react-router-dom';
import Gyms from './components/Gyms';
import Gym from './components/Gym';
import Banner2 from './components/Banner2';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
         <Route path="/" element={
          <>
            <Banner/><Gyms/>
          </>
        }/>
        <Route path="/:user_id" element={<Gym/>}/>
      </Routes>
      <Banner2/>
      <Footer/>
     
    </div>
  );
}

export default App;
