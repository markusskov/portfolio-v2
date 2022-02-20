import CardTitle from "../text/CardTitle";
import Button from "../button/Button";
import styled from "styled-components";

const ContactWrapper = styled.section`
  margin: 2rem 0 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Contact() {
  return (
    <ContactWrapper>
      <CardTitle>Got questions or just want to talk?</CardTitle>
      {/* TODO: Use mail to */}
      <Button Contact href="">
        Contact me
      </Button>
    </ContactWrapper>
  );
}
