import axios from "axios";
import { ApiBaseData, ipApiData, Extensions, WeatherApiData } from "../model/api/amap";
import axiosTauriAdapter from 'axios-tauri-adapter';

const amapAxios = axios.create({
  baseURL: 'https://restapi.amap.com/',
  adapter: axiosTauriAdapter,
  timeout: 20000,
});

const API_KEY = '---';

amapAxios.interceptors.response.use((res) => {
  const data: ApiBaseData = res.data;

  return data.status === '1' ? data : Promise.reject(data)
})

export async function getIPInfo(): Promise<ipApiData> {
  return amapAxios.get('v3/ip?parameters', { params: { key: API_KEY } })
}

// 获取天气
export async function getWeatherInfo(
  { extensions, adcode }: { extensions?: Extensions, adcode?: string } = { extensions: 'all' }
): Promise<WeatherApiData> {
  extensions = extensions || 'all';
  const searchAdCode = adcode ? adcode : (await getIPInfo().catch(() => ({ adcode: undefined }))).adcode;
  if (!searchAdCode) {
    return Promise.reject("城市的adcode 获取失败");
  }
  return amapAxios.get('v3/weather/weatherInfo?parameters', { params: { key: API_KEY, city: searchAdCode, extensions } })
}
