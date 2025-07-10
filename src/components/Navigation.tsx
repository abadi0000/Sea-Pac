
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Presentation } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'الرئيسية' },
    { path: '/consultation-services', label: 'الخدمات الاستشارية' },
    { path: '/sebaaq-machine', label: 'سـي بـاك ماشـين' },
    { path: '/parts-maintenance', label: 'قطع الغيار والصيانة' },
    { path: '/alibaba', label: 'استورد من الصين' },
    { path: '/invest', label: 'استثمر معنا' },
    { path: '/pitch-deck', label: 'شراكة مؤسس' }
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <Link to="/" className="font-playfair text-xl sm:text-2xl font-bold text-sebaaq-midnight">
            سـي بـاك
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-lg transition-colors font-medium text-sm ${
                  location.pathname === item.path
                    ? 'bg-sebaaq-blue text-white'
                    : 'text-sebaaq-midnight hover:bg-gray-100'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button & CTA */}
          <div className="flex items-center gap-2">
            <Button 
              size="sm" 
              className="hidden sm:flex bg-sebaaq-blue hover:bg-blue-600 text-white text-xs sm:text-sm px-3 sm:px-4"
            >
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              تواصل معنا
            </Button>
            
            <Link to="/pitch-deck">
              <Button 
                variant="outline"
                size="sm" 
                className="hidden sm:flex text-xs sm:text-sm px-3 sm:px-4 border-sebaaq-blue text-sebaaq-blue hover:bg-sebaaq-blue hover:text-white"
              >
                <Presentation className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                شراكة مؤسس
              </Button>
            </Link>
            
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="py-4 space-y-2 border-t">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg transition-colors font-medium ${
                  location.pathname === item.path
                    ? 'bg-sebaaq-blue text-white'
                    : 'text-sebaaq-midnight hover:bg-gray-100'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 space-y-2">
              <Button 
                size="sm" 
                className="w-full sm:hidden bg-sebaaq-blue hover:bg-blue-600 text-white"
              >
                <Phone className="w-4 h-4 mr-2" />
                تواصل معنا
              </Button>
              <Link to="/pitch-deck" className="block" onClick={() => setIsOpen(false)}>
                <Button 
                  variant="outline"
                  size="sm" 
                  className="w-full sm:hidden border-sebaaq-blue text-sebaaq-blue hover:bg-sebaaq-blue hover:text-white"
                >
                  <Presentation className="w-4 h-4 mr-2" />
                  شراكة مؤسس
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
