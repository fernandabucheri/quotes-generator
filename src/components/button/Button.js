import styled from 'styled-components';

export const Button = styled.button`
  background: aliceblue;
  color: black;
  border: none;
  border-radius: 100%;
  font-size: 1.5em;
  padding: 10px 20px;
  font-family: "Times New Roman", serif;
  cursor: pointer;
  box-shadow: black 2px 2px;
  &:hover {
    background-color: #a9fffa;
  }
  &:focus {
    outline: none;
  }
`;