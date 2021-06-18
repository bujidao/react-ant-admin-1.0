import mockjs from 'mockjs';

const sucessRes = (data: any, message: string = 'success') => {
  const res = {
    code: 200,
    message: message,
    data: {
      ...data,
    },
  };
  return res;
};

export default {
  'GET /api/article/list': (req: Request, res: any) => {
    const mockData = mockjs.mock({
      'list|20': [
        {
          id: '@id',
          date: '@date("yyyy-MM-dd")',
          'star|1-5': '★',
          title: '@ctitle(15)',
          content: '@cparagraph()',
          state: '@boolean',
          readCount: '@integer(800, 3000)',
          author: '@cname',
          city: '@city()',
        },
      ],
    });
    res.send(sucessRes(mockData));
  },
};
