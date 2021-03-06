/*
 * @Author: Zhang Qing
 * @Date: 2020-07-02 17:24:07
 * @LastEditTime: 2020-07-04 09:19:39
 * @LastEditors: your name
 * @Description: 侧边栏
 * @FilePath: \PersonalBlog_Web\src\menu\index.js
 */ 

// import articleManage from "./articleManage.js";
import modelManage from "./modelManage.js";
import systemManage from "./systemManage.js";
import editBlogManage from "./editBlogManage.js";

/**
 * 首页
 * @type {{name: string, path: string, icon: string}}
 */
let home = {
  name: "后台管理",
  path: "/",
  permissionsKey: "",
  icon: "fa fa-tachometer"
};

export default {
  home,
  // 写博客模块
  editBlogManage,
  // 管理模块  --》》二级  分为博客管理，评论管理，分类管理，标签管理，友情连接
  modelManage,
  // 系统管理 ---》》二级  分为  修改密码 安全退出
  systemManage

  // articleManage     //博客管理
  //helpCenter
};
