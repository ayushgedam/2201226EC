import React, { useEffect, useState } from "react";
import { fetchData } from "../api/fetchData";
import { Card, CardContent } from "./ui/card";

const TopUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData("users").then(data => {
      if (data) {
        const userList = Object.entries(data).map(([id, name]) => ({ id, name }));
        setUsers(userList);
      }
    });
  }, []);

  return (
    <Card>
      <CardContent>
        <h2 className="text-xl font-bold mb-4">Top Users</h2>
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default TopUsers;
