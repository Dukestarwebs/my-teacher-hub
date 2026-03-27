import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="My Teacher" className="h-8 w-8 brightness-200" />
              <span className="text-lg font-bold">My Teacher</span>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              Uganda's leading educational platform connecting students with qualified teachers and AI tutoring.
            </p>
            <p className="text-xs opacity-50">Founded by Nakintu Sylvia</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><a href="#features" className="hover:opacity-100 transition-opacity">Features</a></li>
              <li><a href="#subjects" className="hover:opacity-100 transition-opacity">Subjects</a></li>
              <li><Link to="/login" className="hover:opacity-100 transition-opacity">AI Tutors</Link></li>
              <li><Link to="/login" className="hover:opacity-100 transition-opacity">Live Seminars</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><a href="#" className="hover:opacity-100 transition-opacity">About Us</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Careers</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Contact</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Twitter</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Facebook</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Instagram</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">YouTube</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center text-sm opacity-50">
          © {new Date().getFullYear()} My Teacher. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
