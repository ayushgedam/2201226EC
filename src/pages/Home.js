import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Social Media Analytics</h1>
      <nav>
        <ul>
          <li><Link to="/top-users">Top Users</Link></li>
          <li><Link to="/trending-posts">Trending Posts</Link></li>
          <li><Link to="/feed">Live Feed</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;