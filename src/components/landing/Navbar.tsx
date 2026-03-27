import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="My Teacher" className="h-9 w-9" />
          <span className="text-xl font-bold text-foreground">My Teacher</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Features</a>
          <a href="#subjects" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Subjects</a>
          <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">How It Works</a>
          <a href="#testimonials" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Testimonials</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" asChild>
            <Link to="/login">Log In</Link>
          </Button>
          <Button asChild>
            <Link to="/login">Get Started</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2 rounded-xl hover:bg-accent" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 animate-fade-in">
          <div className="flex flex-col gap-2">
            <a href="#features" className="py-2 text-sm font-medium text-muted-foreground" onClick={() => setMobileOpen(false)}>Features</a>
            <a href="#subjects" className="py-2 text-sm font-medium text-muted-foreground" onClick={() => setMobileOpen(false)}>Subjects</a>
            <a href="#how-it-works" className="py-2 text-sm font-medium text-muted-foreground" onClick={() => setMobileOpen(false)}>How It Works</a>
            <a href="#testimonials" className="py-2 text-sm font-medium text-muted-foreground" onClick={() => setMobileOpen(false)}>Testimonials</a>
            <div className="flex gap-2 pt-2">
              <Button variant="outline" className="flex-1" asChild><Link to="/login">Log In</Link></Button>
              <Button className="flex-1" asChild><Link to="/login">Get Started</Link></Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
