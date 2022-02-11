import styled from 'styled-components';
import media from 'styled-media-query';
import IntroImage from '../intro/IntroImage';
import AboutText from './AboutText';

const IntroWrapper = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  gap: 2rem;

  ${media.lessThan('medium')`
  flex-direction: column-reverse;
  
`}
`;

export default function AboutSection() {
  return (
    <IntroWrapper>
      <AboutText />
      <IntroImage />
    </IntroWrapper>
  );
}
