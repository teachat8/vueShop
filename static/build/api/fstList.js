// fst 分类列表的数据接口
const Mock = require('mockjs');
var Random = Mock.Random;

var data = Mock.mock({
  code: 1,
  msg: '获取成功.',
  'rows|5-16': [{
    'id|+1': 66141,
    'goods_image': Random.image('500x500', '@color', '@color', '发赛特商品列表图片'),
    'goods_image_list|1-5': [ Random.image('500x500', '@color', '@color', '发赛特商品列') ],
    'new_price': 0.0,
    'goods_name': '法塞特2011霜后赤霞珠干红葡萄酒 750ml',
    'goods_code': '010002005',
    'goods_short_name': '',
    'brand_id|+1': 19,
    'brand_name': '法塞特',
    'td_code|+234': 6959901513246,
    'bar_code': '',
    'standard_id': 0,
    'standard_name': '750ml',
    'produce_area_id': 0,
    'produce_area_name': '',
    'model_id': 0,
    'model_name': '',
    'summary': '',
    'unit_id|+1': 44,
    'unit_name': '瓶',
    'assist_unit_enable': '0',
    'assist_unit_id': 0,
    'assist_unit_name': '',
    'assist_unit_conversion': '0',
    'retail_price|+67': 980.0,
    'prime_cost|+67': 233.0,
    'primary_dealer_price': 0.0,
    'second_dealer_price': 0.0,
    'third_dealer_price': 0.0,
    'produce_cost': 0.0,
    'validity_days': '',
    'remarks': '',
    'corp_id': '',
    'detail': `<p>
      <img src="http://www.farsightwine.com/upload/ushop/admin/goods/info/20171120/98d56e4a-f734-4deb-b98f-123f21646e6e.jpg" alt=""/>
      <img src="http://shanghai.farsightwine.com/daocheng/userfiles/upload/2018-01-03/30150/f6b5829e238e4920be695a0ae6af4e9e.jpg"/>
      <img src="http://www.farsightwine.com/upload/ushop/admin/goods/info/20171120/c698507c-2a0e-460a-9b23-7746122e137a.jpg" alt=""/>
      <img src="http://www.farsightwine.com/upload/ushop/admin/goods/info/20171120/21770944-ded2-4bd4-b52d-c1581f564068.jpg" alt=""/>
      <img src="http://www.farsightwine.com/upload/ushop/admin/goods/info/20171120/fbaf5d9f-cfee-4ac3-8713-0f67f1d8a66a.jpg" alt=""/>
      <img src="http://www.farsightwine.com/upload/ushop/admin/goods/info/20171120/48c43abe-8a87-49a3-9d93-84690902a4e4.jpg" alt=""/>
    </p>`,
    'corp_code|+1': 100001,
    'corp_name': '法塞特',
    'del_flag': '0',
    'create_date': '',
    'create_user_id': '',
    'create_user_name': '',
    'goods_status': 'A0',
    'goods_type_id|+1': 332,
    'goods_type_name': '法塞特',
    'is_score': '',
    'score_num': 0,
    'is_discount': '',
    'discount_reat': '',
    'ticket_price': 0.0,
    'goods_attribute': '',
    'goods_factory': '',
    'supplier_id': '',
    'dept_id': '2809c42fa79c4345b56f9e1f6adfe72d',
    'dept_code': '001001013',
    'dept_name': '技术支持部',
    'shop_relation_id': '',
    'breed_id': 0,
    'breed_name': '',
    'grade_id': 0,
    'grade_name': '',
    'mold_id': 0,
    'mold_name': '',
    'full_path_name': '',
    'discount': 0.0,
    'price_type': '折扣定价',
    'goods_color': '',
    'new_retail_price': 0.0,
    'low_price': 0.0,
    'new_low_price': 0.0,
    'set_price_date': '',
    'retail_price_range': '',
    'low_price_range': '',
    'is_dj': ''
  }]
});

data.total = data.rows.length;

module.exports = data;