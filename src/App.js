import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './component/Products';
import Contact from './component/Contact';
import Header from './component/Header';
import Footer from './component/Footer';
import Product from './component/Product';
import { useReducer } from 'react';

//useReducer example
function reduce(state, action) {
  switch (action) {
    case 'UP':
      return state + 1;

    case 'DOWN':
      return state - 1;

    default:
      break;
  }
}

function App() {
  const [state, dispatch] = useReducer(reduce, 0);

  return (
    <div className="App">
      <button onClick={() => dispatch('UP')}>+</button>
      <button onClick={() => dispatch('DOWN')}>-</button>
      <p>{state}</p>
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
