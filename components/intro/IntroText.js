import styled from 'styled-components';
import media from 'styled-media-query';
import PrimaryButton from '../button/Button';
import H1 from '../text/Title';

const TextWrapper = styled.div`
  flex-direction: column;

  ${media.lessThan('medium')`
  justify-content: center;
  align-items: center;
  
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
  font-weight: var(--font-regular)
  color: var(--color-white);
  line-height: 22px;

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

const BigSeparator = styled.div`
  width: 100%;
  height: 7px;
  background-color: var(--color-primary);
`;

export default function IntroText() {
  return (
    <TextWrapper>
      <H1>Hi, Im Markus</H1>
      <BigSeparator />
      <H2>
        <b>Front-end developer & Graphic Designer</b>
      </H2>
      <Para>Student @ Noroff</Para>
      <Para>Junior Developer @ VG</Para>
      <ButtonWrapper>
        <PrimaryButton href="#projects">My Work</PrimaryButton>
      </ButtonWrapper>
    </TextWrapper>
  );
}
