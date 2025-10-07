import React, { useEffect, useState } from "react";
import axios from "axios";

export default function FetchUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("/api/users");
        setUsers(res.data);
      } catch (error) {
        console.error("Error fetching users:", error.message);
      }
    }
    fetchData();
  }, []);

  return (
    <ul>
      {users.map((u) => (
        <li key={u.id}>{u.name} - {u.email}</li>
      ))}
    </ul>
  );
}
