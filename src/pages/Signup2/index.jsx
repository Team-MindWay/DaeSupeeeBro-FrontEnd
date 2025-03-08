import * as S from "./style";
import InputBox from "../../components/InputBox";

function Signup() {
  return (
    <S.Container>
      <S.Title>회원가입</S.Title>
      <InputBox type="text" text="이름" eye={false} />
      <S.Select name="학년">
        <S.Option value="">학년</S.Option>
        <S.Option value="1학년">1학년</S.Option>
        <S.Option value="2학년">2학년</S.Option>
        <S.Option value="3학년">3학년</S.Option>
      </S.Select>

      <S.Select name="학과">
        <S.Option value="">학과</S.Option>
        <S.Option value="SW개발과">SW개발과</S.Option>
        <S.Option value="스마트IoT과">스마트IoT과</S.Option>
        <S.Option value="AI과">AI과</S.Option>
      </S.Select>
      <S.Button>회원가입</S.Button>
    </S.Container>
  );
}

export default Signup;
