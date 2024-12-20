import { BrowserRouter as Router } from 'react-router-dom';
import { CartProvider } from './components/cart/CartProvider';
import Index from './pages/Index';
import './App.css';

function App() {
  return (
    <Router>
      <CartProvider>
        <Index />
      </CartProvider>
    </Router>
  );
}

export default App;