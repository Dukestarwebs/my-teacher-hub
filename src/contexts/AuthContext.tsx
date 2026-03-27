import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

export type UserRole = "student" | "teacher" | "admin";

export interface User {
  uid: string;
  name: string;
  email: string;
  role: UserRole;
  photoURL: string;
  phone?: string;
  subject?: string;
  isApproved?: boolean;
  isOnline?: boolean;
  bio?: string;
  challenges?: string;
  goals?: string;
}

// Mock users for testing
export const MOCK_USERS: Record<string, User & { password: string }> = {
  "student@myteacher.ug": {
    uid: "student-001",
    name: "Nakamya Grace",
    email: "student@myteacher.ug",
    password: "student123",
    role: "student",
    photoURL: "https://api.dicebear.com/7.x/avataaars/svg?seed=Grace",
    challenges: "I struggle with algebra and physics calculations",
    goals: "Pass my UACE exams with flying colors",
  },
  "teacher@myteacher.ug": {
    uid: "teacher-001",
    name: "Ssempala David",
    email: "teacher@myteacher.ug",
    password: "teacher123",
    role: "teacher",
    photoURL: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    phone: "0771234567",
    subject: "Mathematics",
    isApproved: true,
    isOnline: true,
    bio: "Experienced mathematics teacher with 10+ years in Ugandan schools.",
  },
  "admin@myteacher.ug": {
    uid: "admin-001",
    name: "Nakintu Sylvia",
    email: "admin@myteacher.ug",
    password: "admin123",
    role: "admin",
    photoURL: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sylvia",
  },
};

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  loginWithGoogle: () => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem("myteacher_user");
    return saved ? JSON.parse(saved) : null;
  });
  const [isLoading, setIsLoading] = useState(false);

  const login = useCallback(async (email: string, password: string) => {
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    const mockUser = MOCK_USERS[email];
    if (mockUser && mockUser.password === password) {
      const { password: _, ...userData } = mockUser;
      setUser(userData);
      localStorage.setItem("myteacher_user", JSON.stringify(userData));
      setIsLoading(false);
      return true;
    }
    setIsLoading(false);
    return false;
  }, []);

  const loginWithGoogle = useCallback(async () => {
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    const studentUser = MOCK_USERS["student@myteacher.ug"];
    const { password: _, ...userData } = studentUser;
    setUser(userData);
    localStorage.setItem("myteacher_user", JSON.stringify(userData));
    setIsLoading(false);
    return true;
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem("myteacher_user");
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, loginWithGoogle, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
