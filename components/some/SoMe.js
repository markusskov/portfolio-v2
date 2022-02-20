import styled from "styled-components";
import CardWrapper from "../cards/CardWrapper";
import TopCards from "../cards/TopCard";
import CardText from "../text/CardText";
import H1 from "../text/Title";

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
  z-index: 3;
  }
`;

export default function SoMe() {
  return (
    <Wrapper id="SoMe">
      <H1>Get to know me better</H1>
      <CardWrapper>
        {/* TODO: DRY - use map */}
        <TopCards>
          <a href="https://no.linkedin.com/in/markusskov">
            <FlexBetween>
              <FlexColumn>
                <Icon src="/images/linkedin.svg" alt="linkedIn" />
                <CardText YellowHover>LinkedIn</CardText>
              </FlexColumn>
            </FlexBetween>
          </a>
        </TopCards>
        <TopCards>
          <a href="https://github.com/markusskov">
            <FlexBetween>
              <FlexColumn>
                <Icon src="/images/github-grey.svg" alt="Github" />
                <CardText YellowHover>Github</CardText>
              </FlexColumn>
            </FlexBetween>
          </a>
        </TopCards>
        <TopCards>
          <a href="https://www.instagram.com/designbymarkus/?hl=en">
            <FlexBetween>
              <FlexColumn>
                <Icon src="/images/instagram.svg" alt="Instagram" />
                <CardText YellowHover>Instagram</CardText>
              </FlexColumn>
            </FlexBetween>
          </a>
        </TopCards>
      </CardWrapper>
    </Wrapper>
  );
}
