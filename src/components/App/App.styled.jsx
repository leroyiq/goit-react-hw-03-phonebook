import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 500px;
  max-width: 50vw;
  min-width: 300px;
  margin: 0 auto;
  margin-top: 30vh;

  :hover {
    box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
  }
`;

export const Title = styled.h2`
  font-family: Verdana, Geneva, sans-serif;
  font-size: 25px;
  letter-spacing: 2px;
  word-spacing: 2px;
  color: #000000;
  font-weight: normal;
  text-decoration: none;
  font-style: normal;
  font-variant: small-caps;
  text-transform: none;
  text-align: center;
  color: #d9d9d9;
  background: #e8e8e8;
  text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
    1px 1px 1px rgba(0, 0, 0, 0.5), 5px -3px 0px rgba(206, 89, 55, 0);
  color: #332b0f;
  background: #fefffc;
`;
