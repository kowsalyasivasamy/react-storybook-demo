import { createGlobalStyle } from 'styled-components'

import gothamRoundedBookWoff2 from './fonts/gotham-rounded/GothamRounded-Book.woff2'
import gothamRoundedBookWoff from './fonts/gotham-rounded/GothamRounded-Book.woff'
import gothamRoundedBookTtf from './fonts/gotham-rounded/GothamRounded-Book.ttf'

import gothamRoundedWoff2 from './fonts/gotham-rounded/GothamRounded-Medium.woff2'
import gothamRoundedWoff from './fonts/gotham-rounded/GothamRounded-Medium.woff'
import gothamRoundedTtf from './fonts/gotham-rounded/GothamRounded-Medium.ttf'

import colors from './colors'

import { THEMES_MODE } from '../constants'

const themeDark = THEMES_MODE.dark
const themeLight = THEMES_MODE.light

export const getColor = (section, name, subColor = null) => {
  if (subColor) {
    return colors[`${section}`][`${name}`].colors.find((c) => c.name === subColor).color
  } else {
    return colors[`${section}`].colors.find((c) => c.name === name).color
  }
}

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'GothamRoundedBook';
  src:  url('${gothamRoundedBookWoff2}') format('woff2'),
        url('${gothamRoundedBookWoff}') format('woff'),
        url('${gothamRoundedBookTtf}') format('truetype');
}

@font-face {
  font-family: 'GothamRounded';
  src:  url('${gothamRoundedWoff2}') format('woff2'),
        url('${gothamRoundedWoff}') format('woff'),
        url('${gothamRoundedTtf}') format('truetype');
}

:root {
  --font_family_general: 'GothamRoundedBook', 'sans-serif';
  --font_family_bold: 'GothamRounded', 'sans-serif';

  --rgba1: rgba(89, 89, 89, 0.15);
  --rgba2: rgba(89, 89, 89, 0.25);
  --rgba3: rgba(13, 13, 13, 0.25);

  --shadow: 1px 1px 4px var(--rgba2);
  --shadow2: 0 1px 10px var(--rgba2);
  --shadow_dropdown: var(--rgba1) -2px 2px 8px, var(--rgba1) 2px 2px 8px;
  --inset: inset 3px 5px 10px var(--rgba1);
  --text-shadow:  1px 1px 4px var(--rgba2);
  --text-shadow2:  1px 1px 4px var(--rgba3);

  --main: ${getColor(themeLight, 'main')};
  --secondary: ${getColor(themeLight, 'secondary')};
  --lines_disabled: ${getColor(themeLight, 'lines-disabled')};
  --level1: ${getColor(themeLight, 'level1')};
  --level0: ${getColor(themeLight, 'level0')};

  --danger: ${getColor(themeLight, 'complementary', 'danger')};
  --warning: ${getColor(themeLight, 'complementary', 'warning')};
  --success: ${getColor(themeLight, 'complementary', 'success')};
  --info: ${getColor(themeLight, 'complementary', 'info')};
  --dark: ${getColor(themeLight, 'complementary', 'dark')};

  [data-theme="${themeDark}"] {
    --main: ${getColor(themeDark, 'main')};
    --secondary: ${getColor(themeDark, 'secondary')};
    --lines_disabled: ${getColor(themeDark, 'lines-disabled')};
    --level1: ${getColor(themeDark, 'level1')};
    --level0: ${getColor(themeDark, 'level0')};

    --danger: ${getColor(themeDark, 'complementary', 'danger')};
    --warning: ${getColor(themeDark, 'complementary', 'warning')};
    --success: ${getColor(themeDark, 'complementary', 'success')};
    --info: ${getColor(themeDark, 'complementary', 'info')};
    --dark: ${getColor(themeDark, 'complementary', 'dark')};
  }
}

body[data-theme="${themeDark}"] {
  background-color: var(--level0);
}
`

export default GlobalStyle
