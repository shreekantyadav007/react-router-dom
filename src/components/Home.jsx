import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Welcome to Our Application</h1>
      <p>
        This is a simple demo application to showcase React routing and
        navigation. Here, you can sign up, log in, and access a personalized
        dashboard.
      </p>

      <div style={{ marginTop: "1.5rem" }}>
        <Link to="/signup" style={{ marginRight: "1rem" }}>
          <button>Sign Up</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
