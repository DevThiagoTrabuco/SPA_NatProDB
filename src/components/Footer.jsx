import { Link } from "react-router";
import uefs from "../images/logo_uefs2.png";
import { useTranslation } from "react-i18next";
export default function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <footer className="max-w-full bg-white p-2 z-1">
        <div className="flex items-center justify-between">
          <Link to="https://www.uefs.br/" target="_blank" className="">
            <img
              src={uefs}
              alt="Universidade Estadual de Feira de Santana"
              className=""
            />
          </Link>
          <div className="flex items-center me-8">
            <Link to="https://www.instagram.com/lmmuefs/" target="_blank" className="text-4xl">
              <i className="fa-brands fa-instagram instagram"></i>
            </Link>
          </div>
        </div>
        <hr className="m-2" />
        <div>
          <p className="text-sm text-center">
            {t("footer")}
          </p>
        </div>
      </footer>
    </>
  );
}
