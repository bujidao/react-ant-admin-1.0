import mockjs from 'mockjs';
import { checkToken, sucessRes } from './utils';

export default {
  'POST /api/routes': (req: any, res: any) => {
    checkToken(req, res);
    let route = `[{
      path: '/table',
      component: '@/pages/table',
      meta: {
        title: '表格',
      },
    }]`;
    route = JSON.parse(route);
    sucessRes(route);
  },
};
