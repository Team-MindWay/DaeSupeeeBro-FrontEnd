import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 4.5rem;
  padding: 0 18.56rem;
  position: fixed;
  top: 0;
  background-color: #34c759;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchBox = styled.div`
  width: 35.625rem;
  height: 2.5rem;
  margin: 0 2.75rem;
  padding: 0 1.38rem;
  background-color: #fcfcfc;
  border-radius: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Input = styled.input`
  width: 33rem;
  height: 2rem;
  font-size: inherit;
  font-family: "Pretendard";
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
  color: ${({ isTrue }) => (isTrue ? `#34C759` : `#FCFCFC`)};
  background-color: ${({ isTrue }) => (isTrue ? `#FCFCFC` : `#34C759`)};
  font-size: 1.25rem;
  font-weight: 700;
  text-align: center;
  padding: 0.8125rem 1rem;
  margin-left: 1rem;
  border-radius: 0.5rem;
`;

export const Icon = styled.img`
  padding: 1.25rem 0 1.25rem 1.75rem;
`;
