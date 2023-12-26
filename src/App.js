import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import {useState} from 'react';


function App() {

  const [totalItem,setTotalItem]=useState(4);
  const [totalPrice,settotalPrice]=useState(2199.96);


  const handleTotalItem=(num,price)=>{
   let totalCount=totalItem+parseInt(num);
   
   let totalBill=totalPrice+parseFloat(price);
   setTotalItem(totalCount);
   settotalPrice(totalBill);
  }


  return (
    <div className="App">
      <Header totalitem={totalItem}></Header>
      <h1>Your Bag</h1>
      <Card key="10" title="Samsung Galaxy S8" price="399.99" src="https://www.course-api.com/images/cart/phone-1.png" handleTotalItem={handleTotalItem}/>
      <Card  key="11" title="Google Pixel" price="499.99" src="https://www.course-api.com/images/cart/phone-2.png" handleTotalItem={handleTotalItem}/>
      <Card  key="12" title="Xiaomi Redmi Note 2" price="699.99" src="https://www.course-api.com/images/cart/phone-3.png" handleTotalItem={handleTotalItem}/>
      <Card key="13" title="Samsung Galaxy S7" price="599.99" src="https://www.course-api.com/images/cart/phone-4.png" handleTotalItem={handleTotalItem}/>

      <div className='totalPrice'>Total Price: $ {totalPrice}</div>
      



    </div>
  );
}

export default App;
