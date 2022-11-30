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
      console.log(action.payload);
      state.filtered = state.articles
      .filter(item => item.title.toLocaleLowerCase().includes(action.payload.toLowerCase()))
    },
    searchDate: (state, action: PayloadAction<string>) => {
      if (action.payload === 'old') {
        state.filtered = state.articles.sort((a, b) => Date.parse(b.updatedAt) - Date.parse(a.updatedAt))
      } else {
        state.filtered = state.articles.sort((a, b) => Date.parse(a.updatedAt) - Date.parse(b.updatedAt))
      }
    },
  },
});

export const { setArticles, setSearch, searchDate } = articlesSlice.actions;

export default articlesSlice.reducer;
