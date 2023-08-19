'use client';
import React, { useState, useMemo } from 'react';
import { HiMenuAlt3, HiHome } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import { GrClose } from 'react-icons/gr';
import { usePathname } from 'next/navigation';
import { MenuItem } from './MenuItem';

const Menu = () => {
  const [open, setOpen] = useState(true);
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: 'Home',
        active: pathname !== '/search',
        href: '/',
      },
      {
        icon: BiSearch,
        label: 'Search',
        active: pathname === '/search',
        href: '/search',
      },
    ],
    [pathname]
  );
  return (
    <div>
      {!open ? <GrClose size={24} /> : <HiMenuAlt3 size={24} />}
      <div className="absolute bg-bgColor w-full g-8 text-textColor left-0 top-24 h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-3xl ">
        {routes.map((route) => (
          <MenuItem key={route.href} {...route} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
