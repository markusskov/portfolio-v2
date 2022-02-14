import styled from 'styled-components';
import media from 'styled-media-query';
import IntroText from './IntroText';

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
const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const HeaderImg = styled.img`
  object-fit: contain;
  height: 90%;
  width: 90%;
`;

export default function Intro() {
  return (
    <IntroWrapper>
      <IntroText />
      <ImageWrapper>
        <HeaderImg src="/images/introimage.svg" alt="Intro-Image" />
      </ImageWrapper>
    </IntroWrapper>
  );
}
