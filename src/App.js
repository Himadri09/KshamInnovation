import './App.css';
 import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import Footer from './Components/Footer';
 import ContactPage from './Pages/ContactPage';
import MyAbout from './Pages/MyAbout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (

    <BrowserRouter >
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/About' element={<MyAbout/>} />
        <Route path='/Contact' element={<ContactPage/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;