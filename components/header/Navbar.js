import styled from 'styled-components';
import NavItems from './NavLinks';
import Link from 'next/link';
import media from 'styled-media-query';

const navlinks = [
  { name: 'Home', href: '/#', current: true },
  { name: 'Projects', href: '/#projects', current: false },
  { name: 'Skills', href: '/#skills', current: false },
  { name: 'About', href: '/about', current: false },
];

const Icon = styled.img`
  padding-right: 15px;
  margin-bottom: 0.5rem;
  height: 20px;
  width: 40px;
  object-fit: contain;
  ${media.lessThan('medium')`
  display: none;
  
`}
`;

export default function Navigation() {
  return (
    <>
      <Icon src="/images/logo.svg"></Icon>
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
      <div>
        <a href="https://github.com/markusskov">
          <Icon src="/images/github-grey.svg"></Icon>
        </a>
        <a href="https://no.linkedin.com/in/markusskov">
          <Icon src="/images/linkedin.svg"></Icon>
        </a>
      </div>
    </>
  );
}
