export const fetchData = async (endpoint) => {
    try {
      const response = await fetch(`http://20.244.56.144/test/${endpoint}`);
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      return await response.json();
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };
  