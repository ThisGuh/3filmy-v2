export const theme = {
  colors: {
    darkGray: '#191A1F',
    green: '#10A329',
    white: '#FFFFFF',
    lightGray: '#696972',
  },
  fontSizes: {
    xs: '1.4rem',
    sm: '1.6rem',
    md: '1.8rem',
    lg: '3rem',
    xl: '5.5rem',
  },
  fontFamilies: {
    default: 'Poppins, sans-serif',
  },
  screenSizes: {
    xs: '(min-width: 320px)',
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1280px)',
    xxl: '(min-width: 1600px)',
  },
};

export type ThemeType = typeof theme;
