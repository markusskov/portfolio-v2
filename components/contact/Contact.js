import CardTitle from '../text/CardTitle';
import Button from '../button/Button';
import styled from 'styled-components';

const ContactWrapper = styled.div`
  margin: 2rem 0 3rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`;

export default function Contact() {
  return (
    <ContactWrapper>
      <CardTitle>Got questions or just want to talk?</CardTitle>
      <Button Contact href="">
        Contact me
      </Button>
    </ContactWrapper>
  );
}
