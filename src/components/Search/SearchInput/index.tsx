import { useDispatch } from "react-redux";
import { setSearch } from "../../../app/articlesSlice";

import * as S from "./styled";

export function SearchInput() {
  const dispatch = useDispatch();

  return (
    <S.Label>
      <S.Input
        type="text"
        placeholder="Pesquisar"
        onChange={({ target }) => dispatch(setSearch(target.value))}
      />
    </S.Label>
  )
}