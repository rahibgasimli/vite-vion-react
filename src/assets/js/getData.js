export const fetchData = async (endpoint) => {
    const url = `http://192.168.20.148:5000/api/v1`
    try {
      const response = await fetch(`${url}/${endpoint}`);
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
  }