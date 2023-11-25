import axios from "axios";
import { message } from "antd"

const authRequest: any = axios.create({
  baseURL: 'http://91.218.183.231:2081/'
})
export const login: any = async () => {
  try {
    const response: any = await authRequest.get("/auth/login")
    console.log(response);
    message.info("welcome", 1500)
    return;
  } catch (error) {
    message.error("net error", 1500)
    console.log(error);
  }
};
