import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 72px;
  background-color: #34C759;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchBox = styled.div`
  width: 440px;
  height: 40px;
  padding: 4px 13px;
  margin: 0 44px;
  background-color: #FCFCFC;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Input = styled.input`
  width: 390px;
  height: 32px;
  font-size: inherit;
  font-family: "Pretendard";
  padding-left: 10px;
  background-color: none;
  color: none;
  border: none;

  &:focus {
    background-color: none;
    outline: none;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.div`
  color: ${({ isTrue }) => ( isTrue ? `#34C759` : `#FCFCFC`)};
  background-color: ${({ isTrue }) => ( isTrue ? `#FCFCFC` : `#34C759`)};
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  padding: 13px 16px;
  margin-left: 16px;
  border-radius: 8px;
`;

export const Icon = styled.img`
  padding: 20px 0 20px 28px;
`;