import { useEffect } from "react";
import { fetchApi } from "../api"; 

export function Home() {

  useEffect(() => {
    fetchApi('articles')
    .then(data => console.log(data))
    .catch(erro => console.log(erro))
  }, [])

  return (
    <>
      <h1>Home</h1>
    </>
  )
}