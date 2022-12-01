import { SearchDate } from "../Search/SearchDate";
import * as S from "./styled";

interface Props {
  id: number;
  imageUrl: string;
  newsSite: string;
  summary: string;
  title: string;
  url: string;
  updatedAt: string;
}

export function Article({ imageUrl, title, updatedAt, newsSite, summary , id }: Props) {
  const openModal = (id: number) => {
    console.log(id)
  };

  return (
    <S.Container>
      <S.Image
        src={imageUrl}
        alt={title}
      />
      <S.Infos>
        <S.Title>{title}</S.Title>
        <S.SubContainer>
          <S.Date>
            {new Date(updatedAt).toLocaleDateString('pt-br')}
          </S.Date>
          <S.Tag>{newsSite}</S.Tag>
        </S.SubContainer>
        <S.Text>{summary}</S.Text>
        <S.Button
          type="button"
          onClick={() => openModal(id)}
        >
          Ver Mais
        </S.Button>
      </S.Infos>
    </S.Container>
  )
}