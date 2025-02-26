'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ basePath, label }) => {
  const path = usePathname();

  const isActiveLink = (currentPath) => (path.startsWith(currentPath) ? 'active' : undefined);

  return (
    <Link href={basePath} className={isActiveLink(basePath)}>
      {label}
    </Link>
  );
};

export default NavLink;
