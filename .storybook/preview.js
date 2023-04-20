import React from "react";
import { useDarkMode } from "storybook-dark-mode";

import GlobalStyle from "../src/stories/GlobalStyle";
import { THEMES_MODE } from "../src/stories/constants";

const setThemeMode = (mode) => {
  if (mode) {
    window.localStorage.setItem("theme", mode);

    document.body.setAttribute("data-theme", mode);
  }
};

window.addEventListener("storage", (e) => {
  if (e.key === "theme" && e.oldValue !== e.newValue) {
    setThemeMode(e.newValue);
  }
});

const withStyles = (fn) => {
  const mode = useDarkMode() ? THEMES_MODE.dark : THEMES_MODE.light;
  setThemeMode(mode);

  return (
    <>
      <GlobalStyle />
      <div style={{ width: "100%" }}>{fn()}</div>
    </>
  );
};

export const decorators = [withStyles];

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
