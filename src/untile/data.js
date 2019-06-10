export default {
  sku: {
    // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
    // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
    tree: [{
      k: '颜色',
      k_id: '1',
      v: [{
        id: '30349',
        name: '天蓝色',
        imgUrl: 'https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg',
      },
      {
        id: '1215',
        name: '白色',
      },
      {
        id: '2257',
        name: '红色',
      }, {
        id: '2258',
        name: '黄色',
      },
      ],
      k_s: 's1',
      count: 4,
    },
    {
      k: '尺寸',
      k_id: '2',
      v: [{
        id: '1193',
        name: 'S',
      },
      {
        id: '1194',
        name: 'M',
      }, {
        id: '1195',
        name: 'L',
      }, {
        id: '1196',
        name: 'XL',
      },
      ],
      k_s: 's2',
      count: 4,
    },
    ],
    // 所有 sku 的组合列表，如下是：白色1、白色2、天蓝色1、天蓝色2
    list: [{
      id: 2259,
      price: 120, // 价格
      discount: 122,
      s1: '1215',
      s2: '1193',
      s3: '0',
      s4: '0',
      s5: '0',
      stock_num: 20, // 库存
      goods_id: 946755,
    },
    {
      id: 2260,
      price: 110,
      discount: 112,
      s1: '1215',
      s2: '1194',
      s3: '0',
      s4: '0',
      s5: '0',
      stock_num: 4, // 库存
      goods_id: 946755,
    },
    {
      id: 2261,
      price: 180,
      discount: 142,
      s1: '1215',
      s2: '1195',
      s3: '0',
      s4: '0',
      s5: '0',
      stock_num: 50, // 库存
      goods_id: 946755,
    },
    {
      id: 2257,
      price: 130,
      discount: 132,
      s1: '30349',
      s2: '1193',
      s3: '0',
      s4: '0',
      s5: '0',
      stock_num: 40, // 库存
      goods_id: 946755,
    },
    {
      id: 2258,
      price: 100,
      discount: 100,
      s1: '30349',
      s2: '1194',
      s3: '0',
      s4: '0',
      s5: '0',
      stock_num: 50, // 库存
      goods_id: 946755,
    },
    {
      id: 2262,
      price: 130,
      discount: 132,
      s1: '2257',
      s2: '1193',
      s3: '0',
      s4: '0',
      s5: '0',
      stock_num: 40, // 库存
      goods_id: 946755,
    },
    {
      id: 2262,
      price: 1000,
      discount: 1000,
      s1: '2257',
      s2: '1194',
      s3: '0',
      s4: '0',
      s5: '0',
      stock_num: 50, // 库存
      goods_id: 946755,
    },
    ],
    price: '5.00',
    stock_num: 227, // 商品总库存
    none_sku: false, // 是否无规格商品
    hide_stock: false, // 是否隐藏剩余库存
  },
  goods_id: null,
  quota: 10, // 限购数量
  quota_used: 0, // 已经购买过的数量
  goods_info: {
    title: '测试商品A',
    picture: 'https://img.yzcdn.cn/upload_files/2017/03/16/Fs_OMbSFPa183sBwvG_94llUYiLa.jpeg?imageView2/2/w/100/h/100/q/75/format/jpg',
  },
  initialSku: {
    // eslint-disable-next-line quotes
    s1: "0001",
    // eslint-disable-next-line quotes
    s2: "1001",
    // eslint-disable-next-line quotes
    s3: "1002",
    selectedNum: 1,
  },
};
