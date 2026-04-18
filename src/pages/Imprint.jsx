import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";

function Imprint() {
  const { t, lang } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      <main className="flex-grow flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-2xl font-semibold mb-2">
          {t("siteUnderConstruction")}
        </h1>
        <p className="text-gray-600">{t("comeBackLater")}</p>
      </main>

      <Footer />
    </div>
  );
}

export default Imprint;
