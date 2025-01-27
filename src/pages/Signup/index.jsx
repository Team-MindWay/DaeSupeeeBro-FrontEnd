import * as S from './style';

const Form = () => {
  return (
    <S.Container>
      <S.Title>회원가입</S.Title>
      <InputBox type="text" text="이메일 (@gsm.hs.kr)" />
      <InputBox type="password" text="비밀번호" />
      <InputBox type="password" text="비밀번호 확인" />
      <S.Button>회원가입</S.Button>
    </S.Container>
  );
};

export default Form;