import { useTranslation } from "react-i18next";

export default function Teste() {
  const { t } = useTranslation();

  return (
    <div className="">
      <p className="text-lg text-gray-600">{t("home")}</p>
    </div>
  );
}
