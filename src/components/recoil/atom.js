import { atom } from 'recoil';

export const getTheme = () => {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    return 'dark';
  }
  return 'light';
};

export const isDark = atom({
  key: 'isDark',
  default: getTheme(),
});
