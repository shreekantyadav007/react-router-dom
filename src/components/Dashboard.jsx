import React from "react";

const Dashboard = () => {
  // Example mock data for the dashboard
  const userStats = {
    posts: 10,
    followers: 150,
    following: 80,
  };

  return (
    <div style={{ padding: "2rem", width:'1024px', margin:'0 auto', textAlign:'center'
    }}>
      <h1>Dashboard</h1>
      <p>Welcome back! Here’s an overview of your account.</p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "2rem",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h3>{userStats.posts}</h3>
          <p>Posts</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <h3>{userStats.followers}</h3>
          <p>Followers</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <h3>{userStats.following}</h3>
          <p>Following</p>
        </div>
      </div>


    </div>
  );
};

export default Dashboard;
