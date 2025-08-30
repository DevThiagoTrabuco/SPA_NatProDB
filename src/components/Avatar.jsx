import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export default function Avatar({ teamMember }) {
  const { t } = useTranslation();
  const imagem = new URL(`../images/team/${teamMember.imagem}.jpg`, import.meta.url)
    .href;

  return (
    <section className="group relative bg-white rounded-lg shadow-md transition-all duration-300 group-hover:rounded-b-none">
      <div className="flex items-center p-4 space-x-4">
        <img
          src={imagem}
          alt={`Foto de ${teamMember.nome}`}
          className="w-20 h-20 rounded-full object-cover"
        />
        <div>
          <h2 className="text-lg font-semibold">{teamMember.nome}</h2>
          {teamMember.lattes && (
            <Link
              to={teamMember.lattes}
              className="text-sm text-blue-500 hover:underline"
            >
              Lattes
            </Link>
          )}
        </div>
      </div>
      <div
        className="absolute top-full left-0 w-full p-4 bg-gray-800 text-white rounded-lg shadow-xl z-20
                   invisible opacity-0 transform -translate-y-2 transition-all duration-300 ease-in-out
                   group-hover:visible group-hover:opacity-100 group-hover:translate-y-0"
      >
        <p className="text-sm">{t(`team.${teamMember.id}`)}</p>
      </div>
    </section>
  );
}
