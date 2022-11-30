import { useState } from "react";

export function SearchInput() {
  const [search, setSearch] = useState<string>('');
  
  return (
    <div>
      <label>
        <input
          type="text"
          placeholder="Pesquisar"
          name="search"
          value={search}
          onChange={ (e) => setSearch(e.target.value)}  
        />
      </label>
    </div>
  )
}