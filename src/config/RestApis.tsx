const prodUrl = "kolaysaIK.com";
const testUrl = "http://localhost:9090/v1/test";
const devUrl = "http://localhost:9090/v1/dev";

const server = devUrl;

const apis = {
  userService: server + "/user",
  authService: server + "/user",

  commentService: server +"/comment",
  adminAuthService: server + "/admin",
  commentCardService: server +"/comment"

};

export default apis;
