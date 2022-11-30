interface Props {
  id: number;
  imageUrl: string;
  newsSite: string;
  summary: string;
  title: string;
  url: string;
  updatedAt: string;
}

export function Article({ imageUrl, title, updatedAt, newsSite, summary , id }: Props) {
  const openModal = (id: number) => {
    console.log(id)
  };

  return (
    <div>
      <img src={imageUrl} alt={title}/>
      <div>
        <h2>{title}</h2>
        <div>
          <p>{updatedAt}</p>
          <p>{newsSite}</p>
        </div>
        <p>{summary}</p>
        <button onClick={() => openModal(id)}>Ver Mais</button>
      </div>
    </div>
  )
}