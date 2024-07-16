import { instance } from "./interceptor";

export const GetUser = async (token: string) => {
  return await instance({
    method: "GET",
    url: `/user/my`,
    headers: {
      Authorization: token,
    },
  }).then((response) => {
    return response.data;
  });
};
