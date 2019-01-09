/**
 * 描述：路由文件
 */
import App from "../App";

// 404
const _404 = r =>
  require.ensure([], () => r(require("../page/404/404")), "_404");

// main
const main = r =>
  require.ensure([], () => r(require("../page/main/main")), "main");

// login
const login = r =>
  require.ensure([], () => r(require("../page/login/login")), "login");

// 首页
const home = r =>
  require.ensure([], () => r(require("../page/main/home/home")), "home");
// 监控

export default [
  // 未匹配到则404页面
  {
    path: "*",
    component: _404
  },
  {
    path: "/404",
    component: _404
  },
  {
    path: "/",
    component: App,
    children: [
      {
        path: "",
        redirect: "/login"
      },
      {
        name: "登录",
        path: "login",
        component: login
      },
      {
        name: "404",
        path: "404",
        component: _404
      },
      // 主文件
      {
        path: "main",
        component: main,
        children: [
          {
            path: "",
            redirect: "home"
          },
          {
            name: "首页",
            path: "home",
            component: home
          }
        ]
      }
    ]
  }
];