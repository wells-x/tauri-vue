import { AxiosResponse } from "axios";
import request from "./request";

import { appWindow, WebviewWindow } from '@tauri-apps/api/window'

// emit an event that are only visible to the current window
appWindow.emit('event-name', { message: 'Tauri is awesome!' })

// create a new webview window and emit an event only to that window
const webview = new WebviewWindow('window')
webview.emit('event-name')

interface ExampleData {
  code: number;
  data: string;
  message: string;
}

export async function getExample(): Promise<ExampleData> {

  // return await fetch('http://localhost:3002', {
  //   method: 'GET',
  //   query: { name: 'test' },
  //   timeout: 30,
  // }).then((res): ExampleData => {
  //   // Response
  //   const data = (res as Response<ExampleData>).data;
  //   return { code: data.code, data: data.data, message: data.message }
  // });
  return request.get('http://localhost:3002',).then((res): ExampleData => {
    // Response
    const data = (res as AxiosResponse<ExampleData>).data;
    return { code: data.code, data: data.data, message: data.message }
  });
}
