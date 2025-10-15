import { API_BASE_URL } from './apiConfig';

export const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`);
    
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

// Xüsusi endpointlər üçün helper funksiyalar
export const fetchPageData = async (slug = '') => {
  let endpoint;
  
  if (!slug || slug === 'home') {
    endpoint = 'en/pages/main';
  } else {
    endpoint = `en/pages/${slug}`;
  }
  
  return await fetchData(endpoint);
};

export const fetchMenuData = async () => {
  return await fetchData('en/pages/main');
};