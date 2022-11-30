import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IArticle, ArticlesState} from "./types";

const initialState: ArticlesState = {
  articles: [],
  filtered: [],
  searchTitle: [],
};

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    setArticles: (state, action: PayloadAction<IArticle[]>) => {
      state.articles = [...action.payload]
      state.filtered = [...action.payload]
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.filtered = state.articles
      .filter(item => item.title.toLocaleLowerCase().includes(action.payload.toLowerCase()))
    },
  },
});

export const { setArticles, setSearch } = articlesSlice.actions;

export default articlesSlice.reducer;
