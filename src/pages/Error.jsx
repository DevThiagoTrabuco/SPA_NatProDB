import { Link, useNavigate, useRouteError } from "react-router";
import Container from "../components/Container";
import { useTranslation } from "react-i18next";

export default function Error() {
  const error = useRouteError();
  const nav = useNavigate();
  const { t } = useTranslation();
  console.error(error);

  function goBack() {
    nav(-1);
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <Container className="flex flex-col items-center gap-6 bg-white p-12 rounded-xl shadow-2xl w-full max-w-xl text-center">
          <i className="fas fa-exclamation-triangle text-7xl text-yellow-500 "></i>
          <h1 className="text-5xl font-extrabold text-gray-800 ">{t("oops")}</h1>
          <h1 className="text-5xl font-extrabold text-gray-800 ">{t("error1")}</h1>
          <p className="text-xl text-gray-600 ">
            {t("error2")}
          </p>
          <p className="text-md text-gray-500 bg-gray-100 px-4 py-2 rounded-lg ">
            <i>{t("error3")} {error.statusText || error.message}</i>
          </p>
          <Link
            onClick={goBack}
            className="bg-green-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-600 transition-colors duration-300 text-lg mt-4"
          >
            {t("back")}
          </Link>
        </Container>
      </div>
    </>
  );
}
