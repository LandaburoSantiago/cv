const DEFAULT_LANGUAGE = "en";
const CV_FILES = {
  en: {
    href: "./cvEn.pdf",
    download: "Santiago-Martin-Landaburo-CV-en.pdf"
  },
  es: {
    href: "./cvEs.pdf",
    download: "Santiago-Martin-Landaburo-CV-es.pdf"
  }
};

let i18n = {};

const resolveTranslation = (translations, key) => {
  return key.split(".").reduce((value, part) => {
    if (value && typeof value === "object" && part in value) {
      return value[part];
    }

    return undefined;
  }, translations);
};

const getTranslation = (language, key) => {
  const languageValue = resolveTranslation(i18n[language], key);

  if (typeof languageValue === "string") {
    return languageValue;
  }

  if (language !== DEFAULT_LANGUAGE) {
    return resolveTranslation(i18n[DEFAULT_LANGUAGE], key);
  }

  return undefined;
};

const setCvDownload = (language) => {
  const cvDownloadLink = document.querySelector("[data-cv-download]");
  const selectedCv = CV_FILES[language] || CV_FILES[DEFAULT_LANGUAGE];

  if (!cvDownloadLink || !selectedCv) {
    return;
  }

  cvDownloadLink.setAttribute("href", selectedCv.href);
  cvDownloadLink.setAttribute("download", selectedCv.download);
};

const setLanguage = (language) => {
  const nextLanguage = Object.prototype.hasOwnProperty.call(i18n, language) ? language : DEFAULT_LANGUAGE;
  const title = getTranslation(nextLanguage, "meta.title");
  const description = getTranslation(nextLanguage, "meta.description");
  const descriptionTag = document.querySelector('meta[name="description"]');

  document.documentElement.lang = nextLanguage;

  if (title) {
    document.title = title;
  }

  if (descriptionTag && description) {
    descriptionTag.setAttribute("content", description);
  }

  const translatableNodes = document.querySelectorAll("[data-i18n]");

  translatableNodes.forEach((node) => {
    const key = node.getAttribute("data-i18n");

    if (!key) {
      return;
    }

    const value = getTranslation(nextLanguage, key);

    if (typeof value === "string") {
      node.textContent = value;
    }
  });

  const translatableAttributes = document.querySelectorAll("[data-i18n-attr]");

  translatableAttributes.forEach((node) => {
    const descriptor = node.getAttribute("data-i18n-attr");

    if (!descriptor) {
      return;
    }

    descriptor.split(";").forEach((pair) => {
      const [attributeName, ...keyParts] = pair.split(":");
      const normalizedAttributeName = attributeName.trim();
      const translationKey = keyParts.join(":").trim();

      if (!normalizedAttributeName || !translationKey) {
        return;
      }

      const value = getTranslation(nextLanguage, translationKey);

      if (typeof value === "string") {
        node.setAttribute(normalizedAttributeName, value);
      }
    });
  });

  const languageButtons = document.querySelectorAll(".lang-button");

  languageButtons.forEach((button) => {
    const isActive = button.getAttribute("data-lang") === nextLanguage;
    button.setAttribute("aria-pressed", String(isActive));
  });

  setCvDownload(nextLanguage);

  try {
    window.localStorage.setItem("portfolio-language", nextLanguage);
  } catch (_error) { }
};

const resolveInitialLanguage = () => {
  try {
    const savedLanguage = window.localStorage.getItem("portfolio-language");

    if (savedLanguage && Object.prototype.hasOwnProperty.call(i18n, savedLanguage)) {
      return savedLanguage;
    }
  } catch (_error) { }

  const browserLanguage = (navigator.language || DEFAULT_LANGUAGE).toLowerCase();

  if (browserLanguage.startsWith("es") && Object.prototype.hasOwnProperty.call(i18n, "es")) {
    return "es";
  }

  return DEFAULT_LANGUAGE;
};

const loadTranslations = async () => {
  try {
    const response = await fetch("./i18n.json");

    if (!response.ok) {
      throw new Error("Failed to load translations");
    }

    const loadedTranslations = await response.json();

    if (
      !loadedTranslations ||
      typeof loadedTranslations !== "object" ||
      !Object.prototype.hasOwnProperty.call(loadedTranslations, DEFAULT_LANGUAGE)
    ) {
      throw new Error("Invalid translations payload");
    }

    i18n = loadedTranslations;
  } catch (_error) {
    i18n = {};
  }
};

const initializeLanguage = async () => {
  await loadTranslations();

  const languageButtons = document.querySelectorAll(".lang-button");

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedLanguage = button.getAttribute("data-lang") || DEFAULT_LANGUAGE;
      setLanguage(selectedLanguage);
    });
  });

  setLanguage(resolveInitialLanguage());
};

initializeLanguage();

const yearElement = document.getElementById("current-year");

if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealElements = document.querySelectorAll(".reveal");

if (prefersReducedMotion) {
  revealElements.forEach((element) => element.classList.add("reveal-visible"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -8% 0px"
    }
  );

  revealElements.forEach((element) => revealObserver.observe(element));

  const parallaxElements = document.querySelectorAll("[data-parallax]");
  let ticking = false;

  const updateParallax = () => {
    const scrollY = window.scrollY;

    parallaxElements.forEach((element) => {
      const ratio = Number(element.getAttribute("data-parallax")) || 0;
      const offset = scrollY * ratio;
      element.style.transform = `translate3d(0, ${offset}px, 0)`;
    });

    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    },
    { passive: true }
  );

  updateParallax();
}
