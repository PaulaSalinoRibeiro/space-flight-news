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
  },
});

export const { setArticles } = articlesSlice.actions;

export default articlesSlice.reducer;
