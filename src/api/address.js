import axios from "axios";

const BaseUrl = process.env.REACT_APP_ADDRESS_PROVINCE_API;

export const getProvince = async () => {
    const { data } = await axios.get(`${BaseUrl}`);
    return data.results;
  };
  
  export const getDistrict = async (province_id) => {
    const { data } = await axios.get(`${BaseUrl}/district/${province_id}`);
    return data.results;
  };
  
  export const getWards = async (district_id) => {
    const { data } = await axios.get(`${BaseUrl}/ward/${district_id}`);
    return data.results;
  };