import React from "react";
import "./app-loader.css";
 
const Loader = () => {
  return (
    <section className='app-loader'>
      <div className='bouncing-loader'>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
};

export default Loader;