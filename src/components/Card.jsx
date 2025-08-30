import { Link } from "react-router";
import Container from "./Container";

export default function Card({ molecule }) {
  return (
    <Container
      className={
        "w-full hover:transform hover:scale-105 transition-transform duration-300"
      }
    >
      <div className="flex flex-col items-center justify-center text-center break-words gap-2">
        <div className="flex justify-center items-center w-[75%] min-h-[150px] border border-slate-200 rounded-md p-2">
          {molecule.svg ? (
            <Link to={`/molecule/${molecule.id}`}>
              <div
                className="svg-container"
                dangerouslySetInnerHTML={{ __html: molecule.svg }}
              />
            </Link>
          ) : (
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500 m-auto"></div>
          )}
        </div>
        <Link to={`/molecule/${molecule.id}`}>
          <h2 className="font-bold mt-2">{molecule.nome}</h2>
        </Link>
      </div>
    </Container>
  );
}
