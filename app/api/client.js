import { create } from "apisauce";

import cache from "../utility/cache";
import apiSettings from "../config/api";
import authStorage from "../auth/storage";

const apiClient = create(apiSettings);

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();

  if (!authToken) {
    return;
  }

  request.headers["x-auth-token"] = authToken;
});

const get = apiClient.get;

apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    cache.store(url, response.data);

    return response;
  }

  const data = await cache.get(url);

  return data ? { ok: true, data: data } : response;
};

export default apiClient;

// import { create } from "apisauce";
// import cache from "../utility/cache";

// const apiClient = create({
//   baseURL: "http://192.168.86.15:9000/api",
//   headers: {
//     "Content-Type": "multipart/form-data",
//     // "Content-Type": "application/json",
//   },
// });

// export default apiClient;
