export const theme = {
  colors: {
    darkGray: '#191A1F',
    green: '#44AB60',
    white: '#FFFFFF',
    lightGray: '#696972',
  },
  fontSizes: {
    xs: '1rem',
    sm: '1.3rem',
    md: '1.7rem',
    lg: '2.5rem',
    xl: '4rem',
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
