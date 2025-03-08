import * as S from "./style";
import Header from "../../components/Header";
import PostBox from "../../components/PostBox";

function Main() {
  return (
    <S.Wrapper>
      <Header />
      <S.ContentBox>
        <S.Title>
          <S.UserName>익명1</S.UserName>
          <S.Letter>
            님을 위한 <S.ColorChange>추천</S.ColorChange> 콘텐츠
          </S.Letter>
        </S.Title>
        <S.Post>
          <PostBox title="오늘 내 세상이 무너졌어" writer="익1" text="본문" like="14" />
          <PostBox title="오늘 내 세상이 무너졌어" writer="주여진" text="본문" like="14" />
          <PostBox title="오늘 내 세상이 무너졌어" writer="정하진" text="본문" like="14" />
        </S.Post>
      </S.ContentBox>

      <S.ContentBox>
        <S.Title>
          <S.Letter>
            오늘의 <S.ColorChange>인기</S.ColorChange> 콘텐츠
          </S.Letter>
        </S.Title>
        <S.Post>
          <PostBox title="오늘 내 세상이 무너졌어" writer="익1" text="본문" like="14" />
          <PostBox title="오늘 내 세상이 무너졌어" writer="주여진" text="본문" like="14" />
          <PostBox title="오늘 내 세상이 무너졌어" writer="정하진" text="본문" like="14" />
        </S.Post>
      </S.ContentBox>
    </S.Wrapper>
  );
}

export default Main;
