import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

interface IProps {
  id: number;
}
export function Modal({ id }: IProps) {
  const { modal } = useSelector((state:RootState) => state.articles)!;


  const handleClick = () => {};

  return (
    <div>
      <div>
        <button
          onClick={handleClick}
          type="button"
        >
          x
        </button>
      </div>
      <div>
        <img src={modal?.imageUrl} alt={modal?.title} />
        <div>
          <h2>{modal?.title}</h2>
          <div>
            <p>
              {new Date(modal?.updatedAt || '').toLocaleDateString('pt-br')}
            </p>
            <p>{modal?.newsSite}</p>
          </div>
          <p>{modal?.summary}</p>
        </div>
      </div>
      <div>
        <a
          href={modal?.url}
          target="_blank"
          rel="noreferrer"
        >
          Ir para site
        </a>
      </div>
    </div>
  )
}