import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import logo from "../images/natprodb_logo.png";
import Button from "./Button";
import { searchSchema } from "../schemas/searchSchema";
import {
  getMoleculeByName,
  getMoleculeBySmile,
} from "../services/MoleculesService";
import "../i18n";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const nav = useNavigate();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(searchSchema) });

  async function onSearch(data) {
    const { query } = data;
    const isSmilesRegex = /[()[\]=#@\\/.]/;

    try {
      const searchType = isSmilesRegex.test(query) ? "SMILES" : "Nome";

      const searchFn =
        searchType === "SMILES" ? getMoleculeBySmile : getMoleculeByName;
      const response = await searchFn(query);

      if (response?.data?.id) {
        nav(`/molecule/${response.data.id}`);
      } else {
        alert("Molécula não encontrada.");
      }
    } catch (error) {
      if (error.response?.status === 404) {
        alert("Molécula não encontrada.");
      } else {
        console.error("Erro na busca:", error);
        alert(
          "Ocorreu um erro ao buscar a molécula. Tente novamente mais tarde."
        );
      }
    } finally {
      reset();
    }
  }

  return (
    <>
      <nav className="max-w-full flex justify-between items-center p-2 bg-white z-1 shadow-md">
        <div className="w-[20%] flex justify-between items-center ms-4">
          <Link
            to="/"
            className="text-3xl flex flex-col items-center gap-1 transition-colors hover:text-green-500"
            onMouseEnter={() => setHoveredLink("/")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <i className="fas fa-house"></i>
            <p
              className={`text-xs font-semibold ${
                hoveredLink === "/" ? "block" : "hidden"
              }`}
            >
              {t("Home")}
            </p>
          </Link>
          <Link
            to="/molecules"
            className="text-3xl flex flex-col items-center gap-1 transition-colors hover:text-green-500"
            onMouseEnter={() => setHoveredLink("/molecules")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <i className="fas fa-seedling"></i>
            <p
              className={`text-xs font-semibold ${
                hoveredLink === "/molecules" ? "block" : "hidden"
              }`}
            >
              {t("Index")}
            </p>
          </Link>
          <Link
            to="/about-us"
            className="text-3xl flex flex-col items-center gap-1 transition-colors hover:text-green-500"
            onMouseEnter={() => setHoveredLink("/about-us")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <i className="fas fa-info"></i>
            <p
              className={`text-xs font-semibold ${
                hoveredLink === "/about-us" ? "block" : "hidden"
              }`}
            >
              {t("About")}
            </p>
          </Link>
        </div>
        <Link to="/">
          <img
            src={logo}
            alt="Logo NatProDB"
            className="w-25 h-25 object-cover cursor-pointer"
          />
        </Link>
        <div className="w-[20%] flex items-center justify-between me-4">
          <form
            onSubmit={handleSubmit(onSearch)}
            className="relative w-[90%] flex items-center"
          >
            <Button type="submit" className="absolute right-0 rounded-e-md">
              <i className="fa-solid fa-magnifying-glass"></i>
            </Button>
            <input
              className={`w-full outline-none bg-slate-200 text-[1rem] p-2 rounded-md focus:ring-2 border-green-300 ${
                errors.query
                  ? "border-red-400 focus:ring-red-400"
                  : "border-transparent focus:ring-green-400"
              }`}
              type="text"
              placeholder={t("search-placeholder")}
              {...register("query")}
            />
          </form>
          <div className="flex flex-col gap-2 text-1xl">
            <span
              className="fi fi-br cursor-pointer"
              onClick={() => changeLanguage("pt")}
            ></span>
            <span
              className="fi fi-us cursor-pointer"
              onClick={() => changeLanguage("en")}
            ></span>
          </div>
        </div>
      </nav>
    </>
  );
}
