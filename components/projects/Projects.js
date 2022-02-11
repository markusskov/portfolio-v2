import styled from 'styled-components';
import media from 'styled-media-query';
import H1 from '../text/Title';
import TopCards from '../cards/TopCard';
import Work from './Work';
import CardTitle from '../text/CardTitle';
import CardText from '../text/cardText';
import CardWrapper from '../cards/CardWrapper';

const BottomCard = styled.section`
  margin: 2rem 1rem;
  border-radius: 15px;
  padding: 1rem;
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
  margin-top: 2rem;
  ${media.lessThan('medium')`
  flex-direction: column;
  
`}
`;

const Icons = styled.div`
  flex: 1;
`;

const Icon = styled.img`
  padding-right: 15px;
  margin-bottom: 0.5rem;
  ${media.lessThan('medium')`
  padding-right: 5px;
  
`}
`;
export default function Projects() {
  return (
    <BottomCard id="projects">
      <H1>Projects</H1>
      <CardWrapper>
        <TopCards>
          <FlexBetween>
            <FlexColumn>
              <Work>Frontend Development</Work>
              <CardTitle>CryptoNation Website</CardTitle>
            </FlexColumn>
            <a href="https://github.com/markusskov/cryptoNation">
              <Icon src="/images/github.svg" alt="github" />
            </a>
          </FlexBetween>
          <CardText>
            Cryptionation is a crupto currency tracker buildt with HTML, SCSS &
            Javascript. It fetches data in real time for updated values on the
            top 100 coins.
          </CardText>
          <IconWrapper>
            <Icons>
              <Icon src="/images/html.svg" alt="html" />
              <Icon src="/images/css.svg" alt="css" />
              <Icon src="/images/js.svg" alt="js" />
            </Icons>
            <CardText>
              <a
                href="https://cryptonation.netlify.app/"
                style={{ textDecoration: 'underline' }}
              >
                View Website &gt;{' '}
              </a>
            </CardText>
          </IconWrapper>
        </TopCards>
        <TopCards>
          <FlexBetween>
            <FlexColumn>
              <Work>Frontend Development</Work>
              <CardTitle>Shoue Ecommerse Website</CardTitle>
            </FlexColumn>
            <a href="https://github.com/markusskov/shoue">
              <Icon src="/images/github.svg" alt="github" />
            </a>
          </FlexBetween>
          <CardText>
            Shoue is a e-commerce store built with HTML, SCSS and Javascript on
            the front end. Uses Strapi and Heroku for the backend to get items.
          </CardText>
          <IconWrapper>
            <Icons>
              <Icon src="/images/html.svg" alt="html" />
              <Icon src="/images/css.svg" alt="css" />
              <Icon src="/images/js.svg" alt="js" />
            </Icons>
            <CardText>
              <a
                href="https://shoue.netlify.app/"
                style={{ textDecoration: 'underline' }}
              >
                View Website &gt;{' '}
              </a>
            </CardText>
          </IconWrapper>
        </TopCards>
      </CardWrapper>
    </BottomCard>
  );
}
