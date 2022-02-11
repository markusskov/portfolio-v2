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

export default function Skills() {
  return (
    <Wrapper>
      <H1>Skills</H1>
      <CardWrapper>
        <TopCards>
          <FlexBetween>
            <FlexColumn>
              <Icon src="/images/html-yellow.svg" alt="html" />
              <Skill>HTML</Skill>
              <CardText>
                Writing good semantic code is essential for good SEO
                optimalization.
              </CardText>
            </FlexColumn>
          </FlexBetween>
        </TopCards>
        <TopCards>
          <FlexBetween>
            <FlexColumn>
              <Icon src="/images/css-yellow.svg" alt="css" />
              <Skill>CSS</Skill>
              <CardText>
                A website is not much without styling. Colors, layout and style
                is how others view your brand.
              </CardText>
            </FlexColumn>
          </FlexBetween>
        </TopCards>
        <TopCards>
          <FlexBetween>
            <FlexColumn>
              <Icon src="/images/js-yellow.svg" alt="javascript" />
              <Skill>Javascript</Skill>
              <CardText>
                Making a website interactive today is a must. With javascript
                you have endless options on how to make your website dynamic.
              </CardText>
            </FlexColumn>
          </FlexBetween>
        </TopCards>
      </CardWrapper>
      <CardWrapper>
        <TopCards>
          <FlexBetween>
            <FlexColumn>
              <Icon src="/images/figma-yellow.svg" alt="figma" />
              <Skill>Figma / XD</Skill>
              <CardText>
                Every website starts with the design. With figma / XD you find
                the colors, fonts, style and layout of the website.
              </CardText>
            </FlexColumn>
          </FlexBetween>
        </TopCards>
        <TopCards>
          <FlexBetween>
            <FlexColumn>
              <Icon src="/images/ps-yellow.svg" alt="photoshop" />
              <Skill>Photoshop</Skill>
              <CardText>
                Mainpulate, change, add effects and build images for the
                website.
              </CardText>
            </FlexColumn>
          </FlexBetween>
        </TopCards>
        <TopCards>
          <FlexBetween>
            <FlexColumn>
              <Icon src="/images/illustrator-yellow.svg" alt="illustrator" />
              <Skill>Illustrator</Skill>
              <CardText>
                Vector graphic scales without loosing quality. Great for icons,
                illustrations and logos.
              </CardText>
            </FlexColumn>
          </FlexBetween>
        </TopCards>
      </CardWrapper>
    </Wrapper>
  );
}
