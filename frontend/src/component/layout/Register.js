import React from 'react'
import axios from 'axios'

const Register = () => {
    const params = {
        "name":"Laptop",
        "price":55000,
        "description":"Best cheapest",
        "category":"laptop",
        "images":{
            "public_id":"sample_image",
            "url":"sample_url"
        }
    }
    const product = axios.post("http://localhost:8000/api/v1/product/new",params)
    console.log(product);
  return (
    <div>Register</div>
  )
}

export default Register