import React, { useEffect, useState } from "react";
import { fetchData } from "../api/fetchData";
import { Card, CardContent } from "./ui/card";

const TrendingPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchData("posts").then(data => setPosts(data || []));
  }, []);

  return (
    <Card>
      <CardContent>
        <h2 className="text-xl font-bold mb-4">Trending Posts</h2>
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              {post.content} - {post.commentCount} comments
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default TrendingPosts;
