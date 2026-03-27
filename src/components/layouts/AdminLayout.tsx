import { Link, useLocation, Outlet } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Home, Users, CheckCircle, Video, BookOpen, FileText, DollarSign, Bell, BarChart3, Settings, LogOut } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { to: "/admin", icon: Home, label: "Dashboard", exact: true },
  { to: "/admin/users", icon: Users, label: "Users" },
  { to: "/admin/approvals", icon: CheckCircle, label: "Approvals" },
  { to: "/admin/seminars", icon: Video, label: "Seminars" },
  { to: "/admin/resources", icon: BookOpen, label: "Resources" },
  { to: "/admin/exams", icon: FileText, label: "Exams" },
  { to: "/admin/payments", icon: DollarSign, label: "Payments" },
  { to: "/admin/notifications", icon: Bell, label: "Notifications" },
  { to: "/admin/reports", icon: BarChart3, label: "Reports" },
  { to: "/admin/settings", icon: Settings, label: "Settings" },
];

const AdminLayout = () => {
  const { user, logout } = useAuth();
  const location = useLocation();

  return (
    <div className="min-h-screen bg-secondary flex">
      <aside className="hidden md:flex w-64 bg-card border-r border-border h-screen sticky top-0 flex-col">
        <div className="p-4 border-b border-border">
          <Link to="/admin" className="flex items-center gap-2">
            <img src={logo} alt="My Teacher" className="h-8 w-8" />
            <span className="font-bold text-foreground">My Teacher</span>
          </Link>
          <span className="text-xs text-destructive font-medium mt-1 block">Admin Panel</span>
        </div>
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const active = item.exact ? location.pathname === item.to : location.pathname.startsWith(item.to);
            return (
              <Link key={item.to} to={item.to} className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${active ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:bg-accent/50"}`}>
                <item.icon className="h-4 w-4" /> {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="p-3 border-t border-border">
          <div className="flex items-center gap-3 px-3 py-2 mb-2">
            <img src={user?.photoURL} alt="" className="h-8 w-8 rounded-full" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{user?.name}</p>
              <p className="text-xs text-muted-foreground">Administrator</p>
            </div>
          </div>
          <button onClick={logout} className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-muted-foreground hover:bg-destructive/10 hover:text-destructive w-full">
            <LogOut className="h-4 w-4" /> Logout
          </button>
        </div>
      </aside>
      <main className="flex-1 pb-20 md:pb-0">
        <div className="md:hidden flex items-center justify-between p-4 bg-card border-b border-border">
          <Link to="/admin" className="flex items-center gap-2">
            <img src={logo} alt="" className="h-7 w-7" />
            <span className="font-bold text-sm text-destructive">Admin</span>
          </Link>
          <button onClick={logout}><LogOut className="h-5 w-5 text-muted-foreground" /></button>
        </div>
        <Outlet />
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border flex justify-around py-2 z-50">
          {[navItems[0], navItems[1], navItems[2], navItems[6], navItems[9]].map((item) => {
            const active = item.exact ? location.pathname === item.to : location.pathname.startsWith(item.to);
            return (
              <Link key={item.to} to={item.to} className={`flex flex-col items-center gap-0.5 px-2 py-1 text-xs ${active ? "text-primary" : "text-muted-foreground"}`}>
                <item.icon className="h-5 w-5" /> {item.label}
              </Link>
            );
          })}
        </nav>
      </main>
    </div>
  );
};

export default AdminLayout;
