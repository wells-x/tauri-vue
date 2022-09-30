import axios from 'axios';
import axiosTauriAdapter from 'axios-tauri-adapter';

const instance = axios.create({
  baseURL: 'http://localhost:3002/',
  adapter: axiosTauriAdapter,
  timeout: 20000,
});

instance.interceptors.request.use((config) => {

  return config;
});

instance.interceptors.response.use((res) =>{
  console.log(res);
  return res;
});

export default instance;

// interface ExampleData {
//   code: number;
//   data: string;
//   message: string;
// }

// export async function getExample(): Promise<ExampleData> {

//   return await fetch('http://localhost:3002', {
//     method: 'GET',
//     query: { name: 'test' },
//     timeout: 30,
//   }).then((res): ExampleData => {
//     // Response
//     const data = (res as Response<ExampleData>).data;
//     return { code: data.code, data: data.data, message: data.message }
//   });
// }
