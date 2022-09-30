import { ApiBaseData, ApiCast, Live } from "../api/amap";

export interface Cast extends ApiCast {
  // add prop
  dayWeatherClass?: string;
  nightWeatherClass?: string;
}

export interface Forecast {
  city: string;
  adcode: string;
  province: string;
  reporttime: string;
  casts: Cast[];
}

export interface WeatherApiData extends ApiBaseData {
  count: string;
  info: string;
  infocode: string;
  forecasts?: Forecast[];
  lives?: Live[];
}
