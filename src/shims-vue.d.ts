/* eslint-disable */
declare module 'axios-tauri-adapter' {
  import s from 'axios-tauri-adapter';
  const s: AxiosAdapter;
  export default s;
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
