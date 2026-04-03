import { Link, useLocation, Outlet } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Home, Search, Video, FileText, MessageSquare, Bell, User, LogOut, BookOpen } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { to: "/dashboard", icon: Home, label: "Home" },
  { to: "/search", icon: Search, label: "Search" },
  { to: "/seminars", icon: Video, label: "Seminars" },
  { to: "/exams", icon: FileText, label: "Exams" },
  { to: "/resources", icon: BookOpen, label: "Resources" },
  { to: "/messages", icon: MessageSquare, label: "Messages" },
  { to: "/notifications", icon: Bell, label: "Alerts" },
  { to: "/progress", icon: FileText, label: "Progress" },
  { to: "/profile", icon: User, label: "Profile" },
];

const mobileNav = [
  { to: "/dashboard", icon: Home, label: "Home" },
  { to: "/search", icon: Search, label: "Search" },
  { to: "/seminars", icon: Video, label: "Seminars" },
  { to: "/exams", icon: FileText, label: "Exams" },
  { to: "/profile", icon: User, label: "Profile" },
];

const StudentLayout = () => {
  const { user, logout } = useAuth();
  const location = useLocation();

  return (
    <div className="min-h-screen bg-secondary flex">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 bg-card border-r border-border h-screen sticky top-0 flex-col">
        <div className="p-4 border-b border-border">
          <Link to="/dashboard" className="flex items-center gap-2">
            <img src={logo} alt="My Teacher" className="h-8 w-8" />
            <span className="font-bold text-foreground">My Teacher</span>
          </Link>
        </div>
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const active = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  active ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="p-3 border-t border-border">
          <div className="flex items-center gap-3 px-3 py-2 mb-2">
            <img src={user?.photoURL} alt="" className="h-8 w-8 rounded-full" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">{user?.name}</p>
              <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
            </div>
          </div>
          <button onClick={logout} className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-muted-foreground hover:bg-destructive/10 hover:text-destructive w-full transition-colors">
            <LogOut className="h-4 w-4" /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 pb-20 md:pb-0 min-w-0">
        <Outlet />
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border flex justify-around py-2 z-50 safe-area-bottom">
        {mobileNav.map((item) => {
          const active = location.pathname === item.to;
          return (
            <Link key={item.to} to={item.to} className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl text-xs ${active ? "text-primary" : "text-muted-foreground"}`}>
              <item.icon className="h-5 w-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default StudentLayout;
