import React from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import Post from "./Post";


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
    <>
      <button onClick={logoutHandler} className="btn btn-primary text-left">
        Logout
      </button>
	  <hr/>
      <div style={{ textAlign: "center" }}>Dashboard</div>
      <div><Post/></div>
    </>
  );
};

export default Dashboard;