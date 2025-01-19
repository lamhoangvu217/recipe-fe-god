import axios, { AxiosError, AxiosResponse } from "axios";

interface IGetMethod {
  url: string;
}
interface IPostMethod {
  url: string;
  body: object;
}
interface IPutMethod {
  url: string;
  param: object;
}
interface IDeleteMethod {
  url: string;
}
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_RECIPE_BE,
});


// Add a request interceptor
axiosInstance.interceptors.request.use(
  async function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export async function axiosGET(props: IGetMethod) {
  const { url } = props;

  return axiosInstance
    .get(url)
    .then((res: AxiosResponse) => {
      return res.data;
    })
    .catch((err: AxiosError) => {
      return err.response?.data
    });
}

export async function axiosPOST(props: IPostMethod) {
  const { url, body } = props;
  return axiosInstance
    .post(url, body)
    .then((res: AxiosResponse) => {
      return res.data;
    })
    .catch((err: AxiosError) => {
      return err.response?.data
    });
}
export async function axiosPUT(props: IPutMethod) {
  const { url, param } = props;
  return axiosInstance
    .put(url, param)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log("err", err);
    });
}
export async function axiosDELETE(props: IDeleteMethod) {
  const { url } = props;
  return axiosInstance
    .delete(url)
    .then((res: AxiosResponse) => {
      return res.data;
    })
    .catch((err: AxiosError) => {
      return err.response?.data
    });
}
