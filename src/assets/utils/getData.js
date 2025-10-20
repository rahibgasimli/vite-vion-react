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

// getData.js faylında fetchDetailData funksiyasını yeniləyin
export const fetchDetailData = async (type, slug) => {
  try {
    // Type parametrini düzgün formatlaşdırın
    const formattedType = type.toLowerCase();
    
    // API endpoint-ini yoxlayın
    const apiUrl = `https://vion.make.az/api/v1/en/${formattedType}/${slug}`;
    console.log('API URL:', apiUrl); // Debug üçün
    
    const response = await fetch(apiUrl);
    
    console.log('Response status:', response.status);
    console.log('Response headers:', Object.fromEntries(response.headers.entries()));
    
    if (!response.ok) {
      // Əgər 404 və ya digər xəta varsa, məzmunu oxuyun
      const errorText = await response.text();
      console.error('Error response:', errorText.substring(0, 500));
      throw new Error(`${type} tapılmadı - Status: ${response.status}`);
    }
    
    // Cavabın JSON olub-olmadığını yoxlayın
    const contentType = response.headers.get('content-type');
    console.log('Content-Type:', contentType);
    
    if (!contentType || !contentType.includes('application/json')) {
      const text = await response.text();
      console.error('JSON olmayan cavab (ilk 500 simvol):', text.substring(0, 500));
      
      // HTML cavabı alındığında xüsusi xəta
      if (text.includes('<!DOCTYPE html>') || text.includes('<html')) {
        throw new Error('Server JSON əvəzinə HTML səhifəsi qaytarır. URL yanlış ola bilər.');
      }
      
      throw new Error(`Server JSON əvəzinə ${contentType} qaytarır`);
    }
    
    const data = await response.json();
    console.log('API Response data:', data);
    return data;
  } catch (error) {
    console.error(`${type} məlumatları alınarkən xəta:`, error);
    throw error;
  }
};