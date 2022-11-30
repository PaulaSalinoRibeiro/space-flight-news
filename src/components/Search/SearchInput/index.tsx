import { useDispatch } from "react-redux";
import { setSearch } from "../../../app/articlesSlice";

export function SearchInput() {
  const dispatch = useDispatch();
  
  return (
    <div>
      <label>
        <input
          type="text"
          placeholder="Pesquisar"
          onChange={ ({target}) => dispatch(setSearch(target.value))}  
        />
      </label>
    </div>
  )
}