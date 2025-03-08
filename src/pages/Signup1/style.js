import styled from "styled-components";

export const Container = styled.div`
  transform: scale(0.8, 0.8);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  margin-bottom: 4rem;
  color: #121212;
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  font-feature-settings: "liga" off, "clig" off;
  letter-spacing: -0.125rem;
`;

export const Button = styled.button`
  width: 32rem;
  height: 5.75rem;
  background-color: #34c759;
  color: #fcfcfc;
  border: none;
  border-radius: 0.625rem;
  margin-top: 3.5rem;
  font-size: 1.875rem;
  font-weight: 700;
  letter-spacing: -0.01rem;
  cursor: pointer;
`;