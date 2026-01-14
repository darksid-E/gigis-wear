import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { ShoppingCart, Menu, X, Search, User } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();
  const { itemCount } = useCart();

  const isActive = (path: string) => location === path;

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/catalogo', label: 'Catálogo' },
    { href: '/quem-somos', label: 'Quem Somos' },
    { href: '/contato', label: 'Contato' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center">
                <span className="text-lg font-bold font-bold text-secondary-foreground">G</span>
              </div>
              <span className="hidden sm:inline font-bold font-bold text-lg text-foreground">
                Gigi's Wear
              </span>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className={`font-medium transition-colors ${
                    isActive(link.href)
                      ? 'text-secondary'
                      : 'text-foreground hover:text-secondary'
                  }`}
                >
                  {link.label}
                </a>
              </Link>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-muted rounded-lg transition-colors hidden sm:block">
              <Search size={20} className="text-foreground" />
            </button>
            <button className="p-2 hover:bg-muted rounded-lg transition-colors hidden sm:block">
              <User size={20} className="text-foreground" />
            </button>
            <Link href="/carrinho">
              <a className="relative p-2 hover:bg-muted rounded-lg transition-colors">
                <ShoppingCart size={20} className="text-foreground" />
                {itemCount > 0 && (
                  <span className="absolute top-1 right-1 bg-secondary text-secondary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {itemCount > 9 ? '9+' : itemCount}
                  </span>
                )}
              </a>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            >
              {isMenuOpen ? (
                <X size={20} className="text-foreground" />
              ) : (
                <Menu size={20} className="text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-200">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className={`block py-3 px-4 font-medium transition-colors ${
                    isActive(link.href)
                      ? 'text-secondary bg-muted'
                      : 'text-foreground hover:bg-muted'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              </Link>
            ))}
            <div className="px-4 py-3 border-t border-gray-200 flex gap-4">
              <button className="flex-1 flex items-center justify-center gap-2 p-2 hover:bg-muted rounded-lg">
                <Search size={18} />
                <span>Buscar</span>
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 p-2 hover:bg-muted rounded-lg">
                <User size={18} />
                <span>Perfil</span>
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
