import axios from "axios";

export const service = {
  getDummy: async () => {
    const response = await axios.get("https://dummyjson.com/products");
    return response;
  },

  postDummy: async (username: String, password: String) => {
    const response = await axios.post("https://dummyjson.com/auth/login", {
      username: username,
      password: password
    });
    return response;
  }
};
