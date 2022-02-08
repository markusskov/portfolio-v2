import styled from 'styled-components';
import media from 'styled-media-query';
import H1 from '../text/Title';
import TopCards from './TopCard';
import Work from './Work';
import CardTitle from '../text/CardTitle';
import BodyText from '../text/BodyText';

const BottomCard = styled.div`
  margin: 1rem;
  background-color: var(--color-background-top);
  border-radius: 15px;
  padding: 1rem;
`;

const TopCardsWrapper = styled.div`
  margin: 1rem;
  border-radius: 15px;
  padding: 1rem;
  display: flex;
  gap: var(--flex-gap);

  ${media.lessThan('medium')`
  flex-direction: column;
  
`}
`;

const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FlexColumn = styled.div`
  flex-direction: column;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;

  ${media.lessThan('medium')`
  flex-direction: column;
  align-items: center;
  
`}
`;

const Icons = styled.div`
  flex: 1;
`;

const Icon = styled.img`
  margin: 5px;
`;
export default function Projects() {
  return (
    <BottomCard>
      <H1>Projects</H1>
      <TopCardsWrapper>
        <TopCards>
          <FlexBetween>
            <FlexColumn>
              <Work>Frontend Development</Work>
              <CardTitle>CryptoNation Website</CardTitle>
            </FlexColumn>
            <a href="https://github.com/markusskov/cryptoNation">
              <img src="/images/github.svg" alt="github" />
            </a>
          </FlexBetween>
          <BodyText>
            Cryptionation is a crupto currency tracker buildt with HTML, SCSS &
            Javascript. It fetches data in real time for updated values on the
            top 100 coins.
          </BodyText>
          <IconWrapper>
            <Icons>
              <Icon src="/images/html.svg" alt="html" />
              <Icon src="/images/css.svg" alt="css" />
              <Icon src="/images/js.svg" alt="js" />
            </Icons>
            <BodyText>
              <a href="">View Website &gt; </a>
            </BodyText>
          </IconWrapper>
        </TopCards>
        <TopCards>
          <FlexBetween>
            <FlexColumn>
              <Work>Frontend Development</Work>
              <CardTitle>Shoue Ecommerse Website</CardTitle>
            </FlexColumn>
            <a href="https://github.com/markusskov/shoue">
              <img src="/images/github.svg" alt="github" />
            </a>
          </FlexBetween>
          <BodyText>
            Shoue is a e-commerce store built with HTML, SCSS and Javascript on
            the front end. Strapi and Heroku for back end.
          </BodyText>
          <IconWrapper>
            <Icons>
              <Icon src="/images/html.svg" alt="html" />
              <Icon src="/images/css.svg" alt="css" />
              <Icon src="/images/js.svg" alt="js" />
            </Icons>
            <BodyText>
              <a href="">View Website &gt; </a>
            </BodyText>
          </IconWrapper>
        </TopCards>
      </TopCardsWrapper>
    </BottomCard>
  );
}
