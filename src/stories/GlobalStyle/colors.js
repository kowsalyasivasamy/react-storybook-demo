import { THEMES_MODE } from '../constants'

const mainColors = ({ main, secondary, linesDisabled, level1, level0 }) => [
  {
    name: 'main',
    title: 'Main Color',
    subtitle: 'Main Texts',
    color: main
  },
  {
    name: 'secondary',
    title: 'Secondary Color',
    subtitle:
            'Primary Buttons fill / Secondary Buttons Stroke<br/>Secondary Text',
    color: secondary
  },
  {
    name: 'lines-disabled',
    title: 'Lines & Disabled',
    subtitle: 'Interface Lines, Disabled Elements',
    color: linesDisabled
  },
  {
    name: 'level1',
    title: 'Level 1 - Secondary Interface color',
    color: level1
  },
  {
    name: 'level0',
    title: 'Level 0 - background',
    color: level0
  }
]

const complemenmtaryColors = ({ danger, warning, success, info, dark }) => [
  {
    name: 'danger',
    title: 'Danger',
    color: danger
  },
  {
    name: 'warning',
    title: 'Warning',
    color: warning
  },
  {
    name: 'success',
    title: 'Success',
    color: success
  },
  {
    name: 'info',
    title: 'Info',
    color: info
  },
  {
    name: 'dark',
    title: 'Dark',
    color: dark
  }
]

const colors = {
  [THEMES_MODE.light]: {
    title: 'Color palette - light mode',
    colors: mainColors({ main: '#554c4c', secondary: '#2FC3C5', linesDisabled: '#DFDFDF', level1: '#F6F7FB', level0: '#fff' }),

    complementary: {
      title: 'Complementary Colors',
      colors: complemenmtaryColors({ danger: '#FF7885', warning: '#FAD008', success: '#42CA3E', info: '#119BD2', dark: '#2A3443' })
    }
  },

  [THEMES_MODE.dark]: {
    title: 'Color palette - dark mode',
    colors: mainColors({ main: '#8798B0', secondary: '#2FC3C5', linesDisabled: '#414C50', level1: '#0D0D0D', level0: '#121212' }),

    complementary: {
      title: 'Complementary Colors',
      colors: complemenmtaryColors({ danger: '#D56B79', warning: '#FFBE41', success: '#3EAD40', info: '#119BD2', dark: '#2A3443' })
    }
  }
}

export default colors
