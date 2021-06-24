import mockjs from 'mockjs';
import { checkToken, sucessRes } from './utils';

export default {
  'POST /api/routes': (req: any, res: any) => {
    let route = `[{"path": "/table","component": "@/pages/table","meta": {"title": "表格"}}]`;
    let routes = JSON.parse(route);
    res.send(sucessRes(routes));
  },
};
