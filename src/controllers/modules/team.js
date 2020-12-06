module.exports = {
  list: async (ctx, next) => {
    const data = ctx.request.body;
    ctx.body = [
      {
        name: '软件开发二室',
        id: '001',
      },
      {
        name: 'UI设计一室',
        id: '002',
      },
      {
        name: '鲲鹏芯片设计室',
        id: '003',
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
  shiftOfTeam: async (ctx, next) => {
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
  group: async (ctx, next) => {
    const data = ctx.request.body;
    ctx.body = {
      rows: [
        {
          id: 'G2020001',
          name: '软件开发六组',
          rate: 100,
          rateTitle: '出勤率',
          obj: [
            {
              id: 'G0001',
              title: '工作中心',
              value: 'K3203',
            }, {
              id: 'G0002',
              title: '人力配置',
              value: '68',
            }, {
              id: 'G0003',
              title: '实际出勤',
              value: '69',
            },
          ],
        },
        {
          id: 'G2020001',
          name: '软件开发六组',
          rate: 100,
          rateTitle: '出勤率',
          obj: [
            {
              id: 'G0001',
              title: '工作中心',
              value: 'K3203',
            }, {
              id: 'G0002',
              title: '人力配置',
              value: '68',
            }, {
              id: 'G0003',
              title: '实际出勤',
              value: '69',
            },
          ],
        },
        {
          id: 'G2020001',
          name: '软件开发六组',
          rate: 100,
          rateTitle: '出勤率',
          obj: [
            {
              id: 'G0001',
              title: '工作中心',
              value: 'K3203',
            }, {
              id: 'G0002',
              title: '人力配置',
              value: '68',
            }, {
              id: 'G0003',
              title: '实际出勤',
              value: '69',
            },
          ],
        },
        {
          id: 'G2020001',
          name: '软件开发六组',
          rate: 100,
          rateTitle: '出勤率',
          obj: [
            {
              id: 'G0001',
              title: '工作中心',
              value: 'K3203',
            }, {
              id: 'G0002',
              title: '人力配置',
              value: '68',
            }, {
              id: 'G0003',
              title: '实际出勤',
              value: '69',
            },
          ],
        },
        {
          id: 'G2020001',
          name: '软件开发六组',
          rate: 100,
          rateTitle: '出勤率',
          obj: [
            {
              id: 'G0001',
              title: '工作中心',
              value: 'K3203',
            }, {
              id: 'G0002',
              title: '人力配置',
              value: '68',
            }, {
              id: 'G0003',
              title: '实际出勤',
              value: '69',
            },
          ],
        },
        {
          id: 'G2020001',
          name: '软件开发六组',
          rate: 100,
          rateTitle: '出勤率',
          obj: [
            {
              id: 'G0001',
              title: '工作中心',
              value: 'K3203',
            }, {
              id: 'G0002',
              title: '人力配置',
              value: '68',
            }, {
              id: 'G0003',
              title: '实际出勤',
              value: '69',
            },
          ],
        },
        {
          id: 'G2020001',
          name: '软件开发六组',
          rate: 100,
          rateTitle: '出勤率',
          obj: [
            {
              id: 'G0001',
              title: '工作中心',
              value: 'K3203',
            }, {
              id: 'G0002',
              title: '人力配置',
              value: '68',
            }, {
              id: 'G0003',
              title: '实际出勤',
              value: '69',
            },
          ],
        },
        {
          id: 'G2020001',
          name: '软件开发六组',
          rate: 100,
          rateTitle: '出勤率',
          obj: [
            {
              id: 'G0001',
              title: '工作中心',
              value: 'K3203',
            }, {
              id: 'G0002',
              title: '人力配置',
              value: '68',
            }, {
              id: 'G0003',
              title: '实际出勤',
              value: '69',
            },
          ],
        },
      ],
      total: 8,
    };
  },
  staff: async (ctx, next) => {
    const data = ctx.request.body;
    ctx.body = {
      rows: [],
      total: 0,
    };
  },
  call: async (ctx, next) => {
    const data = ctx.request.body;
    ctx.body = {
      rows: [],
      total: 0,
    };
  },
};
