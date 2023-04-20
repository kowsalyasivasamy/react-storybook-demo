import { THEMES_MODE } from "./constants";

export const setThemeMode = (mode) => {
  if (mode) {
    window.localStorage.setItem("theme", mode);

    document.body.setAttribute("data-theme", mode);
  }
};

export const getThemeMode = () =>
  window.localStorage.getItem("theme") || THEMES_MODE.light;

export const svg2Raw = (svg) => `data:image/svg+xml;${svg.split(";")[1]}`;

export const truncate = (str, length) =>
  str && str.length > length ? `${str.substring(0, length - 1)}...` : str;
