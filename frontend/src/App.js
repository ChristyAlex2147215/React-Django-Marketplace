import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import "./Bootstrap.css"
import { Container } from 'react-bootstrap';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from "./Screens/ProductScreen"

function App() {
  return (
    <BrowserRouter basename="/">
      <main className='py-3'>
      <Header/>
          {/* <HomeScreen/> */}
          <Routes>
            <Route path="/" Component={HomeScreen} exact/>
            <Route path='/product/:id' Component={ProductScreen}/>
            </Routes>
      </main>
      <Footer/>
      
    </BrowserRouter>
  );
}

export default App;
