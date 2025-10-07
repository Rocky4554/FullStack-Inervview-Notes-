import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./axiosInstance";

async function fetchProfile() {
  const res = await axiosInstance.get("/profile"); // Protected API
  return res.data;
}

export default function Profile() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["profile"],
    queryFn: fetchProfile,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching profile: {error.message}</p>;

  return (
    <div>
      <h2>Welcome, {data.name}</h2>
      <p>Email: {data.email}</p>
    </div>
  );
}
