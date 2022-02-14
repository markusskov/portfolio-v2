import styled from 'styled-components';
import media from 'styled-media-query';
import CardWrapper from '../cards/CardWrapper';
import TopCards from '../cards/TopCard';
import CardText from '../text/cardText';
import H1 from '../text/Title';

const Wrapper = styled.section`
  margin: 2rem 1rem;
  padding: 1rem;
`;

const FlexBetween = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.img`
  margin-bottom: 0.5rem;
  height: 30px;
  align-self: center;
`;

export default function SoMe() {
  return (
    <Wrapper id="SoMe">
      <H1>Get to know me better</H1>
      <CardWrapper>
        <TopCards>
          <a href="https://no.linkedin.com/in/markusskov">
            <FlexBetween>
              <FlexColumn>
                <Icon src="/images/linkedin.svg" alt="html" />
                <CardText>LinkedIn</CardText>
              </FlexColumn>
            </FlexBetween>
          </a>
        </TopCards>
        <TopCards>
          <a href="https://github.com/markusskov">
            <FlexBetween>
              <FlexColumn>
                <Icon src="/images/github-grey.svg" alt="html" />
                <CardText>Github</CardText>
              </FlexColumn>
            </FlexBetween>
          </a>
        </TopCards>
        <TopCards>
          <a href="https://www.instagram.com/designbymarkus/?hl=en">
            <FlexBetween>
              <FlexColumn>
                <Icon src="/images/instagram.svg" alt="html" />
                <CardText>Instagram</CardText>
              </FlexColumn>
            </FlexBetween>
          </a>
        </TopCards>
      </CardWrapper>
    </Wrapper>
  );
}
