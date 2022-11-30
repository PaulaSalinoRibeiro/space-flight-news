import { useEffect } from "react";
import { fetchApi } from "../api";
import { useDispatch } from "react-redux";
import { setArticles } from "../app/articlesSlice";
import { SearchInput } from "../components/Search/SearchInput"; 
import { SearchDate } from "../components/Search/SearchDate";
import { Banner } from "../components/Banner";
export function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchApi('articles')
    .then(data => dispatch(setArticles(data)))
    .catch(erro => console.log(erro))
  }, [dispatch]);

  return (
    <>
      <header>
        <SearchInput />
        <SearchDate />
        <Banner />
      </header>
      <main>
        
      </main>
    </>
  )
}