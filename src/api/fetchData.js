export const fetchData = async (endpoint) => {
    try {
      // Simulated API data (Replace with actual API URL if needed)
      const mockData = {
        users: {
          "1": "Alice",
          "2": "Bob",
          "3": "Charlie"
        },
        posts: [
          { id: "101", userId: "1", content: "Hello world!", commentCount: 5 },
          { id: "102", userId: "2", content: "React is awesome!", commentCount: 8 },
          { id: "103", userId: "3", content: "This is a test post.", commentCount: 2 }
        ],
        comments: [
          { postId: "101", content: "Nice post!" },
          { postId: "102", content: "I agree!" }
        ]
      };
  
      return mockData[endpoint] || null;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };
  
  