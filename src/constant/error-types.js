module.exports = {
  userFormatError: {
    code: 10001,
    message: '用户名或密码不能为空'
  },
  userAlreadyExists: {
    code: 10002,
    message: '用户已存在'
  },
  userRegisterError: {
    code: 10003,
    message: '用户注册失败，请检查传入参数'
  },
  userDoesNotExists: {
    code: 10004,
    message: '用户不存在'
  },
  passwordIsIncorrect: {
    code: 10005,
    message: '密码错误'
  },
  tokenExpiredError: {
    code: 10006,
    message: '未授权，请重新登录'
  }
}
