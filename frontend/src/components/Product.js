import React from 'react'
import {Card} from "react-bootstrap"
import Rating from "../components/Rating";
import {Link} from "react-router-dom";

const Product = ({product}) => {
    console.log("image is "+"http://127.0.0.1:8000"+product.image);
  return (
    <Card className='my-3 p-3 rounded'>
        <Link to={`/product/${product._id}`}>
            <Card.Img src={"http://127.0.0.1:8000"+product.image}/>
        </Link>
        <Card.Body>
        <Link to={`/product/${product._id}`}>
           <Card.Title as="div">
            <strong>{product.name}</strong>
           </Card.Title>
        </Link>
        <Card.Text as="div">
            <div className='my-3'>
                {/* {product.rating} from {product.numReviews} reviews */}
                <Rating values={product.rating} text={`${product.numReviews} reviews`} color={"red"}/>
            </div>
        </Card.Text>
        <Card.Text as={"h3"}>
            ${product.price}
        </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Product