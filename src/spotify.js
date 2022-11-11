import axios from "axios";

const authEndpoint = process.env.React_APP_AUTHENDPOINT;
const clientId = process.env.React_APP_CLIENTID;
const redirectUrl = process.env.React_APP_REDIRECTURL;
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

export const apiClient = axios.create({
  baseURL: "https://api.spotify.com/v1",
});
export const setClientToken = (token) => {
  apiClient.interceptors.request.use(async function (config) {
    config.headers.Authorization = "Bearer " + token;
    return config;
  });
};
