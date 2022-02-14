import styled from 'styled-components';
import NavItems from './NavLinks';
import media from 'styled-media-query';

const navlinks = [
  { name: 'Home', href: '/#' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Skills', href: '/#skills' },
  { name: 'About', href: '/about' },
];

const Icon = styled.img`
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
