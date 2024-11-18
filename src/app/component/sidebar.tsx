// component/sidebar.tsx
import Link from 'next/link';
import { useState } from 'react';
import { FaTachometerAlt, FaChartBar,FaEnvelope, FaUser, FaCog,FaSignOutAlt } from 'react-icons/fa';
import Image from 'next/image';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const companyName = "VNATech";
  const companyLogo = "/imgs/logo.png";
  const companyWebsite = "https://vnatech.com.vn/";
  const handleLogoClick = () => {
    window.open(companyWebsite, '_blank');
  };


  const menuItems = [
    { name: 'Dashboard', icon: FaTachometerAlt, href: '/' },
    { name: 'Thống kê', icon: FaChartBar, href: 'pages/report' },
    { name: 'Email', icon: FaEnvelope , href: '/calendar' },
    { name: 'Tài khoản', icon: FaUser, href: '/pages/accounts' },
    { name: 'Cài đặt', icon: FaCog, href: '/pages/settings' },
    { name: 'Đăng xuất', icon: FaSignOutAlt, href: '/pages/logout' },
    
  ];

  return (
    <div
      className={`transition-all duration-300 ease-in-out fixed top-0 left-0 h-full bg-gray-800 text-white ${
        isExpanded ? 'w-64' : 'w-16'
      }`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="flex items-center justify-center w-full h-12">
        <Link href={companyWebsite}>
        <div className="flex items-center justify-center w-full h-12" onClick={handleLogoClick}>
        <div className="rounded-full overflow-hidden">
          <Image src={companyLogo} alt="Logo" width={50} height={50} />
        </div>
        <span className={`text-xl font-bold ${isExpanded ? 'block' : 'hidden'}`}>{companyName}</span>
      </div>
        </Link>
      </div>

      <ul className={`flex flex-col items-center ${isExpanded ? 'items-start pl-4' : 'items-center'} space-y-6 mt-12`}>
        {menuItems.map((item) => (
          <li key={item.name} className="hover:bg-gray-700 w-full">
            <Link href={item.href}>
              <div className="flex items-center w-full h-12 hover:bg-gray-700 rounded">
                <item.icon size={24} />
                <span className={`ml-2 transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>{item.name}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
