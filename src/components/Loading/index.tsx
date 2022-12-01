import { useDispatch } from "react-redux";
import { fetchApi } from "../../api";
import { setArticles } from "../../app/articlesSlice";

import * as S from "./styled";
export function Loading() {
  const dispatch = useDispatch();

  const handleClick = () => {
    fetchApi('articles')
    .then(data => dispatch(setArticles(data)))
    .catch(error => console.log(error))
  };

  return (
    <S.Button
      type="button"
      onClick={handleClick}
    >
      Carregar mais
    </S.Button>
  )
}