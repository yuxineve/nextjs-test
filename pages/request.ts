import _ from 'lodash';
// import qs from 'qs';

export enum EHttpMethods {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE'
}

type ICustomRequestError = {
    status: number;
    statusText: string;
    url: string;
}

/**
 * @description: 声明请求头header的类型
 */
interface IHeaderConfig {
    Accept?: string;
    'Content-Type': string;
    [propName: string]: any;
  }
  
  export interface IResponseData {
    code: number;
    data: any;
    message: string;
  }

  interface IAnyMap { 
    [propName: string]: any;
  }
  export interface IRequestOptions {
    headers?: IHeaderConfig;
    method?: EHttpMethods;
    query?: IAnyMap;
    params?: IAnyMap;
    data?: IAnyMap;
    body?: string;
    timeout?: number;
    credentials?: 'include' | 'same-origin';
    mode?: 'cors' | 'same-origin';
    cache?: 'no-cache' | 'default' | 'force-cache';
  }

  /**
  * Http request
  * @param url request URL
  * @param options request options
  */
interface IHttpInterface {
    request<T = IResponseData>(url: string, options?: IRequestOptions): Promise<T>;
}
class Http implements IHttpInterface {
    public async request<T = IResponseData>(url: string, options?: IRequestOptions | undefined): Promise<T> {
        const defaultOptions = {
            credentials: 'same-origin',
            timeout: 10000,
            mode: 'cors',
            cache: 'no-cache',
        }

        if (options?.method === 'POST' || 'PUT') {
            (options as IRequestOptions) = {
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
                body: JSON.stringify(options?.data)
            }
        }
        const opts = _.merge(defaultOptions, options);
        // try {
            const baseUrl = 'https://api.gugudata.com/location/chinaregions/demo';
            console.log(url);
            const res = await fetch(`${baseUrl}/${url}`, opts);
            return res.json();
        // }catch (e) {
        //     // return e;
        // }
      
    }
}
  
const { request } = new Http();
export default request;
