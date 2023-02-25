import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/api/";

let refresh = false;

axios.interceptors.response.use(
  (resp) => resp,
  async (error) => {
    if (error.response.status === 401 && !refresh) {
      refresh = true;

      const response = await axios.post(
        "/refresh",
        {},
        { withCredentials: true }
      );

      if (response.status === 200) {
        axios.defaults.headers.common[
          "token"
        ] = `Bearer ${response.data["token"]}`;

        return axios(error.config);
      }
    }
    refresh = false;
    return error;
  }
);
