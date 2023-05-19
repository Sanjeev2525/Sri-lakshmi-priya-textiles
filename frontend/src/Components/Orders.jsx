import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Navigation from "./Navigation/Navigation";
import Footer from "./Footer";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { message } from 'antd';
import { Button, Drawer, Space } from 'antd';
import { useState,useEffect} from 'react';
import ConfigProvider from "antd/es/config-provider";

const Orders = () => {
  
  const {item,productT}=useParams();
  const [messageApi, contextHolder] = message.useMessage();
  const [open, setOpen] = useState(true);
  const [size, setSize] = useState();
  const showLargeDrawer = () => {
    setSize('large');
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    showLargeDrawer();
  }, []);



  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    const formData = new FormData(form.current);


    // Check if any required fields are empty
    let hasEmptyFields = false;
    // eslint-disable-next-line
    for (let [name,value] of formData.entries()) {
      if (value === '') {
        hasEmptyFields = true;
        break;
      }
    }

    if (hasEmptyFields) {
      error();
    } else {
      // Submit the form or perform other actions
      // ...
      emailjs.sendForm('service_c0lgsjp', 'template_q45ixts', form.current, 'qJrKl0ciB58ucjzDb')
      .then((result) => {
          console.log(result.text);
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
      Success();
      
      
    }
  
};

const Success = ()=>{
    messageApi.open({
        type: 'success',
        content: 'Order placed successfully',
      });
  }
  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'Please Fill All The Details',
    });
  };

  return (
    <>
        {contextHolder}

    <Navigation/>
    <StyledContactForm>
    
      
      <section className="container">
      <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#00b96b',
      },
    }}>
    <Space>
        <Button type="primary" onClick={showLargeDrawer }>
          Order Policy[Read for details on Ordering ]
        </Button>
    </Space>
    </ConfigProvider>
      <form className="form" ref={form} onSubmit={sendEmail}>
        <div className="input-box">
        <label>Name</label>
        <input type="text" name="user_name" />
        </div>

        <div className="input-box">
        <label>Email</label>
        <input type="email" name="user_email" />
        </div>
        
        <div className="input-box">
        <label>Phone Number</label>
        <input type="text" name="user_number"/>
        </div>

        <div className="input-box">
        <label>Product</label>
        <input
          type="text"
          name="product"
          value={`${productT}-${item}`}
          readOnly
        />
        </div>

        <div className="input-box">
        <label>Quantity</label>
        <input type="number" name="quantity" />
        </div>

        <div className="input-box">
        <label>Size</label>
        <input type="text" name="size" />
        </div>

       

        <button>Order</button>
      </form>
      </section>
    
    </StyledContactForm>
    
    <Drawer
        title="Order Policy"
        placement="right"
        size={size}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onClose}>
              OK
            </Button>
          </Space>
        }
        bodyStyle={{ backgroundColor: 'lightblue' }}
      >
        <h1 style={{ color: 'Olive' }}>Please read our order policy before ordering : </h1>
        <ul>
        <h3><li>We Deliver Wholesale Goods to Our customer...</li></h3>
        <h3><li>We will Contact within 24 hrs from the time the Order was placed</li></h3>
        <h3><li>If any issues persist with the Please Contact</li></h3>
        <input type="tel" value='+91 90258 85166' readOnly style={{ cursor: 'pointer', backgroundColor: 'transparent', border: 'none', color: 'blue', textDecoration: 'underline' }} />

        </ul>
      </Drawer>

    <Footer/>
    </>
  );
};

export default Orders;

// Styles
  const StyledContactForm = styled.div`
  /* Import Google font - Poppins */
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Poppins", sans-serif;
    }
    
    body {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgb(130, 106, 251);
    }
    
    .container {
      position: relative;
      max-width: 400px;
      width: 100%;
      background: #fff;
      padding: 25px;
      border-radius: 8px;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
      background-color: rgb(49, 170, 170);
      align-items: center;
      justify-content: center;
    }
    
    .container header {
      font-size: 1.5rem;
      color: #333;
      font-weight: 500;
      text-align: center;
      margin-bottom: 20px;
    }
    
    .container .form {
      margin-top: 20px;
    }
    
    .form .input-box {
      margin-top: 15px;
    }
    
    .input-box label {
      color: #333;
    }
    
    .form :where(.input-box input, .select-box) {
      height: 40px;
      width: 100%;
      outline: none;
      font-size: 1rem;
      color: #707070;
      margin-top: 8px;
      border: 1px solid #ddd;
      border-radius: 6px;
      padding: 0 10px;
    }
    
    .input-box input:focus {
      box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
    }
    
    .form .column {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 10px;
    }
    
    .form .gender-box {
      margin-top: 15px;
    }
    
    .gender-box h3 {
      color: #333;
      font-size: 1rem;
      font-weight: 400;
      margin-bottom: 8px;
    }
    
    .form :where(.gender-option, .gender) {
      display: flex;
      align-items: center;
      column-gap: 30px;
      flex-wrap: wrap;
    }
    
    .form .gender {
      column-gap: 5px;
    }
    
    .gender input {
      accent-color: rgb(130, 106, 251);
    }
    
    .form :where(.gender input, .gender label) {
      cursor: pointer;
    }
    
    .gender label {
      color: #707070;
    }
    
    .address :where(input, .select-box) {
      margin-top: 10px;
    }
    
    .select-box select {
      height: 100%;
      width: 100%;
      outline: none;
      border: none;
      color: #707070;
      font-size: 1rem;
    }
    
    .form button {
      height: 45px;
      width: 100%;
      color: #fff;
      font-size: 1rem;
      font-weight: 400;
      margin-top: 20px;
      border: none;
      cursor: pointer;
      transition: all 0.2s ease;
      background: rgb(130, 106, 251);
    }
    
    .form button:hover {
      background: rgb(88, 56, 250);
    }
    
    /*Responsive*/
    @media screen and (max-width: 500px) {
      .form .column {
        flex-wrap: wrap;
      }
      .form :where(.gender-option, .gender) {
        row-gap: 15px;
      }
    }
    
    
  `;