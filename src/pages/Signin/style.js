import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  position: absolute;
  top: 120px;
  color: #121212;
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  font-feature-settings: "liga" off, "clig" off;
  letter-spacing: -2px;
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 270px;
`;

export const GogoPassword = styled.div`
  width: 580px;
  margin-top: 10px;
`;

export const GogoSignup = styled.div`
  width: 580px;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Sentence = styled.span`
  color: #121212;
  font-family: "NotoSansKR";
  font-size: 20px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.5px;
`;

export const Link = styled.span`
  color: #34c759;
  font-family: "NotoSansKR";
  font-size: 20px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.5px;
  margin-left: 5px;
`;

export const Button = styled.button`
  width: 512px;
  height: 92px;
  background-color: #34c759;
  color: #fcfcfc;
  border: none;
  border-radius: 10px;
  margin-top: 43px;
  font-size: 30px;
  font-family: "Prestandard";
  font-weight: 700;
  letter-spacing: -0.16px;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
