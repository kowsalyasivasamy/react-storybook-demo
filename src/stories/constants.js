export const HEIGHT_CONTROLS = {
    sm: 30,
    md: 36,
    lg: 50
}

export const SIZES_INPUTS = {
    sm: {
      height: HEIGHT_CONTROLS.sm,
      fontSize: 14
    },
    md: {
      height: HEIGHT_CONTROLS.md,
      fontSize: 16
    },
    lg: {
      height: HEIGHT_CONTROLS.lg,
      fontSize: 20
    },
    xlg: {
      height: HEIGHT_CONTROLS.lg,
      fontSize: 28
    }
}

export const THEMES_COLORS = {
    primary: 'lavender',
    secondary: 'grey',
    success: 'green',
    danger: 'red',
    warning: 'yellow',
    info: 'blue'
}

export const THEMES_MODE = {
    light: 'lightMode',
    dark: 'darkMode'
}

const COLORS = {
  shadow: 'var(--shadow)',
  shadow2: 'var(--shadow2)',
  inset: 'var(--inset)',
  lines_disabled: 'var(--lines_disabled)',
  level1: 'var(--level1)',
  level0: 'var(--level0)',
  main: 'var(--main)',
  secondary: 'var(--secondary)',
  danger: 'var(--danger)',
  warning: 'var(--warning)',
  success: 'var(--success)',
  info: 'var(--info)',
  dark: 'var(--dark)',
  btc: 'var(--btc)',
  eth: 'var(--eth)',
  dash: 'var(--dash)',
  transparent: 'var(--transparent)'
}

export const THEMES_INPUTS = {
  default: {
    name: 'default',
    borderColor: COLORS.lines_disabled,
    shadow: COLORS.shadow,
    textColor: COLORS.main
  },
  success: {
    name: 'success',
    borderColor: COLORS.success,
    shadow: 'none',
    textColor: COLORS.success
  },
  danger: {
    name: 'danger',
    borderColor: COLORS.danger,
    shadow: 'none',
    textColor: COLORS.danger
  },
  warning: {
    name: 'warning',
    borderColor: COLORS.warning,
    shadow: 'none',
    textColor: COLORS.warning
  }
}

export const SIZES_MODAL = {
  xs: {
    width: 360
  },
  sm: {
    width: 420
  },
  md: {
    width: 540
  },
  lg: {
    width: 648
  },
  xl: {
    width: 724
  }
}

export const MEDIA_QUERY = {
  xs: '320px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px'
}
