import React, { createContext, useContext, useState, useEffect } from 'react';
import { message } from 'antd';

// Create a context for admin authentication
const AdminAuthContext = createContext({
  isAdminAuth: false,
  setAdminAuth: (auth: boolean) => {},
});

// Create a provider component
export const AdminAuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAdminAuth, setAdminAuth] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const storedAuth = localStorage.getItem('isAdminAuth');
      return storedAuth ? JSON.parse(storedAuth) : false;
    }
    return false;
  });

  const checkAdminAuthentication = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKENED_API}admin/checklogin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      if (response.ok) {
        const result = await response.json();
        if (result.ok) {
          setAdminAuth(true);
          localStorage.setItem('isAdminAuth', 'true');
          message.success("Successfully checked");
        } else {
          setAdminAuth(false);
          localStorage.removeItem('isAdminAuth');
        }
      } else {
        setAdminAuth(false);
        localStorage.removeItem('isAdminAuth');
      }
    } catch (error) {
      console.error(error);
      setAdminAuth(false);
      localStorage.removeItem('isAdminAuth');
    }
  };

  useEffect(() => {
    checkAdminAuthentication();
  }, []);

  return (
    <AdminAuthContext.Provider value={{ isAdminAuth, setAdminAuth }}>
      {children}
    </AdminAuthContext.Provider>
  );
};

// Custom hook to use the admin auth context
export const useAdminAuth = () => {
  return useContext(AdminAuthContext);
};
