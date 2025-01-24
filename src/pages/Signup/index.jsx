import * as S from './style';

const Form = () => {
  return (
    <S.Container>
      <S.Title>회원가입</S.Title>
      <S.Input type="text" placeholder="아이디 (@gsm.hs.kr)" />
      <S.Input type="password" placeholder="비밀번호" />
      <S.Input type="password" placeholder="비밀번호 확인" />
      <S.Button>회원가입</S.Button>
    </S.Container>
  );
};

export default Form;