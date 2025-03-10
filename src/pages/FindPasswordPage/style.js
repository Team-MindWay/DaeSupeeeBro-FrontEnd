import styled from "styled-components";

export const Container = styled.div`
  transform: scale(0.8, 0.8);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
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
  margin-top: 8rem;
  background-color: #34c759;
  color: #fcfcfc;
  border: none;
  border-radius: 0.625rem;
  font-size: 1.875rem;
  font-weight: 700;
  letter-spacing: -0.01rem;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  margin-top: 4.625rem;
`;
