import { WeatherType } from "@/model/api/amap";

export function getWeatherClass(weather: WeatherType): string {

  const weatherClass = {
    "id": "3619854",
    "name": "天气",
    "font_family": "iconfont",
    "css_prefix_text": "icon-",
    "description": "",
    "glyphs": [
      {
        "icon_id": "5858072",
        "name": "天气-冰雹",
        "font_class": "tianqi-bingbao",
        "unicode": "e609",
        "unicode_decimal": 58889
      },
      {
        "icon_id": "5858073",
        "name": "天气-雷雨",
        "font_class": "tianqi-leiyu",
        "unicode": "e60a",
        "unicode_decimal": 58890
      },
      {
        "icon_id": "5858074",
        "name": "天气-暴雨",
        "font_class": "tianqi-baoyu",
        "unicode": "e60b",
        "unicode_decimal": 58891
      },
      {
        "icon_id": "5858075",
        "name": "天气-多云",
        "font_class": "tianqi-duoyun",
        "unicode": "e60c",
        "unicode_decimal": 58892
      },
      {
        "icon_id": "5858076",
        "name": "天气-大雨",
        "font_class": "tianqi-dayu",
        "unicode": "e60d",
        "unicode_decimal": 58893
      },
      {
        "icon_id": "5858077",
        "name": "天气-晴",
        "font_class": "tianqi-qing",
        "unicode": "e60e",
        "unicode_decimal": 58894
      },
      {
        "icon_id": "5858078",
        "name": "天气-大雪",
        "font_class": "tianqi-daxue",
        "unicode": "e60f",
        "unicode_decimal": 58895
      },
      {
        "icon_id": "5858079",
        "name": "天气-沙尘",
        "font_class": "tianqi-shachen",
        "unicode": "e610",
        "unicode_decimal": 58896
      },
      {
        "icon_id": "5858080",
        "name": "天气-霜",
        "font_class": "tianqi-shuang",
        "unicode": "e611",
        "unicode_decimal": 58897
      },
      {
        "icon_id": "5858081",
        "name": "天气-雾霾",
        "font_class": "tianqi-wumai",
        "unicode": "e612",
        "unicode_decimal": 58898
      },
      {
        "icon_id": "5858082",
        "name": "天气-小雪",
        "font_class": "tianqi-xiaoxue",
        "unicode": "e613",
        "unicode_decimal": 58899
      },
      {
        "icon_id": "5858083",
        "name": "天气-小雨",
        "font_class": "tianqi-xiaoyu",
        "unicode": "e614",
        "unicode_decimal": 58900
      },
      {
        "icon_id": "5858084",
        "name": "天气-小雨转晴",
        "font_class": "tianqi-xiaoyuzhuanqing",
        "unicode": "e615",
        "unicode_decimal": 58901
      },
      {
        "icon_id": "5858085",
        "name": "天气-夜",
        "font_class": "tianqi-ye",
        "unicode": "e616",
        "unicode_decimal": 58902
      },
      {
        "icon_id": "5858086",
        "name": "天气-夜多云",
        "font_class": "tianqi-yeduoyun",
        "unicode": "e617",
        "unicode_decimal": 58903
      },
      {
        "icon_id": "5858087",
        "name": "天气-雪转晴",
        "font_class": "tianqi-xuezhuanqing",
        "unicode": "e618",
        "unicode_decimal": 58904
      },
      {
        "icon_id": "5858088",
        "name": "天气-阴天",
        "font_class": "tianqi-yintian",
        "unicode": "e619",
        "unicode_decimal": 58905
      },
      {
        "icon_id": "5858089",
        "name": "天气-雨加雪",
        "font_class": "tianqi-yujiaxue",
        "unicode": "e61a",
        "unicode_decimal": 58906
      },
      {
        "icon_id": "5858090",
        "name": "天气-中雨",
        "font_class": "tianqi-zhongyu",
        "unicode": "e61b",
        "unicode_decimal": 58907
      },
      {
        "icon_id": "5858091",
        "name": "天气-中雪",
        "font_class": "tianqi-zhongxue",
        "unicode": "e61c",
        "unicode_decimal": 58908
      }
    ]
  }


  const findWeather = weatherClass.glyphs.find((weatherMap) => {
    const weatherName = `${weatherClass.name}-${weather}`;
    return weatherMap.name === weatherName || weatherMap.name.includes(weatherName)
  })

  return findWeather ? `${weatherClass.css_prefix_text}${findWeather.font_class}` : '';

}
