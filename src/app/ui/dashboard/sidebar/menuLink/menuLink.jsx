"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MenuLink = ({ item }) => {
  const pathname = usePathname();

  return (
    <Link href={item.path} legacyBehavior>
      <a className={`flex items-center gap-2 px-5 py-2 my-1 rounded-lg ${pathname === item.path ? 'bg-gray-700' : ''}`}>
        {item.icon}
        {item.title}
      </a>
    </Link>
  );
};

export default MenuLink;
