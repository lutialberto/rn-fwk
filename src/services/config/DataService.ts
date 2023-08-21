import { AxiosInstance, AxiosResponse } from 'axios';

export async function getDataService<T>(axiosInstance: AxiosInstance, url: string, queryParams: object): Promise<T> {
  const response = await axiosInstance.get<any, AxiosResponse<any,T>>(url,{
    params: queryParams
  });
  return response.data;
}

export async function postDataService<T>(axiosInstance: AxiosInstance, url: string, body: object): Promise<T> {
  const response = await axiosInstance.post<any, AxiosResponse<any,T>>(url,body);
  return response.data;
}

export async function deleteDataService<T>(axiosInstance: AxiosInstance, url: string, data: object): Promise<T> {
  const response = await axiosInstance.delete<any, AxiosResponse<any,T>>(url,{
    data
  });
  return response.data;
}

export async function putDataService<T>(axiosInstance: AxiosInstance, url: string, data: object): Promise<T> {
  const response = await axiosInstance.put<any, AxiosResponse<any,T>>(url,data);
  return response.data;
}

export async function patchDataService<T>(axiosInstance: AxiosInstance, url: string, data: object): Promise<T> {
  const response = await axiosInstance.patch<any, AxiosResponse<any,T>>(url,data);
  return response.data;
}
