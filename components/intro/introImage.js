import styled from 'styled-components';

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

export default function IntroImage() {
  return (
    <ImageWrapper>
      <HeaderImg src="/images/introimage.svg" alt="Intro-Image" />
    </ImageWrapper>
  );
}
