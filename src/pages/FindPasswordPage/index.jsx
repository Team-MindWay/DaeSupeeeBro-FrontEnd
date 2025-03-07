import * as S from "./style";
import InputBox from "../../components/InputBox";

function FindPasswordPage() {
  return (
    <S.Container>
      <S.Title>비밀번호 찾기</S.Title>
      <S.Wrapper>
        <InputBox
          type="text"
          text="이메일 (@gsm.hs.kr)"
          width="536px"
          eye={false}
        />
        <InputBox type="text" text="인증번호" width="536px" />
      </S.Wrapper>
      <S.Button>비밀번호 찾기</S.Button>
    </S.Container>
  );
}

export default FindPasswordPage;
