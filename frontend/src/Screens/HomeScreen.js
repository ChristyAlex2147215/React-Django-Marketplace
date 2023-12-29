import React,{useState,useEffect} from 'react';
import { Row, Col } from 'react-bootstrap';
// import {products} from '../Data/ProductData/AllProducts';
import 'bootstrap/dist/css/bootstrap.min.css'; // Add this line for Bootstrap styles
import Product from "../components/Product";
import axios from 'axios';




const HomeScreen = () => {
  const [products,setProducts]=useState([]);

  useEffect(
    ()=>{
     async function fetchProductsData()
     {
      const data=await axios.get("http://127.0.0.1:8000/api/products/")
      console.log(JSON.stringify(data.data));
      setProducts(data.data);
     }
     fetchProductsData();
  
    },[]
  )
  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {products.map((p) => (
          <Col key={p._id} sm={12} md={6} lg={4} xl={3} className='linear-gradient(180deg, rgba($white, .15), rgba($white, 0))'>
            <Product product={p}/>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeScreen;
