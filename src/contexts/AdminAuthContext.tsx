import React, { createContext, useContext, useState, useEffect } from 'react';
import { getFunctions, httpsCallable } from 'firebase/functions';

interface AdminUser {
  uid: string;
  email: string;
  role: string;
}

interface AdminAuthContextType {
  adminUser: AdminUser | null;
  loading: boolean;
  logout: () => Promise<void>;
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);

export const AdminAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verify = async () => {
      try {
        const functions = getFunctions();
        const verifyFn = httpsCallable(functions, 'verifyAdminSession');
        const result = await verifyFn();
        setAdminUser(result.data as AdminUser);
      } catch {
        setAdminUser(null);
      } finally {
        setLoading(false);
      }
    };
    verify();
  }, []);

  const logout = async () => {
    const functions = getFunctions();
    const logoutFn = httpsCallable(functions, 'adminLogout');
    await logoutFn();
    setAdminUser(null);
  };

  return (
    <AdminAuthContext.Provider value={{ adminUser, loading, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (!context) throw new Error('useAdminAuth must be used within AdminAuthProvider');
  return context;
};
