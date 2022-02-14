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
  justify-content: space-between;
  align-items: center;
`;

const FlexColumn = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Skill = styled.h3`
  color: var(--color-primary);
  font-size: var(--font-size-subheader);
`;

const Icon = styled.img`
  padding-right: 15px;
  margin-bottom: 0.5rem;
  height: 30px;
  ${media.lessThan('medium')`
  padding-right: 5px;
  
`};
`;

export default function Experience() {
  return (
    <Wrapper id="experience">
      <CardWrapper>
        <TopCards>
          <H1>Experience</H1>
          <FlexBetween>
            <FlexColumn>
              <CardText>
                2022 - Now | <b>Junior Fron-end Developer @VG</b>
              </CardText>
              <CardText>
                2020 - 2022 | <b>Student in Front-end Development @Noroff</b>
              </CardText>
              <CardText>
                2018 - 2020 |{' '}
                <b>
                  Design By Markus. Own business creating designs to local
                  businesses in Molde.
                </b>
              </CardText>
              <CardText>
                2016 - 2018 |{' '}
                <b>Student in Graphic Design @ Høyskolen Kristiania</b>
              </CardText>
            </FlexColumn>
          </FlexBetween>
        </TopCards>
      </CardWrapper>
    </Wrapper>
  );
}
