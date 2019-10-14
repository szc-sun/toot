/*
 * @Page: 首页
 * @Author: sun
 * @Date: 2019-10-08 17:48:17
 * @Last Modified by: sun
 */
 <template>
 <div class="home">
   <div class="test-box">
     <div class="left-bottom left-box">
      <div id="inOutBox" class="left-bottom-list-box">
        <div v-for="(item,index) in inOutWarehouse" :key="index">
          <div v-if="item.value.in.number > 0" @click="activeItem(item,index)" :class="{'left-bottom-list':true}">
            <div class="left-img">
              <svg-icon :icon-class="item.value.in.state ==='in' ? 'ruku' : 'chuku'" class="left-img-svg" />
            </div>
            <div class="right-con">
              <div class="right-con-one">
                {{ item.value.in.type }}样本 {{ item.value.name }}单位
              </div>
              <div class="right-con-two">
                入库 {{ item.value.in.number }}份样本
              </div>
              <div class="right-con-three">
                {{ item.value.in.time }}
              </div>
            </div>
          </div>
          <div v-if="item.value.out.number > 0" @click="activeItem(item,index)"  :class="{'left-bottom-list':true}">
            <div class="left-img">
              <svg-icon :icon-class="item.value.out.state ==='out' ? 'ruku' : 'chuku'" class="left-img-svg" />
            </div>
            <div class="right-con">
              <div class="right-con-one">
                {{ item.value.out.type }}样本 {{ item.value.name }}单位
              </div>
              <div class="right-con-two">
                出库 {{ item.value.out.number }}份样本
              </div>
              <div class="right-con-three">
                {{ item.value.out.time }}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
     <div id="mycharts" @mouseenter="geEcharts()"></div>
   </div>
 </div>
 </template>
<script>
import 'echarts/map/js/china.js'
export default {
  name: 'echartsMap',
  data () {
    return {
      // refInOut: null, // 计时器
      inOutWarehouse: [
        {
          name: '广州市天河区',
          value: {
            name: '南方医学大学附属第三医院器官衰竭中心',
            number: 5000,

            out: {
              type: '血液',
              number: 5000,
              time: '2019-8-12',
              state: 'out'
            },
            in: {
              type: '血液',
              number: '',
              time: '2019-8-12',
              state: 'in'
            }
          }
        },
        {
          name: '广州市从化区',
          value: {
            name: '南方医科大学附属南方医院',
            number: '3500',
            out: {
              type: '组织',
              number: 0,
              time: '2019-8-16'
            },
            in: {
              type: '组织',
              number: '3500',
              time: '2019-8-16'
            }
          }
        },
        {
          name: '广州市海珠区',
          value: {
            name: '南方医科发现中西医结合医院',
            number: '3200',
            out: {
              type: '全血',
              number: '3200',
              time: '2019-9-10',
              state: 'out'
            },
            in: {
              type: '全血',
              number: 0,
              time: '2019-9-10',
              state: 'in'
            }
          }
        },
        {
          name: '南京市玄武区',
          value: {
            name: '南京口腔医院',
            number: '3266',
            out: {
              type: '尿液',
              number: '3266',
              time: '2019-8-16',
              state: 'out'
            },
            in: {
              type: '尿液',
              number: 0,
              time: '2019-8-16',
              state: 'in'
            }
          }
        },
        {
          name: '呼和浩特市赛罕区',
          value: {
            name: '内蒙古肿瘤医院',
            number: '1288',
            out: {
              type: '血清',
              number: '1288',
              time: '2019-8-25',
              state: 'out'
            },
            in: {
              type: '血清',
              number: 0,
              time: '2019-8-25',
              state: 'in'
            }
          }
        },
        {
          name: '宁波市海曙区',
          value: {
            name: '宁波第二人民医院',
            number: '3268',
            out: {
              type: '血液',
              number: 0,
              time: '2019-6-8',
              state: 'out'
            },
            in: {
              type: '血液',
              number: '3268',
              time: '2019-6-8',
              state: 'in'
            }
          }
        },
        {
          name: '济南市历下区',
          value: {
            name: '山东大学齐鲁医院',
            number: '6211',
            out: {
              type: '组织',
              number: 0,
              time: '2019-7-9',
              state: 'out'
            },
            in: {
              type: '组织',
              number: '6211',
              time: '2019-7-9',
              state: 'in'
            }
          }
        },
        {
          name: '济南市历下区龙洞街道',
          value: {
            name: '山东省立医院东院',
            number: '2625',
            out: {
              type: '细胞',
              number: '2625',
              time: '2019-8-15',
              state: 'out'
            },
            in: {
              type: '细胞',
              number: 0,
              time: '2019-8-15',
              state: 'in'
            }
          }
        },
        {
          name: '济南市槐荫区',
          value: {
            name: '山东省立医院内分泌',
            number: '1326',
            out: {
              type: '唾液',
              number: '1326',
              time: '2019-7-7',
              state: 'out'
            },
            in: {
              type: '唾液',
              number: 0,
              time: '2019-7-7',
              state: 'in'
            }
          }
        },
        {
          name: '济南市历下区趵突泉街道',
          value: {
            name: '山东省医学科学院内分泌研究所',
            number: '1088',
            out: {
              type: '痰液',
              number: '1088',
              time: '2019-5-15',
              state: 'out'
            },
            in: {
              type: '痰液',
              number: 0,
              time: '2019-5-15',
              state: 'in'
            }
          }
        },
        {
          name: '上海市徐汇区',
          value: {
            name: '上海第六人民医院',
            number: '2367',
            out: {
              type: '细胞',
              number: 0,
              time: '2019-5-20',
              state: 'out'
            },
            in: {
              type: '细胞',
              number: '2367',
              time: '2019-5-20',
              state: 'in'
            }
          }
        },
        {
          name: '上海市长宁区',
          value: {
            name: '上海皮肤病医院',
            number: '1688',
            out: {
              type: '皮肤鳞屑',
              number: 0,
              time: '2019-6-12',
              state: 'out'
            },
            in: {
              type: '皮肤鳞屑',
              number: '1688',
              time: '2019-6-12',
              state: 'in'
            }
          }
        },
        {
          name: '上海市杨浦区',
          value: {
            name: '上海新华医院',
            number: '5211',
            out: {
              type: '全血',
              number: '5211',
              time: '2019-8-10',
              state: 'out'
            },
            in: {
              type: '全血',
              number: 0,
              time: '2019-8-10',
              state: 'in'
            }
          }
        },
        {
          name: '泰州市海陵区',
          value: {
            name: '泰州市人民医院',
            number: '168',
            out: {
              type: '组织',
              number: '168',
              time: '2019-6-18',
              state: 'out'
            },
            in: {
              type: '组织',
              number: 0,
              time: '2019-6-18',
              state: 'in'
            }
          }
        },
        {
          name: '天津市和平区新兴街道',
          value: {
            name: '天津医科大学公卫学院',
            number: '6283',
            out: {
              type: '细胞',
              number: 0,
              time: '2019-8-8',
              state: 'out'
            },
            in: {
              type: '细胞',
              number: '6283',
              time: '2019-8-8',
              state: 'in'
            }
          }
        },
        {
          name: '天津市西青区',
          value: {
            name: '天津医科大学眼科医院',
            number: '628',
            out: {
              type: '眼液',
              number: 0,
              time: '2019-7-15',
              state: 'out'
            },
            in: {
              type: '眼液',
              number: '628',
              time: '2019-7-15',
              state: 'in'
            }
          }
        },
        {
          name: '天津市和平区兰州道',
          value: {
            name: '天津医科大学总医院',
            number: '268',
            out: {
              type: '脑脊液',
              number: 0,
              time: '2019-7-21',
              state: 'out'
            },
            in: {
              type: '脑脊液',
              number: '268',
              time: '2019-7-21',
              state: 'in'
            }
          }
        },
        {
          name: '武汉市武昌区',
          value: {
            name: '武汉大学人民医院',
            number: '3211',
            out: {
              type: '全血',
              number: '3211',
              time: '2019-8-28',
              state: 'out'
            },
            in: {
              type: '全血',
              number: 0,
              time: '2019-8-28',
              state: 'in'
            }
          }
        },
        {
          name: '武汉市江岸区',
          value: {
            name: '武汉市妇幼保健院',
            number: '2612',
            out: {
              type: '血浆',
              number: '2612',
              time: '2019-8-22',
              state: 'out'
            },
            in: {
              type: '血浆',
              number: 0,
              time: '2019-8-22',
              state: 'in'
            }
          }
        },
        {
          name: '西安市雁塔区',
          value: {
            name: '西安交大第一附属医院',
            number: '4122',
            out: {
              type: '组织',
              number: 0,
              time: '2019-8-18',
              state: 'out'
            },
            in: {
              type: '组织',
              number: '4122',
              time: '2019-8-18',
              state: 'in'
            }
          }
        },
        {
          name: '海口市龙华区',
          value: {
            name: '海南医学院',
            number: '3288',
            out: {
              type: '尿液',
              number: 0,
              time: '2019-9-20',
              state: 'out'
            },
            in: {
              type: '尿液',
              number: '3288',
              time: '2019-9-20',
              state: 'in'
            }
          }
        }
      ],
      geoCoordMap: {
        '海口市龙华区': [110.3406270000, 19.9878440000],
        '西安市雁塔区': [108.9432630000, 34.2258640000],
        '武汉市江岸区': [114.2945750000, 30.6082270000],
        '武汉市武昌区': [114.3059530000, 30.5408790000],
        '天津市和平区兰州道': [117.1928960000, 39.1235200000],
        '天津市西青区': [117.1277060000, 39.1036090000],
        '天津市和平区新兴街道': [117.1898360000, 39.1116600000],
        '泰州市海陵区': [119.9422120000, 32.4445450000],
        '上海市杨浦区': [121.5241110000, 31.2790990000],
        '上海市长宁区': [121.4331960000, 31.2194950000],
        '上海市徐汇区': [121.4288960000, 31.1852930000],
        '济南市历下区趵突泉街道': [117.0253470000, 36.6554550000],
        '济南市槐荫区': [116.9904390000, 36.6633880000],
        '济南市历下区龙洞街道': [117.1280880000, 36.6689900000],
        '济南市历下区': [117.0254190000, 36.6625930000],
        '宁波市海曙区': [121.5504347818, 29.8881942443],
        '呼和浩特市赛罕区': [111.7027094276, 40.8149209719],
        '南京市玄武区': [118.7911006259, 32.0678210741],
        '广州市海珠区': [113.3235400000, 23.0889810000],
        '广州市从化区': [113.5935880000, 23.5539850000],
        '广州市天河区': [113.3685290786, 23.1304029041],
        '海门': [121.15, 31.89],
        '鄂尔多斯': [109.781327, 39.608266],
        '招远': [120.38, 37.35],
        '舟山': [122.207216, 29.985295],
        '齐齐哈尔': [123.97, 47.33],
        '盐城': [120.13, 33.38],
        '赤峰': [118.87, 42.28],
        '青岛': [120.33, 36.07],
        '乳山': [121.52, 36.89],
        '金昌': [102.188043, 38.520089],
        '泉州': [118.58, 24.93],
        '莱西': [120.53, 36.86],
        '日照': [119.46, 35.42],
        '胶南': [119.97, 35.88],
        '南通': [121.05, 32.08],
        '拉萨': [91.11, 29.97],
        '云浮': [112.02, 22.93],
        '梅州': [116.1, 24.55],
        '文登': [122.05, 37.2],
        '上海': [121.48, 31.22],
        '攀枝花': [101.718637, 26.582347],
        '威海': [122.1, 37.5],
        '承德': [117.93, 40.97],
        '厦门': [118.1, 24.46],
        '汕尾': [115.375279, 22.786211],
        '潮州': [116.63, 23.68],
        '丹东': [124.37, 40.13],
        '太仓': [121.1, 31.45],
        '曲靖': [103.79, 25.51],
        '烟台': [121.39, 37.52],
        '福州': [119.3, 26.08],
        '瓦房店': [121.979603, 39.627114],
        '即墨': [120.45, 36.38],
        '抚顺': [123.97, 41.97],
        '玉溪': [102.52, 24.35],
        '张家口': [114.87, 40.82],
        '阳泉': [113.57, 37.85],
        '莱州': [119.942327, 37.177017],
        '湖州': [120.1, 30.86],
        '汕头': [116.69, 23.39],
        '昆山': [120.95, 31.39],
        '宁波': [121.56, 29.86],
        '湛江': [110.359377, 21.270708],
        '揭阳': [116.35, 23.55],
        '荣成': [122.41, 37.16],
        '连云港': [119.16, 34.59],
        '葫芦岛': [120.836932, 40.711052],
        '常熟': [120.74, 31.64],
        '东莞': [113.75, 23.04],
        '河源': [114.68, 23.73],
        '淮安': [119.15, 33.5],
        '泰州': [119.9, 32.49],
        '南宁': [108.33, 22.84],
        '营口': [122.18, 40.65],
        '惠州': [114.4, 23.09],
        '江阴': [120.26, 31.91],
        '蓬莱': [120.75, 37.8],
        '韶关': [113.62, 24.84],
        '嘉峪关': [98.289152, 39.77313],
        '广州': [113.23, 23.16],
        '延安': [109.47, 36.6],
        '太原': [112.53, 37.87],
        '清远': [113.01, 23.7],
        '中山': [113.38, 22.52],
        '昆明': [102.73, 25.04],
        '寿光': [118.73, 36.86],
        '盘锦': [122.070714, 41.119997],
        '长治': [113.08, 36.18],
        '深圳': [114.07, 22.62],
        '珠海': [113.52, 22.3],
        '宿迁': [118.3, 33.96],
        '咸阳': [108.72, 34.36],
        '铜川': [109.11, 35.09],
        '平度': [119.97, 36.77],
        '佛山': [113.11, 23.05],
        '海口': [110.35, 20.02],
        '江门': [113.06, 22.61],
        '章丘': [117.53, 36.72],
        '肇庆': [112.44, 23.05],
        '大连': [121.62, 38.92],
        '临汾': [111.5, 36.08],
        '吴江': [120.63, 31.16],
        '石嘴山': [106.39, 39.04],
        '沈阳': [123.38, 41.8],
        '苏州': [120.62, 31.32],
        '茂名': [110.88, 21.68],
        '嘉兴': [120.76, 30.77],
        '长春': [125.35, 43.88],
        '胶州': [120.03336, 36.264622],
        '银川': [106.27, 38.47],
        '张家港': [120.555821, 31.875428],
        '三门峡': [111.19, 34.76],
        '锦州': [121.15, 41.13],
        '南昌': [115.89, 28.68],
        '柳州': [109.4, 24.33],
        '三亚': [109.511909, 18.252847],
        '自贡': [104.778442, 29.33903],
        '吉林': [126.57, 43.87],
        '阳江': [111.95, 21.85],
        '泸州': [105.39, 28.91],
        '西宁': [101.74, 36.56],
        '宜宾': [104.56, 29.77],
        '呼和浩特': [111.65, 40.82],
        '成都': [104.06, 30.67],
        '大同': [113.3, 40.12],
        '镇江': [119.44, 32.2],
        '桂林': [110.28, 25.29],
        '张家界': [110.479191, 29.117096],
        '宜兴': [119.82, 31.36],
        '北海': [109.12, 21.49],
        '西安': [108.95, 34.27],
        '金坛': [119.56, 31.74],
        '东营': [118.49, 37.46],
        '牡丹江': [129.58, 44.6],
        '遵义': [106.9, 27.7],
        '绍兴': [120.58, 30.01],
        '扬州': [119.42, 32.39],
        '常州': [119.95, 31.79],
        '潍坊': [119.1, 36.62],
        '重庆': [106.54, 29.59],
        '台州': [121.420757, 28.656386],
        '南京': [118.78, 32.04],
        '滨州': [118.03, 37.36],
        '贵阳': [106.71, 26.57],
        '无锡': [120.29, 31.59],
        '本溪': [123.73, 41.3],
        '克拉玛依': [84.77, 45.59],
        '渭南': [109.5, 34.52],
        '马鞍山': [118.48, 31.56],
        '宝鸡': [107.15, 34.38],
        '焦作': [113.21, 35.24],
        '句容': [119.16, 31.95],
        '北京': [116.46, 39.92],
        '徐州': [117.2, 34.26],
        '衡水': [115.72, 37.72],
        '包头': [110, 40.58],
        '绵阳': [104.73, 31.48],
        '乌鲁木齐': [87.68, 43.77],
        '枣庄': [117.57, 34.86],
        '杭州': [120.19, 30.26],
        '淄博': [118.05, 36.78],
        '鞍山': [122.85, 41.12],
        '溧阳': [119.48, 31.43],
        '库尔勒': [86.06, 41.68],
        '安阳': [114.35, 36.1],
        '开封': [114.35, 34.79],
        '济南': [117, 36.65],
        '德阳': [104.37, 31.13],
        '温州': [120.65, 28.01],
        '九江': [115.97, 29.71],
        '邯郸': [114.47, 36.6],
        '临安': [119.72, 30.23],
        '兰州': [103.73, 36.03],
        '沧州': [116.83, 38.33],
        '临沂': [118.35, 35.05],
        '南充': [106.110698, 30.837793],
        '天津': [117.2, 39.13],
        '富阳': [119.95, 30.07],
        '泰安': [117.13, 36.18],
        '诸暨': [120.23, 29.71],
        '郑州': [113.65, 34.76],
        '哈尔滨': [126.63, 45.75],
        '聊城': [115.97, 36.45],
        '芜湖': [118.38, 31.33],
        '唐山': [118.02, 39.63],
        '平顶山': [113.29, 33.75],
        '邢台': [114.48, 37.05],
        '德州': [116.29, 37.45],
        '济宁': [116.59, 35.38],
        '荆州': [112.239741, 30.335165],
        '宜昌': [111.3, 30.7],
        '义乌': [120.06, 29.32],
        '丽水': [119.92, 28.45],
        '洛阳': [112.44, 34.7],
        '秦皇岛': [119.57, 39.95],
        '株洲': [113.16, 27.83],
        '石家庄': [114.48, 38.03],
        '莱芜': [117.67, 36.19],
        '常德': [111.69, 29.05],
        '保定': [115.48, 38.85],
        '湘潭': [112.91, 27.87],
        '金华': [119.64, 29.12],
        '岳阳': [113.09, 29.37],
        '长沙': [113, 28.21],
        '衢州': [118.88, 28.97],
        '廊坊': [116.7, 39.53],
        '菏泽': [115.480656, 35.23375],
        '合肥': [117.27, 31.86],
        '武汉': [114.31, 30.52],
        '大庆': [125.03, 46.58]
      },
      inOutWarehouse2: [
        {
          name: '广东',
          value: 11700,
          list: [
            {
              company: '南方医学大学附属第三医院器官衰竭中心',
              type: '血液',
              number: '5000',
              time: '2019-8-12',
              state: 'out'
            },
            {
              company: '南方医科大学附属南方医院',
              type: '组织',
              number: '3500',
              time: '2019-8-16',
              state: 'in'
            },
            {
              company: '南方医科发现中西医结合医院',
              type: '全血',
              number: '3200',
              time: '2019-9-10',
              state: 'out'
            }
          ]
        },
        {
          name: '江苏',
          value: 3266,
          list: [
            {
              company: '南京口腔医院',
              type: '尿液',
              number: '3266',
              time: '2019-8-16',
              state: 'out'
            }
          ]
        },
        {
          name: '内蒙古',
          value: 1288,
          list: [
            {
              company: '内蒙古肿瘤医院',
              type: '血清',
              number: '1288',
              time: '2019-8-25',
              state: 'in'
            }
          ]
        },
        {
          name: '浙江',
          value: 3268,
          list: [
            {
              company: '宁波第二人民医院',
              type: '血液',
              number: '3268',
              time: '2019-6-8',
              state: 'in'
            }
          ]
        },
        {
          name: '山东',
          value: 11418,
          list: [
            {
              company: '山东大学齐鲁医院',
              type: '组织',
              number: '6211',
              time: '2019-7-9',
              state: 'in'
            },
            {
              company: '山东省立医院东院',
              type: '细胞',
              number: '2625',
              time: '2019-8-15',
              state: 'out'
            },
            {
              company: '山东省立医院内分泌',
              type: '唾液',
              number: '1326',
              time: '2019-7-7',
              state: 'out'
            },
            {
              company: '山东省医学科学院内分泌研究所',
              type: '痰液',
              number: '1088',
              time: '2019-5-15',
              state: 'out'
            },
            {
              company: '泰州市人民医院',
              type: '组织',
              number: '168',
              time: '2019-6-18',
              state: 'out'
            }
          ]
        },
        {
          name: '上海',
          value: 9266,
          list: [
            {
              company: '上海第六人民医院',
              type: '细胞',
              number: '2367',
              time: '2019-5-20',
              state: 'in'
            },
            {
              company: '上海皮肤病医院',
              type: '皮肤鳞屑',
              number: '1688',
              time: '2019-6-12',
              state: 'in'
            },
            {
              company: '上海新华医院',
              type: '全血',
              number: '5211',
              time: '2019-8-10',
              state: 'out'
            }
          ]
        },
        {
          name: '天津',
          value: 7179,
          list: [
            {
              company: '天津医科大学公卫学院',
              type: '细胞',
              number: '6283',
              time: '2019-8-8',
              state: 'in'
            },
            {
              company: '天津医科大学眼科医院',
              type: '眼液',
              number: '628',
              time: '2019-7-15',
              state: 'in'
            },
            {
              company: '天津医科大学总医院',
              type: '脑脊液',
              number: '268',
              time: '2019-7-21',
              state: 'in'
            }
          ]
        },
        {
          name: '陕西',
          value: 4122,
          list: [
            {
              company: '西安交大第一附属医院',
              type: '组织',
              number: '4122',
              time: '2019-8-18',
              state: 'in'
            }
          ]
        },
        {
          name: '海南',
          value: 3288,
          list: [
            {
              company: '海南医学院',
              type: '尿液',
              number: '3288',
              time: '2019-9-20',
              state: 'in'
            }
          ]
        },
        {
          name: '湖北',
          value: 5823,
          list: [
            {
              company: '武汉大学人民医院',
              type: '全血',
              number: '3211',
              time: '2019-8-28',
              state: 'out'
            },
            {
              company: '武汉市妇幼保健院',
              type: '血浆',
              number: '2612',
              time: '2019-8-22',
              state: 'out'
            }
          ]
        }

      ]
    }
  },
  mounted () {
    var _this = this
    // var index = 0
    this.$nextTick(function () {
      _this.geEcharts()
    })
    // _this.show('a', 2)
    // this.refInOut = window.setTimeout(function () {
    //   _this.show('a', 2)
    // }, 5000)
    // window.setTimeout(function () {
    //   _this.geEcharts()
    // }, 10000)
    // this.refInOut = window.setInterval(_this.show('a', 2), 5000)
    // this.refInOut = window.setTimeout(_this.geEcharts(), 10000)
  },
  beforeDestroy () {
    clearInterval(this.refInOut)
    this.refInOut = null
  },
  methods: {
    activeItem (item, index) {
      this.show(item, index)
    },
    geEcharts (showData) {
      var data = this.inOutWarehouse
      var geoCoordMap = this.geoCoordMap
      var convertData = function (data) {
        var res = []
        for (var i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i].name]
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value)
            })
          }
        }
        return res
      }
      var series = []
      series = [
        {
          type: 'map',
          map: 'china',
          geoIndex: 0,
          aspectScale: 0.75, // 长宽比
          showLegendSymbol: false, // 存在legend时显示
          label: {
            normal: {
              show: true
            },
            emphasis: {
              show: false,
              textStyle: {
                color: '#fff'
              }
            }
          },
          roam: true,
          itemStyle: {
            normal: {
              areaColor: '#031525',
              borderColor: '#1180c7'
            },
            emphasis: {
              areaColor: '#2B91B7'
            }
          },
          animation: false,
          data: this.inOutWarehouse2
        },
        {
          name: '城市',
          type: 'scatter',
          coordinateSystem: 'geo',
          data: convertData(data),
          symbolSize: function (val) {
            return 10
          },
          label: {
            normal: {
              formatter: function (params) {
                // console.log(params.data.value)
                let res = '{fline|' + params.data.value[2].name + '  ' + '样本数量：' + params.data.value[2].number + '份}\n{tline|' + params.data.value[2].in.type + ' 入库 ' + params.data.value[2].in.number + '份}\n{tline|' + params.data.value[2].out.type + ' 出库 ' + params.data.value[2].out.number + '份}'
                return res
              },
              position: 'top',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              padding: [0, 0],
              borderRadius: 3,
              lineHeight: 32,
              color: '#ffffff',
              rich: {
                fline: {
                  padding: [0, 10, 10, 10],
                  color: '#ffffff',
                  fontSize: '16',
                  lineHeight: 30
                },
                tline: {
                  padding: [0, 10, 0, 10],
                  lineHeight: 20,
                  color: '#ffffff'
                }
              },
              show: false
            },
            emphasis: {
              show: true
            }
          },
          itemStyle: {
            normal: {
              color: '#ddb926'
            }
          }
        }
      ]
      // console.log(111, convertData(data))
      if (showData) {
        console.log(111, showData, convertData(data))
        series.push(
          {
            name: '城市',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: showData,
            symbolSize: function (val) {
              return 10
            },
            label: {
              normal: {
                formatter: function (params) {
                  console.log(321, params)
                  let res = '{fline|' + params.data.value[2].value.name + '  ' + '样本数量：' + params.data.value[2].value.number + '份}\n{tline|' + params.data.value[2].value.in.type + '入库' + params.data.value[2].value.in.number + '份}\n{tline|' + params.data.value[2].value.out.type + '出库' + params.data.value[2].value.out.number + '份}'
                  return res
                },
                position: 'top',
                backgroundColor: 'rgba(50, 50, 50, 0.7)',
                padding: [0, 0],
                borderRadius: 3,
                lineHeight: 32,
                color: '#ffffff',
                rich: {
                  fline: {
                    padding: [0, 10, 10, 10],
                    color: '#ffffff',
                    fontSize: '16',
                    lineHeight: 30
                  },
                  tline: {
                    padding: [0, 10, 0, 10],
                    lineHeight: 20,
                    color: '#ffffff'
                  }
                },
                show: true
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: '#ddb926'
              }
            }
          }
        )
      }
      var option = {
        legend: {
          left: 'left',
          data: ['强', '中', '弱'],
          textStyle: {
            color: '#ccc'
          }
        },
        backgroundColor: '#f7f8fa', // 地图背景色
        visualMap: {
          show: false,
          min: 0,
          max: 10000,
          left: 100,
          bottom: 30,
          calculable: true,
          // seriesIndex: [0],
          inRange: {
            // color: ['#DAE8FF', '#1AA3EB', '#35CFC9', '#FFEC3E', '#FFC53D', '#FA541C']
            color: ['#B2F6FF', '#928DD9']
          }
        },
        geo: {
          map: 'china',
          show: true,
          roam: false, // 是否允许缩放
          label: {
            emphasis: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              color: '#DAE8FF', // 地图背景色
              borderColor: '#6cb0e0', // 省市边界线00fcff 516a89
              borderWidth: 1
            },
            emphasis: {
              color: '#828DD9', // 鼠标悬浮背景
              borderColor: '#6cb0e0'
            }
          },
          data: [{
            name: '安徽',
            value: 5369 }]
          // itemStyle: {
          //   normal: {
          //     areaColor: '#323C48',
          //     borderColor: '#252C32',
          //     shadowColor: '#e0dd85',
          //     shadowBlur: 20
          //   }
          // }
        },
        series: series
      }
      console.log(222, series)
      const mycharts = this.$echarts.init(document.getElementById('mycharts'))
      mycharts.setOption(option, true)
      setTimeout(function () {
        window.onresize = function () {
          mycharts.resize()
        }
      }, 200)
    },
    show (item, index) {
      // debugger
      // let myChartpie = this.$echarts.init(document.getElementById('myCharts'))
      // const mycharts = this.$echarts.init(document.getElementById('mycharts'))
      var geoCoordMap = this.geoCoordMap

      var geoCoord = geoCoordMap[item.name]
      var showData = [
        {
          name: item.name,
          value:
          [
            ...geoCoord,
            item
            // {
            //   name: '广州',
            //   value: {
            //     name: '南方医学大学附属第三医院器官衰竭中心',
            //     number: 9876,
            //     in: {
            //       type: '血液',
            //       number: '5000',
            //       time: '2019-8-12',
            //       state: 'out'
            //     },
            //     out: {
            //       type: '血液',
            //       number: '5000',
            //       time: '2019-8-12',
            //       state: 'out'
            //     }
            //   }
            // }
          ]
        }
      ]
      var _this = this
      this.$nextTick(function () {
        console.log(123)
        _this.geEcharts(showData)
        // mycharts.dispatchAction({
        //   type: 'showTip',
        //   seriesIndex: 2, // 第几条series
        //   dataIndex: 2 // 第几个tooltip
        //   // name: item.province
        // })
      })
      // const sampleResourceMonitor = this.$echarts.init(document.getElementById('sampleResourceMonitor'))
      // sampleResourceMonitor.dispatchAction({
      //   type: 'showTip',
      //   seriesIndex: 2 // 第几条series
      //   // dataIndex: index //第几个tooltip
      // })
    }
  }
}
</script>
<style lang="scss" scoped>
.home{
  height:100%;
  .test-box{
    height:100%;
    display: flex;
    .left-bottom{
      width:30%;
        // margin:15px 0 20px 20px;
        .left-bottom-list-box{
          position: relative;
          height:100%;
          overflow-y: auto
        }
        .left-bottom-list{
          margin:10px 20px;
          // height:40px;
          display: flex;
          align-items: center;
          .left-img{
            width:59px;
            height:59px;
            // border:1px solid #ccc;
            .left-img-svg{
              height:100%;
              width:100%;
            }
          }
          .right-con{
            width:calc(100% - 59px);
            display: flex;
            flex-direction:column;
            .right-con-one{
              padding:3px 10px;
              font-size:16px;
              font-family:PingFangSC;
              font-weight:500;
              color:rgba(34,34,34,1);
            }
            .right-con-two{
              padding:3px 10px;
              font-size:14px;
              font-family:PingFangSC;
              font-weight:400;
              color:rgba(34,34,34,1);
            }
            .right-con-three{
              padding:3px 10px;
              font-size:14px;
              font-family:PingFangSC;
              font-weight:400;
              color:rgba(129,124,124,1);
            }
          }
        }
        .in-out-active{
          background:#f2f2f2
        }
      }
  }
  #mycharts{
    height: 100%;
    width:70%;
    margin: 0 auto
  }
}
</style>
