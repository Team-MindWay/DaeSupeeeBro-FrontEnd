import * as S from './style';
import Heart from '../../assets/Heart.svg';

function PostBox({ title, writer, text, like }) {
  return (
    <S.Wrapper>
      <S.Top>
        <S.Title>{title}</S.Title>
        <S.Writer>{writer}</S.Writer>
      </S.Top>
      <S.Text>{text}</S.Text>
      <S.Like>
        <img src={Heart} alt=''/>
        {' ' + like}
      </S.Like>
    </S.Wrapper>
  );
};

export default PostBox;