module.exports = {
  list: async (ctx, next) => {
    const data = ctx.request.body;
    ctx.body = [
      {
        name: '计算机中心',
        id: '001',
      },
      {
        name: '大数据中心',
        id: '002',
      },
      {
        name: '总裁办',
        id: '003',
      },
      {
        name: '人力部',
        id: '004',
      },
      {
        name: '电商管理部',
        id: '005',
      },
    ];
  },
  statistic: async (ctx, next) => {
    const data = ctx.request.body;
    ctx.body = [
      {
        name: '实际在册',
        number: 3600,
      },
      {
        name: '实际出勤',
        number: 3484,
      },
      {
        name: '出勤率',
        number: 96.70,
      },
    ];
  },
  shiftOfDepartment: async (ctx, next) => {
    const data = ctx.request.body;
    ctx.body = {
      rows: [
        {
          id: 'D2020001',
          name: '白班',
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
          name: '中班',
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
          name: '晚班',
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
      total: 3,
    };
  },
  team: async (ctx, next) => {
    const data = ctx.request.body;
    ctx.body = {
      rows: [
        {
          id: 'D2020001',
          name: 'N1班',
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
          name: 'W1班',
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
          name: '三车间物控班',
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
          name: 'C1班',
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
          name: 'D1班',
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
          name: 'A5班',
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
          name: '氦检5班',
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
          name: '氦检8班',
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
      total: 8,
    };
  },
  workshop: async (ctx, next) => {
    const data = ctx.request.body;
    ctx.body = {
      rows: [
        {
          id: 'D2020001',
          name: 'K3101',
          rate: 97.14,
          rateTitle: '出勤率',
          obj: [
            {
              id: 'W0001',
              title: '人力配置',
              value: '10',
            }, {
              id: 'W0002',
              title: '实际出勤',
              value: '68',
            }, {
              id: 'W0003',
              title: '定编标准',
              value: '69',
            }, {
              id: 'W0004',
              title: '差异人力',
              value: '-1',
            }, {
              id: 'W0005',
              title: '技能工出勤',
              value: '10',
            },
          ],
        },
        {
          id: 'D2020002',
          name: 'K3102',
          rate: 97.14,
          rateTitle: '出勤率',
          obj: [
            {
              id: 'W0001',
              title: '人力配置',
              value: '10',
            }, {
              id: 'W0002',
              title: '实际出勤',
              value: '68',
            }, {
              id: 'W0003',
              title: '定编标准',
              value: '69',
            }, {
              id: 'W0004',
              title: '差异人力',
              value: '-1',
            }, {
              id: 'W0005',
              title: '技能工出勤',
              value: '10',
            },
          ],
        },
        {
          id: 'D2020003',
          name: 'K3103',
          rate: 97.14,
          rateTitle: '出勤率',
          obj: [
            {
              id: 'W0001',
              title: '人力配置',
              value: '10',
            }, {
              id: 'W0002',
              title: '实际出勤',
              value: '68',
            }, {
              id: 'W0003',
              title: '定编标准',
              value: '69',
            }, {
              id: 'W0004',
              title: '差异人力',
              value: '-1',
            }, {
              id: 'W0005',
              title: '技能工出勤',
              value: '10',
            },
          ],
        },
        {
          id: 'D2020004',
          name: 'K3104',
          rate: 97.14,
          rateTitle: '出勤率',
          obj: [
            {
              id: 'W0001',
              title: '人力配置',
              value: '10',
            }, {
              id: 'W0002',
              title: '实际出勤',
              value: '68',
            }, {
              id: 'W0003',
              title: '定编标准',
              value: '69',
            }, {
              id: 'W0004',
              title: '差异人力',
              value: '-1',
            }, {
              id: 'W0005',
              title: '技能工出勤',
              value: '10',
            },
          ],
        },
      ],
      total: 8,
    };
  },
};
