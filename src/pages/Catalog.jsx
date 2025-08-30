import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import { BounceLoader } from "react-spinners";
import { getAllMolecules } from "../services/MoleculesService";

export default function Catalog() {
  const [loading, setLoading] = useState(true);
  const [molecules, setMolecules] = useState([]);
  const [paginationData, setPaginationData] = useState({
    count: 0,
    offset: 0,
    limit: 0,
    next: "",
    previous: "",
  });
  const [searchParams] = useSearchParams();

  async function getMolecules(url) {
    setLoading(true);
    try {
      const allMolecules = await getAllMolecules(url);
      setPaginationData({
        count: allMolecules.data.count,
        offset: allMolecules.data.offset,
        limit: allMolecules.data.limit,
        next: allMolecules.data.nextUrl,
        previous: allMolecules.data.previousUrl,
      });
      setMolecules(allMolecules.data.molecules);
    } catch (error) {
      console.error("Falha ao buscar moléculas:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const path = `/molecules?${searchParams.toString()}`;
    getMolecules(path);
  }, [searchParams]);

  return (
    <>
      {loading ? (
        <>
          <div className="flex justify-center items-center h-screen">
            <BounceLoader
              color={"#00c500"}
              loading={loading}
              size={150}
              aria-label={"Loading Spinner"}
              data-testid={"loader"}
            />
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col justify-center items-center">
            <div className="grid grid-cols-4 gap-4 px-4 my-8">
              {molecules.map((item) => (
                <Card key={item.id} molecule={item} />
              ))}
            </div>
            <Pagination paginationData={paginationData} />
          </div>
        </>
      )}
    </>
  );
}
