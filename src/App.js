import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './component/Products';
import Contact from './component/Contact';
import Header from './component/Header';
import Footer from './component/Footer';
import Product from './component/Product';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="product/:id" element={<Product />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
