const TopUsers = () => {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      fetchData("users").then(data => {
        if (data && typeof data === "object" && data.users) {
          const userList = Object.entries(data.users).map(([id, name]) => ({ id, name }));
          setUsers(userList);
        } else {
          console.warn("Unexpected user data format:", data);
        }
      });
    }, []);
  
    return (
      <Card>
        <CardContent>
          <h2 className="text-xl font-bold mb-4">Top Users</h2>
          <ul>
            {users.length > 0 ? (
              users.map(user => <li key={user.id}>{user.name}</li>)
            ) : (
              <li>No users available</li>
            )}
          </ul>
        </CardContent>
      </Card>
    );
  };
  