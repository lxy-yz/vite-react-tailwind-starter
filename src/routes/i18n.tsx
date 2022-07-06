import Nav from "../components/nav";

const I18n = () => {
  const { t } = useTranslation();

  return (
    <div>
      <header className="shadow">
        <Nav />
      </header>
      <div className="mx-auto max-w-screen-lg">
        <h1 className="mt-32 text-center">{t("intro.hi", { name: "i18next with React" })}</h1>
      </div>
    </div>
  );
};

export default I18n;
