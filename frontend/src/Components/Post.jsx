import React, { useState } from "react";
import api from "../api/axiosConfig";
import './Form.css'; // Import the CSS file




function Post() {
  const [product, setProduct] = useState("");
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [material, setMaterial] = useState("");
  const [price, setPrice] = useState("");
  const [photos, setPhotos] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const bodyFormData = new FormData();
      bodyFormData.append("product", product);
      bodyFormData.append("name", name);
      bodyFormData.append("size", size);
      bodyFormData.append("material", material);
      bodyFormData.append("price", price);
      bodyFormData.append("photos", photos);

      const res = await api({
        method: "post",
        url: "/api/v1/products",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.status === 200) {
        setMessage("Product created successfully");
        // Reset state variables
        setProduct("");
        setName("");
        setSize("");
        setMaterial("");
        setPrice("");
        setPhotos("");
      } else {
        setMessage("Some error occurred");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <span> - </span>
      <form  className="form-container" onSubmit={handleSubmit}>
        <span>Create a Product</span>
        <input
          type="text"
          value={product}
          placeholder="Product"
          onChange={(e) => setProduct(e.target.value)}
        />
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={size}
          placeholder="Size"
          onChange={(e) => setSize(e.target.value)}
        />
        <input
          type="text"
          value={material}
          placeholder="Material"
          onChange={(e) => setMaterial(e.target.value)}
        />
        <input
          type="text"
          value={price}
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          value={photos}
          placeholder="Photos (URLs)"
          onChange={(e) => setPhotos(e.target.value)}
        />

        <button type="submit">Create</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
      
    </div>
  );
}

export default Post;
