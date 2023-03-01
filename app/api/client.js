import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://paddle.eu-west-2.elasticbeanstalk.com/api",
});

export default apiClient;
