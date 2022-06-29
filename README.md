# node-mall

基于 nestjs + mysql 实现的后端接口，包含商城后台管理系统（rbac）与商城客户端（支付宝沙箱实现支付）。前端实现效果：

- [商城客户端实现效果](https://mi.zhanggin.work)，客户端访问在 chrome 请切换到移动端模式
- [商城后台管理系统实现效果](https://doc.zhanggin.work)

[商城客户端接口文档](https://mi.zhanggin.work/api-docs)

[商城后台管理系统接口文档](https://doc.zhanggin.work/api-docs)

# 数据导入

将根目录下的`.sql`文件导入到数据库中

# 项目启动

1. 克隆项目到本地
2. 进入项目目录。根目录下创建`.env`文件，文件内容参照根目录下的`.env.example`文件。若仅启动商城后台管理系统，`.env`文件配置到`SECRET`字段即可；若需启动商城客户端，还需配置腾讯云 cos 存储与支付宝沙箱
3. 安装依赖，根目录下执行`npm i`
   ```shell
     npm i
   ```
4. 启动项目

   - 商城后台管理系统
     ```shell
     npm run start:dev
     ```
   - 商城客户端
     ```shell
     nest start -w web
     ```
   - 构建生产环境
     ```shell
     npm run build
     ```
