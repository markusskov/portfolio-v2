import styled from 'styled-components';
import media from 'styled-media-query';
import Button from '../button/Button';
import H1 from '../text/Title';

const TextWrapper = styled.div`
  flex-direction: column;

  ${media.lessThan('medium')`
  justify-content: center;
  align-items: center;
  
`}
`;

const Para = styled.p`
  font-family: var(--font-family);
  font-size: var(--font-size-body);
  font-weight: var(--font-regular)
  color: var(--color-white);
  line-height: 22px;
  margin: 1rem 0;
  max-width: 900px;

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

export default function AboutText() {
  return (
    <TextWrapper>
      <H1>About me</H1>
      <Para>
        Hi! Im Markus, a 26 year old frontend developer student @ Noroff, and
        Junior Developer at VG.
      </Para>
      <Para> I like to create projects that can make a difference.</Para>
      <Para>
        Im an earlier graphic design student, so I have good expierence with
        Creative Cloud programs (Ps, In, Il, XD) and wordpress. Currently
        learning to code react / NextJS to take things to the next level.
      </Para>
      <ButtonWrapper>
        <Button href="#">Contact Me</Button>
      </ButtonWrapper>
    </TextWrapper>
  );
}
