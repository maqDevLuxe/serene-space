import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Heart className="h-5 w-5 text-primary" />
              <span className="font-display text-xl font-semibold text-foreground">MindHaven</span>
            </Link>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              A safe space for healing, growth, and self-discovery. Your mental wellness journey starts here.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Therapists", "Resources", "Booking"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-500"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2">
              {["Mental Health Blog", "Mindfulness Guides", "Crisis Support", "FAQ"].map((item) => (
                <li key={item}>
                  <span className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-500 cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span className="font-body">hello@mindhaven.care</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span className="font-body">1-800-HAVEN</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="font-body">Available Worldwide</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-muted-foreground">
            © 2026 MindHaven. All rights reserved. Your privacy is sacred to us.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Accessibility"].map((item) => (
              <span key={item} className="font-body text-xs text-muted-foreground hover:text-primary transition-colors duration-500 cursor-pointer">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Crisis line banner */}
      <div className="bg-primary/10 py-3 text-center">
        <p className="font-body text-xs text-accent-foreground">
          If you are in crisis, please call <strong>988 Suicide & Crisis Lifeline</strong> or text HOME to 741741
        </p>
      </div>
    </footer>
  );
};

export default Footer;
