import React, { useEffect } from "react";

import white_favicon from '../../assets/favicons/white favicon.png';
import black_favicon from '../../assets/favicons/black favicon.png';

function FaviconSwitcher() {
  useEffect(() => {
    const darkModeFavicon = '../../assets/favicons/white favicon.png'; // Replace with your dark mode favicon path
    const lightModeFavicon = '../../assets/favicons/black favicon.png'; // Replace with your light mode favicon path

    const updateFavicon = (theme) => {
      const favicon = document.querySelector("link[rel='icon']");
      if (favicon) {
        favicon.href = theme === "dark" ? darkModeFavicon : lightModeFavicon;
      }
    };

    // Check initial theme
    const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    updateFavicon(isDarkMode ? "dark" : "light");

    // Listen for changes in color scheme
    const colorSchemeListener = (e) => {
      updateFavicon(e.matches ? "dark" : "light");
    };

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", colorSchemeListener);

    // Cleanup listener on unmount
    return () => {
      window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", colorSchemeListener);
    };
  }, []);

  return null; // No UI needed
}

export default FaviconSwitcher;
