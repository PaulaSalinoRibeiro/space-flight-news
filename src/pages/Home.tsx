import { useEffect } from "react";
import { fetchApi } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { setArticles } from "../app/articlesSlice";
import { SearchInput } from "../components/Search/SearchInput"; 
import { SearchDate } from "../components/Search/SearchDate";
import { Banner } from "../components/Banner";
import { Article } from "../components/Article"; 
export function Home() {
  const dispatch = useDispatch();
  const { filtered } = useSelector((state: RootState) => state.articles);
  useEffect(() => {
    fetchApi('articles')
    .then(data => dispatch(setArticles(data)))
    .catch(erro => console.log(erro))
  }, [dispatch]);

  return (
    <>
      <header>
        <div>
          <SearchInput />
          <SearchDate />
        </div>
        <Banner />
      </header>
      <main>
        {
          filtered.map(item => (
            <Article
              key={item.id}
              id={item.id}
              title={item.title}
              imageUrl={item.imageUrl}
              summary={item.summary}
              updatedAt={item.updatedAt}
              url={item.url}
              newsSite={item.newsSite}
            />
          ))
        }
      </main>
    </>
  )
}