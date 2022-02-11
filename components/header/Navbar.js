import styled from 'styled-components';
import NavItems from './NavLinks';
import Link from 'next/link';

const navlinks = [
  { name: 'Home', href: '/#', current: true },
  { name: 'Projects', href: '/#projects', current: false },
  { name: 'Skills', href: '/#skills', current: false },
  { name: 'About', href: '/about', current: false },
];

export default function Navigation() {
  return (
    <>
      <div className="nav">
        <ul className="navlinks">
          <li>
            {navlinks.map((item) => (
              <NavItems key={item.name} href={item.href}>
                {item.name}
              </NavItems>
            ))}
          </li>
        </ul>
      </div>
    </>
  );
}
