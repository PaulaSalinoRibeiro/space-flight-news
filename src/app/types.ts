export interface IArticle {
  id: number;
  imageUrl: string;
  newsSite: string;
  summary: string;
  title: string;
  url: string;
  updatedAt: string;
}

export interface ArticlesState {
  articles: IArticle[];
  filtered: IArticle[];
  searchTitle: IArticle[];
  modal: IArticle | null;
  showModal: boolean;
}