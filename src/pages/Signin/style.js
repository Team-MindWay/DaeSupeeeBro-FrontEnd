import styled from "styled-components";

export const Container = styled.div`
  transform: scale(0.8, 0.8);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  position: absolute;
  top: 7.5rem;
  color: #121212;
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: -0.125rem;
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 16.875rem;
`;

export const GogoPassword = styled.div`
  width: 36.25rem;
  margin-top: 0.625rem;
`;

export const GogoSignup = styled.div`
  width: 36.25rem;
  margin-top: 0.625rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Sentence = styled.span`
  color: #121212;
  font-family: "NotoSansKR";
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.375rem;
  letter-spacing: -0.03125rem;
`;

export const Link = styled.span`
  color: #34c759;
  font-family: "NotoSansKR";
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.375rem;
  letter-spacing: -0.03125rem;
  margin-left: 0.3125rem;
`;

export const Button = styled.button`
  width: 32rem;
  height: 5.75rem;
  background-color: #34c759;
  color: #fcfcfc;
  border: none;
  border-radius: 0.625rem;
  margin-top: 2.6875rem;
  font-size: 1.875rem;
  font-weight: 700;
  letter-spacing: -0.01rem;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  top: 39rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
