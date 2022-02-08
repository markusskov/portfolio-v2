import styled from 'styled-components';
import media from 'styled-media-query';

const H1 = styled.h1`
  font-family: var(--font-family);
  font-size: var(--font-size-header);
  font-weight: var(--font-bold);
  color: var(--color-white);
  margin: 0.5rem 0;
  ${media.lessThan('medium')`
  text-align:center;
  
`}
`;
export default H1;
