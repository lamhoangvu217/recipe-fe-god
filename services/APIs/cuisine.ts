import { axiosGET } from "@/helpers/TypeAxios";

export default class Cuisine {
  getAllCuisines() {
    return axiosGET({ url: `/cuisines` });
  }
}