import { useEffect } from "react";
import { fetchApi } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { setArticles } from "../../app/articlesSlice";
import { SearchDate } from "../../components/Search/SearchDate";
import { SearchInput } from "../../components/Search/SearchInput";
import { Banner } from "../../components/Banner";
import { Article } from "../../components/Article"; 

import * as S from "./styled";
import { Loading } from "../../components/Loading";
export function Home() {
  const dispatch = useDispatch();
  const { filtered } = useSelector((state: RootState) => state.articles);
  useEffect(() => {
    fetchApi('articles')
    .then(data => dispatch(setArticles(data)))
    .catch(erro => console.log(erro))
  }, [dispatch]);

  return (
    <S.Container>
      <S.Header>
        <div>
          <SearchInput />
          <SearchDate />
        </div>
        <Banner />
        <S.Line />
      </S.Header>
      <main>
        {
          filtered.map((item, index) => (
            <Article
              isTrue={index % 2 === 0}
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
        <Loading />
      </main>
    </S.Container>
  )
}