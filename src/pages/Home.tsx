import { useEffect } from "react";
import { fetchApi } from "../api";
import { useDispatch } from "react-redux";
import { setArticles } from "../app/articlesSlice";
export function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchApi('articles')
    .then(data => dispatch(setArticles(data)))
    .catch(erro => console.log(erro))
  }, [dispatch]);

  return (
    <>
      <h1>Home</h1>
    </>
  )
}