import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🐔</span>
              <span className="text-xl font-semibold">Padmini Farms</span>
            </div>
            <p className="text-sm opacity-90">
              Connecting you with nature's finest — happy hens, fresh eggs, and caring farmers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-smooth">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-smooth">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-smooth">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-accent transition-smooth">Home</Link>
              </li>
              <li>
                <Link to="/hens" className="hover:text-accent transition-smooth">Our Hens</Link>
              </li>
              <li>
                <Link to="/eggs" className="hover:text-accent transition-smooth">Fresh Eggs</Link>
              </li>
              <li>
                <Link to="/farmers" className="hover:text-accent transition-smooth">Meet Farmers</Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-accent transition-smooth">Care Guide</a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-smooth">Delivery Info</a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-smooth">FAQs</a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-smooth">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>Farm Road, Green Valley, Countryside</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>hello@padminifarms.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} Padmini Farms. All rights reserved. Made with ❤️ for happy hens.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
