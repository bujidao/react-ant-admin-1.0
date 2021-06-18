const settings = require('../../config/defaultSettings');

const title = settings.title || 'React Admin 1.0';

const getPageTitle = (pageName?: string | number) => {
  if (pageName) {
    return `${pageName} - ${title}`;
  }
  return `${title}`;
};

export default getPageTitle;
