import { useEffect, useState } from "react";
import AnimatedProgressBar from "./AnimatedProgressBar";
import githubImage from "../assets/github-logo.png";

function Languages() {
  const [languageStats, setLanguageStats] = useState({});
  const [loading, setLoading] = useState(true);

  const GITHUB_USERNAME = "julianertle";
  const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN; // Optional: Add token for private repo access or rate limits

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const headers = GITHUB_TOKEN
          ? { Authorization: `token ${GITHUB_TOKEN}` }
          : {};

        const reposRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`, { headers });
        const repos = await reposRes.json();

        const languageData = {};

        await Promise.all(
          repos.map(async (repo) => {
            const langRes = await fetch(repo.languages_url, { headers });
            const langJson = await langRes.json();
            for (const [lang, bytes] of Object.entries(langJson)) {
              languageData[lang] = (languageData[lang] || 0) + bytes;
            }
          })
        );

        setLanguageStats(languageData);
      } catch (err) {
        console.error("Failed to fetch languages:", err);
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
    <div className="center-vertical box grow">
      <h3 className="text-xl font-bold mb-4">Languages Used on GitHub</h3>

      {loading ? (
        <p>Loading...</p>
      ) : (
        Object.entries(languageStats)
          .sort((a, b) => b[1] - a[1]) // Sort by usage
          .map(([lang, bytes], i) => {
            const percent = ((bytes / totalBytes) * 100).toFixed(1);
            return (
              <div key={lang}>
                <p>{lang} ({percent}%)</p>
                <AnimatedProgressBar
                  value={percent}
                  color={colors[i % colors.length]}
                  offset={800 + i * 200}
                  duration={1500}
                />
              </div>
            );
          })
      )}

      <div className="flex mt-6">
        <a
          href="https://github.com/julianertle"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-black"
        >
          <h5 className="center-vertical">GitHub:</h5>
          <img src={githubImage} alt="GitHub" className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}

export default Languages;
