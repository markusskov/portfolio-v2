import styled from 'styled-components';
import media from 'styled-media-query';
import H1 from '../text/Title';
import TopCards from '../cards/TopCard';
import Work from './Work';
import CardTitle from '../text/CardTitle';
import CardText from '../text/CardText';
import CardWrapper from '../cards/CardWrapper';
import ProjectCards from '../cards/ProjectCards';
import Image from 'next/image';

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
        <ProjectCards>
          <FlexBetween>
            <FlexColumn>
              <Work>Frontend Development</Work>
              <CardTitle>Holidaze</CardTitle>
            </FlexColumn>
            <a href="https://github.com/markusskov/holidaze">
              <Icon src="/images/github.svg" alt="github" />
            </a>
          </FlexBetween>
          <Image
            src={'/images/holidazeMockup.png'}
            alt={'screenshot'}
            width={1075 / 2}
            height={796 / 2}
          />
          <CardText>
            Holidaze is a hotel agency site built with NextJS, and SCSS the
            front end. Uses Strapi and Heroku for the backend to get items.
            Project Exam 2.
          </CardText>
          <IconWrapper>
            <Icons>
              <Icon src="/images/nextjs.svg" alt="html" />
              <Icon src="/images/css.svg" alt="css" />
            </Icons>
            <CardText>
              <a
                href="https://holidaze-tau.vercel.app/"
                style={{ textDecoration: 'underline' }}
              >
                View Website &gt;{' '}
              </a>
            </CardText>
          </IconWrapper>
        </ProjectCards>
        <ProjectCards>
          <FlexBetween>
            <FlexColumn>
              <Work>Frontend Development</Work>
              <CardTitle>Frameworks CA</CardTitle>
            </FlexColumn>
            <a href="https://github.com/Noroff-FEU-Assignments/js-frameworks-course-assignment-markusskov">
              <Icon src="/images/github.svg" alt="github" />
            </a>
          </FlexBetween>
          <Image
            src={'/images/caMockup.png'}
            alt={'screenshot'}
            width={1075 / 2}
            height={796 / 2}
          />
          <CardText>
            Course assignment were we had to include, navigation, contact form,
            dynamic routes, and items in spesific order.
          </CardText>
          <IconWrapper>
            <Icons>
              <Icon src="/images/nextjs.svg" alt="nextjs" />
            </Icons>
            <CardText>
              <p href="#" style={{ textDecoration: 'line-through' }}>
                No website{' '}
              </p>
            </CardText>
          </IconWrapper>
        </ProjectCards>

        <ProjectCards>
          <FlexBetween>
            <FlexColumn>
              <Work>Frontend Development</Work>
              <CardTitle>Shoue Ecommerse Website</CardTitle>
            </FlexColumn>
            <a href="https://github.com/markusskov/shoue">
              <Icon src="/images/github.svg" alt="github" />
            </a>
          </FlexBetween>
          <Image
            src={'/images/shoueMockup.png'}
            alt={'screenshot'}
            width={1075 / 2}
            height={796 / 2}
          />
          <CardText>
            Shoue is a e-commerce store built with HTML, SCSS and Javascript on
            the front end. Uses Strapi and Heroku for the backend to get items.
            Semester Project 2.
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
        </ProjectCards>
        <ProjectCards>
          <FlexBetween>
            <FlexColumn>
              <Work>Frontend Development</Work>
              <CardTitle>CryptoNation Website</CardTitle>
            </FlexColumn>
            <a href="https://github.com/markusskov/cryptoNation">
              <Icon src="/images/github.svg" alt="github" />
            </a>
          </FlexBetween>
          <Image
            src={'/images/cryptoMockup.png'}
            alt={'screenshot'}
            width={1075 / 2}
            height={796 / 2}
          />
          <CardText>
            Cryptionation is a crupto currency tracker buildt with HTML, SCSS &
            Javascript. It fetches data in real time for updated values on the
            top 100 coins. Hobby project.
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
        </ProjectCards>
      </CardWrapper>
    </BottomCard>
  );
}
