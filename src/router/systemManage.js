/*
 * @Author: Zhang Qing
 * @Date: 2020-07-03 09:06:16
 * @LastEditTime: 2020-07-03 09:15:33
 * @LastEditors: your name
 * @Description: 系统管理路由配置
 * @FilePath: \PersonalBlog_Web\src\router\systemManage.js
 */ 
import Layout from "@/views/layout/App.vue";
export default {
  path: '',
  component: Layout,
  name: '',
  redirect: '',     //这个要对应menu里的path
  meta: {
    title: ''
  },
  children: [
    {
      path: '',
      name: '',
      meta: {
        title: ''
      },
      component: resolve => require([""],resolve)
      // require里的路径是页面的路径
    }
  ]
}