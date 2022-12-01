import * as S from "./styled";

export function Banner() {
  return (
    <S.Container>
      <S.Image
        src="https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/rocket-512.png"
        alt="space flight"
      />
      <S.Title>
        Space Flight News
      </S.Title>
    </S.Container>
  )
}