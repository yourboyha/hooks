import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Button, Container, Row, Col } from 'react-bootstrap';


const product = [
  {
    id: 0,
    name: "เสื้อยืด",
    price: 300,
    image: 'tshirt.jpg'
  },
  {
    id: 1,
    name: "หมวก",
    price: 500,
    image: 'hat.jpg'
  },
  {
    id: 2,
    name: "กางเกงขาสั้น",
    price: 600,
    image: 'shorts.jpg'
  }
];

function Product(props) {
  return (
    <>
      <div>
        <img src={props.image}
          className='img-fluid'
          alt={props.name}></img>
      </div>
      <div>{props.name}</div>
      <div>{props.price} บาท</div>
    </>

  );
}

function App() {
  //   return (
  //     <Container className='p-3 my-3' style={{ backgroundColor: "ghostwhite" }}>
  //       <h1>bootstrap</h1>
  //       <Button style={{ margin: '0px 3px' }}>Click me</Button>
  //       <Button variant='success' style={{ margin: '0px 3px' }}>Success</Button>
  //       <Button variant='danger' style={{ margin: '0px 3px' }}>Delete</Button>
  //       <img src="pexels.jpg" className='img-fluid' alt='img' style={{ marginTop: '5px' }}></img>
  //     </Container>
  //   )
  const [totalItems, setTotalItem] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <Container className='p-3 my-3'>
      <Row className='border'>
        <Col className='text-center'>
          <Product
            name={product[0].name}
            price={product[0].price}
            image={product[0].image}
          />
          <Button style={{ margin: "5px 0px" }}
            onClick={() => {
              setTotalItem(totalItems + 1);
              setTotalPrice(totalPrice + product[0].price)
            }}>เพิ่มลงตะกร้า</Button>
        </Col>
        <Col className='text-center'>
          <Product
            name={product[1].name}
            price={product[1].price}
            image={product[1].image}
          />
          <Button style={{ margin: "5px 0px" }}
            onClick={() => {
              setTotalItem(totalItems + 1);
              setTotalPrice(totalPrice + product[0].price)
            }}>เพิ่มลงตะกร้า</Button>
        </Col>
        <Col className='text-center'>
          <Product
            name={product[2].name}
            price={product[2].price}
            image={product[2].image}
          />
          <Button style={{ margin: "5px 0px" }}
            onClick={() => {
              setTotalItem(totalItems + 1);
              setTotalPrice(totalPrice + product[0].price)
            }}>เพิ่มลงตะกร้า</Button>
        </Col>
      </Row>
      <Row className='border'>
        <Col className='text-center' style={{ padding: "10px 0px", backgroundColor: "ghostwhite" }}>
          <h3>จำนวนสินค้าในตะกร้า: {totalItems}  ชิ้น</h3>
          <h3>ราคาสินค้าในตะกร้าทั้งหมด: {totalPrice}  บาท</h3>
        </Col>
      </Row>

    </Container >
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
