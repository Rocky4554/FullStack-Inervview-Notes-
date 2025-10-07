import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios"; // ✅ import axios

async function loginUser(userData) {
  const res = await axios.post("/api/login", userData); 
  return res.data; // ✅ axios stores response in .data
}

export default function LoginQueryAxios() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      console.log("Login success:", data);
      // Example: save JWT if backend sends one
      if (data.token) {
        localStorage.setItem("token", data.token);
      }
    },
    onError: (error) => {
      console.error("Login failed:", error);
    },
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(formData);
  };    

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} />
      <button type="submit" disabled={mutation.isLoading}>
        {mutation.isLoading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}

// Key differences from fetch:
// With Axios, you don’t need JSON.stringify(formData) → just pass formData.
// Axios response is always wrapped in res.data.
// Axios handles JSON automatically (both request and response).
