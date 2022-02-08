import styled from 'styled-components';

const ImageWrapper = styled.div`
  width: 100%;
  max-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  object-fit: contain;
  height: 100%;
`;

export default function IntroImage() {
  return (
    <ImageWrapper>
      <Image src="/images/introImage.png" alt="Intro Image" />
    </ImageWrapper>
  );
}
