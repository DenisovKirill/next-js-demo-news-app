import Link from 'next/link';
import NavLink from '@/components/mainHeader/navLink/NavLink';

const MainHeader = () => {
  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">NextNews</Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink basePath={'/news'} label={'News'} />
          </li>
          <li>
            <NavLink basePath={'/archive'} label={'Archive'} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
