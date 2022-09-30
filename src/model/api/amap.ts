export interface ApiBaseData {
  // 0 error; 1 success
  status: '0' | '1';
  info: string;
  infocode: string;
}

// 气象类型
export type Extensions = 'all' | 'base';

export interface ipApiData extends ApiBaseData {
  adcode: string;
  city: string;
  info: string;
  infocode: string;
  province: string;
  rectangle: string;
}

export type Week = '1' | '2' | '3' | '4' | '5' | '6' | '7';

type DateString = `${number}-${number}-${number}`;

export type WeatherType = '晴' | '小雨' | '多云';

export interface ApiCast {
  date: DateString;
  week: Week;
  dayweather: WeatherType;
  nightweather: WeatherType;
  daytemp: string;
  nighttemp: string;
  daywind: string;
  nightwind: string;
  daypower: string;
  nightpower: string;
}

export interface ApiForecast {
  city: string;
  adcode: string;
  province: string;
  reporttime: string;
  casts: ApiCast[];
}

export interface WeatherApiData extends ApiBaseData {
  count: string;
  info: string;
  infocode: string;
  forecasts?: ApiForecast[];
  lives?: Live[];
}

export interface Live {
  province: string;
  city: string;
  adcode: string;
  weather: string;
  temperature: string;
  winddirection: string;
  windpower: string;
  humidity: string;
  reporttime: string;
}

