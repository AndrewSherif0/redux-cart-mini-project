import './App.css';
import AppNavbar from './components/AppNavbar';
import { Route, Routes } from 'react-router-dom';
import Product from './components/Product';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Routes>
        <Route path="/" element={<h1>Welcome Home</h1>} />
        <Route path="/products" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
