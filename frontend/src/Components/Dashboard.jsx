import React from "react";
import "./App.css";
import './dashboard.css';
import { useNavigate } from "react-router-dom";
import Post from "./Post";
import Navigation from "./Navigation/Navigation";
import {
	MDBFooter,
	MDBContainer,
	MDBIcon,
	MDBBtn
  } from 'mdb-react-ui-kit';

const Dashboard = () => {
  const history = useNavigate();
  const [logout, setLogout] = React.useState(false);

  React.useEffect(() => {
    if (!localStorage.getItem("auth")) history("/login");
    // eslint-disable-next-line
  }, [logout]);

  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("auth");
    setLogout(true);
  };



  return (
    <div className="dashcontainer" style={{ backgroundImage: "url('https://wallpaperaccess.com/full/16692.jpg')" }}>
    <Navigation/>
      <Post/>
      <br></br>
      <button onClick={logoutHandler} className="logout-btn">
        Logout
      </button>
      <MDBFooter className='bg-dark text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          srilakshmipriyatextiles.com
        </a>
      </div>
    </MDBFooter>
    </div>
  );
};

export default Dashboard;