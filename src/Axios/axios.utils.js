import axios from "axios";

// This function will handle the get request.
export const axiosGetUtils = async (relativePath, param={}) => {
    console.log('///???', relativePath, param)
  const axiosGetParam = {
    params: param,
  };
  try {
    const response = await axios.get(relativePath, axiosGetParam);
    return response?.data;
  } catch (error) {
    console.log("AXIOS-ERROR", error);
  }
};

