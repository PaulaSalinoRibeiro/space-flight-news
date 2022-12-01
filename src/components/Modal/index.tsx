import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import { setModal } from "../../app/articlesSlice";

import * as S from "./styled";

export function Modal() {
  const dispatch = useDispatch();

  const { modal } = useSelector((state:RootState) => state.articles)!;

  const handleClick = () => {
    dispatch(setModal(0))
  };

  return (
    <S.Container>
      <div>
        <S.CloseButton
          onClick={handleClick}
          type="button"
        >
          x
        </S.CloseButton>
      </div>
      <S.Context>
        <S.Image
          src={modal?.imageUrl}
          alt={modal?.title}
        />
        <S.Infos>
          <S.Title>{modal?.title}</S.Title>
          <S.SubContainer>
            <S.Date>
              {new Date(modal?.updatedAt || '').toLocaleDateString('pt-br')}
            </S.Date>
            <S.Tag>{modal?.newsSite}</S.Tag>
          </S.SubContainer>
          <S.Text>{modal?.summary}</S.Text>
        </S.Infos>
      </S.Context>
      <S.LinkContainer>
        <S.Link
          href={modal?.url}
          target="_blank"
          rel="noreferrer"
        >
          Ir para site
        </S.Link>
      </S.LinkContainer>
    </S.Container>
  )
}