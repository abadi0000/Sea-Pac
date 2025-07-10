
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'الرئيسية' },
    { path: '/consultation-services', label: 'الخدمات الاستشارية' },
    { path: '/sebaaq-machine', label: 'سـي بـاك ماشـين' },
    { path: '/parts-maintenance', label: 'قطع الغيار والصيانة' },
    { path: '/alibaba', label: 'استورد من الصين' },
    { path: '/invest', label: 'استثمر معنا' }
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md border-b sticky top-0 z-50" role="navigation" aria-label="التنقل الرئيسي">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="focus:outline-none focus:ring-4 focus:ring-sebaaq-blue/50 rounded-md p-2"
            aria-label="سـي بـاك - الصفحة الرئيسية"
          >
            <img 
              src="/lovable-uploads/f4a3ae4c-73f0-4dbe-8100-49e25dd7383b.png" 
              alt="شعار شركة سي باك لوجستيك" 
              className="h-8 sm:h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 space-x-reverse" role="menubar">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                role="menuitem"
                className={`px-3 py-2 rounded-lg transition-colors font-medium text-sm focus:outline-none focus:ring-2 focus:ring-sebaaq-blue focus:ring-offset-2 ${
                  location.pathname === item.path
                    ? 'bg-sebaaq-blue text-white'
                    : 'text-sebaaq-midnight hover:bg-gray-100'
                }`}
                aria-current={location.pathname === item.path ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button & CTA */}
          <div className="flex items-center gap-2">
            <Button 
              size="sm" 
              className="hidden sm:flex bg-sebaaq-blue hover:bg-blue-600 text-white text-xs sm:text-sm px-3 sm:px-4 focus:outline-none focus:ring-4 focus:ring-sebaaq-blue/50"
              aria-label="تواصل معنا - اتصال مباشر"
            >
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" aria-hidden="true" />
              تواصل معنا
            </Button>
            
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-sebaaq-blue focus:ring-offset-2"
              aria-label={isOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          id="mobile-menu"
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
          role="menu"
          aria-hidden={!isOpen}
        >
          <div className="py-4 space-y-2 border-t">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                role="menuitem"
                className={`block px-4 py-3 rounded-lg transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-sebaaq-blue focus:ring-offset-2 ${
                  location.pathname === item.path
                    ? 'bg-sebaaq-blue text-white'
                    : 'text-sebaaq-midnight hover:bg-gray-100'
                }`}
                aria-current={location.pathname === item.path ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2">
              <Button 
                size="sm" 
                className="w-full sm:hidden bg-sebaaq-blue hover:bg-blue-600 text-white focus:outline-none focus:ring-4 focus:ring-sebaaq-blue/50"
                aria-label="تواصل معنا - اتصال مباشر"
              >
                <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
                تواصل معنا
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
