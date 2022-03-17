const I18n = () => {
  const { t } = useTranslation();

  return <h1>{t("intro.hi", { name: "i18next with React" })}</h1>;
};

export default I18n;
