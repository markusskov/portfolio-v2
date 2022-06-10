import styled from 'styled-components';
import media from 'styled-media-query';

const CardWrapper = styled.div`
  margin: 1rem 0;
  border-radius: 15px;
  display: flex;
  flex-wrap: wrap;
  gap: var(--flex-gap);

  ${media.lessThan('medium')`
  flex-direction: column;
  
`}
`;

export default CardWrapper;
