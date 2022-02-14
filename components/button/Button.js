import styled from 'styled-components';

const Button = styled.a`
  background: ${(props) =>
    props.Contact ? 'var(--color-primary)' : 'var(--c-bg)'};
  color: ${(props) => (props.Contact ? 'black' : 'var(--color-white)')};
  border: ${(props) =>
    props.Contact ? '1px solid var(--c-bg)' : '1px solid var(--color-white)'};
  display: flex;
  padding: 1rem 3rem;
  font-weight: var(--font-medium);
  border-radius: 15px;
  :hover {
    background: var(--color-primary);
    color: black;
    border: 1px solid var(--c-bg);
  }
`;
export default Button;
