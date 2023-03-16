import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  max-width: 100%;
  gap: 10px;
  background-color: #c7dfb832;
  border: none;
  border: 3px solid #1c6ea4;
  border-radius: 19px;
`;

export const Button = styled.button`
  box-shadow: inset 0px 1px 0px 0px #97c4fe;
  background: linear-gradient(to bottom, #3d94f6 5%, #1e62d0 100%);
  background-color: #3d94f6;
  border-radius: 6px;
  border: 1px solid #337fed;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #1570cd;

  :hover {
    background: linear-gradient(to bottom, #1e62d0 5%, #3d94f6 100%);
    background-color: #1e62d0;
  }
  :active {
    position: relative;
    top: 1px;
  }
`;
