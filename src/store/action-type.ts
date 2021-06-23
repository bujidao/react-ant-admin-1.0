/**
 * action type
 * 统一store树的action type值
 * 用于全局控制action type的唯一性
 * 调用方式为 app.toggleLanguage 返回值为 APP_TOGGLE_LANGUAGE
 */

interface actoinTypesModules {
  app: any;
}

const actionTypes: actoinTypesModules = {
  app: ['toggleLanguage'],
};

const formatActionTypes = (objs: any) => {
  const newObj: any = {};
  for (let key of Object.keys(objs)) {
    newObj[key] = {};
    let preName = key.toUpperCase();
    for (let item of objs[key]) {
      newObj[key][item] =
        preName + '_' + item.replace(/([A-Z])/g, '_$1').toUpperCase();
    }
  }
  return newObj;
};

export default formatActionTypes(actionTypes);
