import Cookies from 'js-cookie';

/**
 * get current language
 * @returns
 */
export const getLanguage = () => {
  const chooseLanguage = Cookies.get('language');
  if (chooseLanguage) {
    return chooseLanguage;
  }

  return 'zh-CN';
};

export const languageList = [
  {
    key: 'zh-CN',
    label: '中文',
  },
  {
    key: 'en-US',
    label: 'English',
  },
];

export const formatLocales = (data: any, preName?: string) => {
  let newObj: any = {};
  for (let key of Object.keys(data)) {
    let keyName = preName ? preName + '.' + key : key;
    const valueType = data[key] instanceof Object;
    if (valueType) {
      newObj = {
        ...newObj,
        ...formatLocales(data[key], keyName),
      };
    } else {
      newObj[keyName] = data[key];
    }
  }
  return newObj;
};
