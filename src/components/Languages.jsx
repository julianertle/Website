import { useEffect, useState } from "react";
import AnimatedProgressBar from "./AnimatedProgressBar";
import githubImage from "../assets/github-logo.png";

function Languages() {
  const [languageStats, setLanguageStats] = useState({});
  const [loading, setLoading] = useState(true);

  const GITHUB_USERNAME = "julianertle";

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const headers = {};

        const reposRes = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`,
          { headers }
        );

        if (!reposRes.ok) throw new Error(`API Fehler: ${reposRes.status}`);

        const repos = await reposRes.json();

        if (!Array.isArray(repos)) throw new Error("Unerwartete API Antwort");

        const languageData = {};

        await Promise.all(
          repos.map(async (repo) => {
            const langRes = await fetch(repo.languages_url, { headers });
            if (!langRes.ok) throw new Error(`API Fehler: ${langRes.status}`);
            const langJson = await langRes.json();

            for (const [lang, bytes] of Object.entries(langJson)) {
              languageData[lang] = (languageData[lang] || 0) + bytes;
            }
          })
        );

        setLanguageStats(languageData);
        localStorage.setItem("languageStats", JSON.stringify(languageData));
      } catch (err) {
        console.error("Fehler beim Laden der Sprachdaten:", err);

        const cachedData = localStorage.getItem("languageStats");
        if (cachedData) {
          setLanguageStats(JSON.parse(cachedData));
        } else {
          setLanguageStats({});
        }
      } finally {
        setLoading(false);
      }
    };

    fetchLanguages();
  }, []);

  const totalBytes = Object.values(languageStats).reduce((a, b) => a + b, 0);

  const colors = [
    "orange",
    "dodgerblue",
    "limegreen",
    "crimson",
    "mediumpurple",
    "teal",
    "goldenrod",
    "salmon",
  ];

  return (
<div className="center-vertical box" style={{ maxWidth: '90%', margin: '0 auto' }}>
      <div className="flex justify-center items-center gap-3 mb-6">
  <h2 className="text-3xl font-semibold text-gray-900">Meinen Repositories</h2>

  <a
    href={`https://github.com/${GITHUB_USERNAME}`}
    target="_blank"
    rel="noreferrer"
    className="inline-block transform transition-transform duration-200 hover:scale-110"
  >
    <img src={githubImage} alt="GitHub" className="w-10 h-10" />
  </a>
</div>


      {loading ? (
        <p>Lade Daten...</p>
      ) : (
        Object.entries(languageStats)
          .sort((a, b) => b[1] - a[1])
          .map(([lang, bytes], i) => {
            const percent = ((bytes / totalBytes) * 100).toFixed(1);
            return (
              <div key={lang} className="mb-4 hover:scale-105 duration-200 transform transition-transform">
                <div className="text-lg font-medium mb-1">
                  {lang} ({percent}%)
                </div>
                <AnimatedProgressBar
                  value={percent}
                  color={colors[i % colors.length]}
                  offset={800 + i * 200}
                  duration={2000}
                />
              </div>
            );
          })
      )}
    </div>
  );
}

export default Languages;
