import logo from "../images/logo_lmm_lacad.png";
import pnip from "../images/pnip_mcti.png";
import lmm from "../images/lmm.png";
import Container from "../components/Container";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex-col items-center justify-center p-8">
        <Container className="w-[90%] flex mx-auto items-center">
          <p className="text-justify p-12 font-[Georgia] text-2xl">
            {t("home")}
          </p>
          <img src={logo} alt="Logotipo LMM e LaCAD" />
        </Container>
        <div className="w-[90%] mt-12 flex justify-around mx-auto">
          <Container className="w-[30%]">
            <Link
              to="https://pnipe.mcti.gov.br/laboratory/37943"
              target="_blank"
              className=""
            >
              <img
                src={pnip}
                alt="Plataforma Nacional de Infraestrutura de Pesquisa MCTI"
              />
            </Link>
          </Container>
          <Container className="w-[30%]">
            <Link to="https://lmm.uefs.br/" target="_blank" className="">
              <img src={lmm} alt="Laboratório de Modelagem Molecular" className="" />
            </Link>
          </Container>
        </div>
      </div>
    </>
  );
}
