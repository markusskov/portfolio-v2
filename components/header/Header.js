import styled from 'styled-components';
import media from 'styled-media-query';

const Header = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.lessThan('medium')`
  flex-direction: column;
`}
`;

export default Header;
