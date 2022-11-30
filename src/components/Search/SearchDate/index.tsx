import { useDispatch } from "react-redux";
import { searchDate } from "../../../app/articlesSlice";

export function SearchDate() {
  const dispatch = useDispatch();

  return (
    <div>
      <label>
        <select
          onChange={({target}) => dispatch(searchDate(target.value))}
        >
          <option value="olds">Mais antigas</option>
          <option value="news">Mais novas</option>
        </select>
      </label>
    </div>
  )
}