import styled from 'styled-components';
import media from 'styled-media-query';
import PrimaryButton from '../button/Button';

const TextWrapper = styled.div`
  flex-direction: column;

  ${media.lessThan('medium')`
  justify-content: center;
  align-items: center;
  
`}
`;

const H1 = styled.h1`
  font-family: var(--font-family);
  font-size: var(--font-size-header);
  color: var(--color-white);
  margin: 0.5rem 0;
  ${media.lessThan('medium')`
  text-align:center;
  
`}
`;

const H2 = styled.h2`
  font-family: var(--font-family);
  font-size: var(--font-size-subheader);
  color: var(--color-white);
  margin: 1rem 0;

  ${media.lessThan('medium')`
  text-align:center;
  
`}
`;

const Para = styled.p`
  font-family: var(--font-family);
  font-size: var(--font-size-body);
  color: var(--color-white);

  ${media.lessThan('medium')`
  text-align:center;
  
`}
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin 1rem 0;

  ${media.lessThan('medium')`
  align-items: center;
  justify-content: center;
`}
`;

const Separator = styled.div`
  width: 100%;
  height: 7px;
  background-color: var(--color-primary);
`;

export default function IntroText() {
  return (
    <TextWrapper>
      <H1>Hi, Im Markus</H1>
      <Separator />
      <H2>
        <b>Front-end developer & Graphic Designer</b>
      </H2>
      <Para>Student @ Noroff</Para>
      <Para>Junior Developer @ VG</Para>
      <ButtonWrapper>
        <PrimaryButton href="#">My Work</PrimaryButton>
      </ButtonWrapper>
    </TextWrapper>
  );
}
