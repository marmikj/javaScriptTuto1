import React, { useEffect, useState } from "react";

const dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboard, setDashboard] = useState(null);
  useEffect(() => {
    async function fetchDashboard() {
      const resopse = await fetch("http://localhost:4000/dashboard");
      const data = await resopse.json();
      setDashboard(data);
      setIsLoading(false);
    }
    fetchDashboard();
  }, []);
  if (isLoading) {
    return <h2>Loading....</h2>;
  }
  return (
    <div>
      <h2>dashboard</h2>
      <h2>Posts:{dashboard.post}</h2>
      <h2>Likes:{dashboard.likes}</h2>
      <h2>Followers:{dashboard.followers}</h2>
      <h2>Following:{dashboard.following}</h2>
    </div>
  );
};

export default dashboard;
