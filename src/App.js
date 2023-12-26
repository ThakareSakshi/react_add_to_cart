import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1>Your Bag</h1>
      <Card key="10" title="Samsung Galaxy S8" price="$399.99" src="https://www.course-api.com/images/cart/phone-1.png"/>
      <Card  key="10" title="Google Pixel" price="$499.99" src="https://www.course-api.com/images/cart/phone-2.png"/>
      <Card  key="10" title="Xiaomi Redmi Note 2" price="$699.99" src="https://www.course-api.com/images/cart/phone-3.png"/>
      <Card key="10" title="Samsung Galaxy S7" price="$599.99" src="https://www.course-api.com/images/cart/phone-4.png"/>
    </div>
  );
}

export default App;
