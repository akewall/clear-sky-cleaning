import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container-custom px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Logo */}
          <div>
            <Link to="/" className="flex items-center gap-2 font-bold mb-4">
              <img src={logo} alt="Åkes Fönsterputs" className="h-8 w-auto" />
              <span className="text-xl">Åkes Fönsterputs</span>
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Snabblänkar</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link to="/" className="hover:text-primary-foreground transition-colors">Hem</Link>
              </li>
              <li>
                <Link to="/om-oss" className="hover:text-primary-foreground transition-colors">Om oss</Link>
              </li>
              <li>
                <Link to="/tjanster" className="hover:text-primary-foreground transition-colors">Tjänster</Link>
              </li>
              <li>
                <Link to="/kontakt" className="hover:text-primary-foreground transition-colors">Kontakt</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Kontakt</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:0722192626" className="hover:text-primary-foreground transition-colors">
                  072-219 26 26
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:akesfonsterputs@gmail.com" className="hover:text-primary-foreground transition-colors">
                  Mejla oss
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>
                  Rödhakegatan 18<br />
                  235 38 Vellinge
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Åkes Fönsterputs. Alla rättigheter förbehållna.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
