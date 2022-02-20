import styled from "styled-components";
import media from "styled-media-query";
import AboutText from "./AboutText";

const IntroWrapper = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  gap: 2rem;

  // NOTE: You should always code mobile first.
  ${media.lessThan("medium")`
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

export default function AboutSection() {
  return (
    <IntroWrapper>
      <AboutText />
      <ImageWrapper>
        <HeaderImg src="/images/introimage.svg" alt="Intro-Image" />
      </ImageWrapper>
    </IntroWrapper>
  );
}
