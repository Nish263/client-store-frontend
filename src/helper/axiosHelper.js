import axios from "axios";

const rootUrlAPI = "http://localhost:8000/api/v1";
const productEP = rootUrlAPI + "/products";

const apiProcessor = async ({ method, url }) => {
  try {
    const { data } = await axios({
      method,
      url,
    });
    return data;
  } catch (error) {
    let message = error.message;
    console.log(message);
  }
};
export const getAllProducts = () => {
  const url = productEP;
  return apiProcessor({ method: "get", url });
};
