import { useNavigate, useParams } from "react-router";
import Container from "../components/Container";
import { useEffect, useState } from "react";
import { getMoleculeById } from "../services/MoleculesService";
import { useTranslation } from "react-i18next";

export default function Molecule() {
  const { id } = useParams();
  const [molecule, setMolecule] = useState({});
  const [loading, setLoading] = useState(true);
  const nav = useNavigate();
  const {t} = useTranslation();

  function handleBack() {
    nav(-1);
  }

  useEffect(() => {
    async function findMolecule() {
      setLoading(true);
      try {
        const response = await getMoleculeById(id);
        setMolecule(response.data);
      } catch (error) {
        console.error("Erro ao buscar molécula:", error);
        setMolecule({});
      } finally {
        setLoading(false);
      }
    }
    findMolecule();
  }, [id]);

  return (
    <>
      <Container className="p-8 w-9/10 my-8 mx-auto">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 mb-4 text-gray-600 hover:text-green-600 transition-colors font-semibold"
        >
          <i className="fa-solid fa-chevron-left"></i>
          {t("back")}
        </button>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3 flex justify-center items-center border border-slate-200 rounded-md p-4 min-h-[300px] bg-white shadow-md">
            {loading ? (
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 m-auto"></div>
            ) : (
              <div
                className="svg-container"
                dangerouslySetInnerHTML={{ __html: molecule.svg }}
              />
            )}
          </div>
          <div className="md:w-2/3">
            <h1 className="text-3xl font-bold mb-4 border-b pb-2 text-gray-800">
              {molecule.nome}
            </h1>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>IUPAC:</strong> {molecule.nomeIupac}
              </p>
              <p>
                <strong>SMILES:</strong>{" "}
                <span className="break-all font-mono bg-gray-100 p-1 rounded">
                  {molecule.smile}
                </span>
              </p>
              <p>
                <strong>{t("family")}:</strong> {molecule.familia}
              </p>
              <p>
                <strong>{t("specie")}:</strong> {molecule.especie}
              </p>
              <p>
                <strong>{t("biological-activity")}:</strong>{" "}
                {molecule.atividadeBiologica}
              </p>
              <h2 className="text-2xl font-bold pt-6 pb-2 border-b text-gray-800">
                {t("physical-chemical-properties")}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 pt-2">
                <p>
                  <strong>{t("molecular-mass")}:</strong> {molecule.massaMolecular}
                </p>
                <p>
                  <strong>HBA (Aceitadores de Lig. de Hidrogênio):</strong>{" "}
                  {molecule.hba}
                </p>
                <p>
                  <strong>HBD (Doadores de Lig. de Hidrogênio):</strong>{" "}
                  {molecule.hbd}
                </p>
                <p>
                  <strong>LogP:</strong> {molecule.logP}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
