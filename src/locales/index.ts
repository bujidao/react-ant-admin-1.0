import Cookies from 'js-cookie';

/**
 * get current language
 * @returns
 */
export const getLanguage = () => {
  const chooseLanguage = Cookies.get('language');
  if (chooseLanguage) return chooseLanguage;
  return 'zh-CN';
};
