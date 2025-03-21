import React, { useEffect, useState } from "react";
import { fetchData } from "../api/fetchData";
import { Card, CardContent } from "@/components/ui/card";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchData("feed").then(data => setPosts(data || []));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card>
      <CardContent>
        <h2 className="text-xl font-bold mb-4">Live Feed</h2>
        <ul>
          {posts.map(post => (
            <li key={post.id}>{post.content}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default Feed;