import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Cart from './Components/Cart';
import Product from './Components/Product';
import Card from './Components/Card'
import Checkout from './Components/Checkout';
import { Routes,Route} from 'react-router-dom';
import Landing from './Components/Landing';
function App() {
  return (
    <div className=' w-screen min-h-screen  flex flex-col font-inter'>

      <Nav></Nav>
    <Landing></Landing>

      <Routes>
 <Route path="/" element={<Home/>} />
 <Route path="/cart" element={<Cart/>} />
 <Route path="/card" element={<Card/>} />
 <Route path="/final" element={<Checkout/>} />
 


 




 
</Routes>
    </div>
  );
}

export default App;
