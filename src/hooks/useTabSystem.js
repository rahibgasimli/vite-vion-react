// hooks/useTabSystem.js
import { useState, useEffect } from 'react';

export const useTabSystem = (defaultTab = 'tab-1') => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleTabClick = (tabId, e) => {
    if (e) e.preventDefault();
    setActiveTab(tabId);
  };

  // URL hash değişikliklerini dinle
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && hash.startsWith('tab-')) {
        setActiveTab(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // İlk yüklemede hash kontrolü
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return {
    activeTab,
    handleTabClick,
    setActiveTab
  };
};