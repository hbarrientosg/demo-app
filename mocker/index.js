const casual = require("casual");
const moment = require("moment-timezone");
const delay = require('mocker-api/utils/delay');
const { array_of, paginate } = require("./utils");

casual.define("user", () => () => ({
  id: casual.uuid,
  name: casual.name,
  avatarUrl: `https://api.adorable.io/avatars/134/${casual.name}`,
  createdAt: moment().toISOString()
}));

const api = {
  users: array_of(100, casual.user)
};

  // <https://drieam.instructure.com/api/v1/courses?page=1&per_page=10>; rel="current",
  // <https://drieam.instructure.com/api/v1/courses?page=1&per_page=10>; rel="first",
  // <https://drieam.instructure.com/api/v1/courses?page=1&per_page=10>; rel="last"

const proxy = {
  // Priority processing.
  // apiMocker(app, path, option)
  // This is the option parameter setting for apiMocker
  _proxy: {
    proxy: {
      // Turn a path string such as `/user/:name` into a regular expression.
      // https://www.npmjs.com/package/path-to-regexp
      "/repos/(.*)": "https://api.github.com/",
      "/:owner/:repo/raw/:ref/(.*)": "http://127.0.0.1:2018",
      "/api/repos/(.*)": "http://127.0.0.1:3721/"
    },
    // rewrite target's url path. Object-keys will be used as RegExp to match paths.
    // https://github.com/jaywcjlove/mocker-api/issues/62
    pathRewrite: {
      "^/api/repos/": "/repos/"
    },
    changeHost: true,
    // modify the http-proxy options
    httpProxy: {
      options: {
        ignorePath: true
      },
      listeners: {
        proxyReq: function(proxyReq, req, res, options) {
          console.log("proxyReq");
        }
      }
    }
  },
  "GET /api/v1/users": (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const perPage = parseInt(req.query.perPage) || 10; 
    const current = paginate(api.users, page, perPage);

    if (current.nextPage) {
      res.set("Link", `</api/v1/users?page=${current.nextPage}>; rel="next"`);
    }
    res.set("total", current.totalCount);
    res.set('Per-Page', perPage);

    return res.json(
      current.pageData
    );
  },
  "GET /api/:owner/:repo/raw/:ref/(.*)": (req, res) => {
    const { owner, repo, ref } = req.params;
    // http://localhost:8081/api/admin/webpack-mock-api/raw/master/add/ddd.md
    // owner => admin
    // repo => webpack-mock-api
    // ref => master
    // req.params[0] => add/ddd.md
    return res.json({
      id: 1,
      owner,
      repo,
      ref,
      path: req.params[0]
    });
  },
  "POST /api/login/account": (req, res) => {
    const { password, username } = req.body;
    if (password === "888888" && username === "admin") {
      return res.json({
        status: "ok",
        code: 0,
        token: "sdfsdfsdfdsf",
        data: {
          id: 1,
          username: "kenny",
          sex: 6
        }
      });
    } else {
      return res.status(403).json({
        status: "error",
        code: 403
      });
    }
  },
  "DELETE /api/user/:id": (req, res) => {
    console.log("---->", req.body);
    console.log("---->", req.params.id);
    res.send({ status: "ok", message: "删除成功！" });
  }
};

module.exports = delay(proxy, 500);
