
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'الرئيسية' },
    { path: '/consultation-services', label: 'الخدمات الاستشارية' },
    { path: '/sebaaq-machine', label: 'سـي بـاك ماشـين' }
  ];

  return (
    <nav className="bg-white shadow-md border-b sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8 space-x-reverse">
            <Link to="/" className="font-playfair text-2xl font-bold text-sebaaq-midnight">
              سـي بـاك
            </Link>
            <div className="hidden md:flex items-center space-x-6 space-x-reverse">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg transition-colors font-medium ${
                    location.pathname === item.path
                      ? 'bg-sebaaq-blue text-white'
                      : 'text-sebaaq-midnight hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <Button className="bg-sebaaq-blue hover:bg-blue-600 text-white">
            تواصل معنا
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
