import React, { useState } from "react";

const Addproduct = () => {
  const userId = JSON.parse(localStorage.getItem("user"))._id;
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [user, setUser] = useState("");
  const [error, setError] = useState(false);

  const clearFunction = () => {
    setName("");
    setPrice("");
    setCategory("");
    setCompany("");
  };

  const addProduct = async () => {
    console.log(userId);
    setUser(userId);
    if (!name || !price || !category || !company) {
      setError(true);

      return false;
    }

    let result = await fetch("http://localhost:5000/addproduct", {
      method: "post",
      body: JSON.stringify({ name, price, category, user, company }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();

    alert("Success");
    setError(false);
    clearFunction();
  };

  return (
    <div className="box">
      <h3>Add Product</h3>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="inputBox"
        type="text"
        placeholder="Product name"
      />
      {error && !name && (
        <small className="error-input">Enter valid name</small>
      )}
      <input
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="inputBox"
        type="number"
        placeholder="Price"
      />
      {error && !price && (
        <small className="error-input">Enter valid price</small>
      )}
      <input
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="inputBox"
        type="text"
        placeholder="Category"
      />
      {error && !category && (
        <small className="error-input">Enter valid category</small>
      )}
      <input
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        className="inputBox"
        type="text"
        placeholder="Company name"
      />
      {error && !company && (
        <small className="error-input">Enter valid company</small>
      )}
      <button onClick={addProduct} className="button-product inputBox">
        <a>Add Product</a>
      </button>
    </div>
  );
};

export default Addproduct;
