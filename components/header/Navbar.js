import styled from 'styled-components';
import NavItems from './NavLinks';

const navlinks = [
  { name: 'Home', href: '#nav', current: true },
  { name: 'Projects', href: '#projects', current: false },
  { name: 'Skills', href: '#', current: false },
  { name: 'About', href: '#', current: false },
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
