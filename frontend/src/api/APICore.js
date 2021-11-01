import axios from "axios";

export const APICore = async (endpoint, method, token, body) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  let response;
  if (method === "post") response = await axios.post(endpoint, body, config);
  else if (method === "get") response = await axios.get(endpoint);
  return response.data;
};
