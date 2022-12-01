import { useDispatch } from "react-redux";
import { searchDate } from "../../../app/articlesSlice";

import * as S from "./styled";

export function SearchDate() {
  const dispatch = useDispatch();

  return (
    <S.Container>
      <label>
        <S.Select
          defaultValue="news"
          onChange={({target}) => dispatch(searchDate(target.value))}
        >
          <option value="olds">Mais antigas</option>
          <option value="news">Mais novas</option>
        </S.Select>
      </label>
    </S.Container>
  )
}