module.exports = {
  list: async (ctx, next) => {
    const data = ctx.request.body;
    ctx.body = [];
  },

  statistic: async (ctx, next) => {
    const data = ctx.request.body;
    ctx.body = [
      {
        name: '实际在册',
        number: 9999,
      },
      {
        name: '实际出勤',
        number: 8888,
      },
      {
        name: '出勤率',
        number: 98,
      },
    ];
  },
  departments: async (ctx, next) => {
    const data = ctx.request.body;
    ctx.body = {
      rows: [
        {
          id: 'D2020001',
          name: '计算机中心',
          rate: 98,
          rateTitle: '出勤率',
          obj: [
            {
              id: 'D001',
              title: '实际在册',
              value: '999',
            }, {
              id: 'D002',
              title: '实际出勤',
              value: '888',
            },
          ],
        },
        {
          id: 'D2020002',
          name: '计算机中心',
          rate: 98,
          rateTitle: '出勤率',
          obj: [
            {
              id: 'D001',
              title: '实际在册',
              value: '999',
            }, {
              id: 'D002',
              title: '实际出勤',
              value: '888',
            },
          ],
        },
        {
          id: 'D2020003',
          name: '计算机中心',
          rate: 98,
          rateTitle: '出勤率',
          obj: [
            {
              id: 'D001',
              title: '实际在册',
              value: '999',
            }, {
              id: 'D002',
              title: '实际出勤',
              value: '888',
            },
          ],
        },
        {
          id: 'D2020004',
          name: '计算机中心',
          rate: 98,
          rateTitle: '出勤率',
          obj: [
            {
              id: 'D001',
              title: '实际在册',
              value: '999',
            }, {
              id: 'D002',
              title: '实际出勤',
              value: '888',
            },
          ],
        },
        {
          id: 'D2020005',
          name: '计算机中心',
          rate: 98,
          rateTitle: '出勤率',
          obj: [
            {
              id: 'D001',
              title: '实际在册',
              value: '999',
            }, {
              id: 'D002',
              title: '实际出勤',
              value: '888',
            },
          ],
        },
        {
          id: 'D2020006',
          name: '计算机中心',
          rate: 98,
          rateTitle: '出勤率',
          obj: [
            {
              id: 'D001',
              title: '实际在册',
              value: '999',
            }, {
              id: 'D002',
              title: '实际出勤',
              value: '888',
            },
          ],
        },
        {
          id: 'D2020007',
          name: '计算机中心',
          rate: 98,
          rateTitle: '出勤率',
          obj: [
            {
              id: 'D001',
              title: '实际在册',
              value: '999',
            }, {
              id: 'D002',
              title: '实际出勤',
              value: '888',
            },
          ],
        },
        {
          id: 'D2020008',
          name: '计算机中心',
          rate: 98,
          rateTitle: '出勤率',
          obj: [
            {
              id: 'D001',
              title: '实际在册',
              value: '999',
            }, {
              id: 'D002',
              title: '实际出勤',
              value: '888',
            },
          ],
        },
      ],
      total: 12,
    };
  },
};
