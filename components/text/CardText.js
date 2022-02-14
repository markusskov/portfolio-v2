import styled from 'styled-components';

const CardText = styled.p`
  font-family: var(--font-family);
  font-size: var(--font-size-body);
  font-weight: var(--font-regular)
  color: var(--color-white);
  line-height: 22px;
  margin-top: 1rem;
  
  :hover {
    color: ${(props) =>
      props.YellowHover ? 'var(--color-primary)' : 'var(--color-white)'};
  }`;

export default CardText;
