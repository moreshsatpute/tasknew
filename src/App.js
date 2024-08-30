// import logo from './logo.svg';
import './App.css';
import CartItem from './components/CartItem';
// import Header from './components/Header';
import burger from "./assets/burger.jpg"
import OrderSummary from './components/OrderSummary';

function App() {
  return (
    <div className="App">
      <div className='header'>

      <h1>Checkout</h1>
      <h2 className='name'>nigadi | pune </h2>
      </div>
      <CartItem
        name="Carebian spicy zinger"
        price='319'
        calories="150"
        image={burger}
        quantity="1"
      
      />
      <CartItem
        name="Carebian spicy zinger"
        price='319'
        calories="150"
        image={burger}
        quantity="1"
      
      />
      <OrderSummary/>

  
    </div>
  );
}

export default App;
