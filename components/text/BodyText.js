import styled from 'styled-components';
import media from 'styled-media-query';

const BodyText = styled.p`
  font-family: var(--font-family);
  font-size: var(--font-size-body);
  font-weight: var(--font-regular)
  color: var(--color-white);
  line-height: 22px;
  margin: 1rem 0;

  ${media.lessThan('medium')`
  text-align: center;
  
`}
`;

export default BodyText;
