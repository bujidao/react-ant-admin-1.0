declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
  const url: string;
  export default url;
}

// redux
// detail: https://github.com/redux-utilities/flux-standard-action
interface ReduxActionType {
  type: string;
  payload?: any;
  error?: boolean;
  meta?: any;
}

// axios

// import { AxiosRequestConfig } from 'axios'
// declare module 'axios' {
//   export interface AxiosRequestConfig {
//     apiModel?: string;
//   }
// }
