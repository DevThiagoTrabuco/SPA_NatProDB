import { Link } from "react-router";
import Button from "./Button";
import { useTranslation } from "react-i18next";

export default function Pagination({
  paginationData: { count, offset, limit, next, previous },
}) {
  const { t } = useTranslation();
  const haveNext = Math.min(offset + limit, count) - count !== 0;
  const havePrevious = offset >= limit;

  if (count > 0) {
    return (
      <div className="w-[85%] p-6 bg-white my-4 mx-auto rounded-xl flex justify-between items-center">
        <span className="font-medium ms-4">
          {t("showing")}{" "}
          <span className="text-green-500">
            {offset + 1} - {Math.min(offset + limit, count)}
          </span>{" "}
          {t("of")} <span className="text-green-500">{count}</span> {t("molecules")}
        </span>
        <a href="/molecules.csv" download="molecules.csv">
          <Button className="flex items-center rounded-md gap-2">
            <i class="fa-solid fa-download"></i>
            {t("download")}
          </Button>
        </a>
        <div className="flex gap-4 me-4">
          <Link
            to={previous || "#"}
            style={{ pointerEvents: !havePrevious ? "none" : "auto" }}
          >
            <Button
              className="flex items-center gap-2 rounded-md"
              disabled={!havePrevious}
            >
              <i className="fas fa-angles-left"></i>
              <span>{t("previous")}</span>
            </Button>
          </Link>
          <Link
            to={next || "#"}
            style={{ pointerEvents: !haveNext ? "none" : "auto" }}
          >
            <Button
              className="flex items-center gap-2 rounded-md"
              disabled={!haveNext}
            >
              <span>{t("next")}</span>
              <i className="fas fa-angles-right"></i>
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}
