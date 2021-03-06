/*
 * @Author: Zhang Qing
 * @Date: 2020-07-03 09:04:57
 * @LastEditTime: 2020-07-07 13:04:50
 * @LastEditors: your name
 * @Description: 模块管理路由配置
 * @FilePath: \PersonalBlog_Web\src\router\modelManage.js
 */ 

 //这个文件的path对应menu里的path
import Layout from "@/views/layout/App.vue";
export default {
  path: '/model_manage',
  component: Layout,
  name: 'ModelManage',
  redirect: '/model_manage',     //这个要对应menu里的path
  meta: {
    title: '模块管理'
  },
  children: [
    {
      path: '/model_manage/blog_manage',
      name: 'BlogManage',
      meta: {
        title: '文章管理'
      },
      component: resolve => require(["@/views/modelManage/BlogManage.vue"],resolve)
      // require里的路径是页面的路径
    },
    {
      path: '/model_manage/comment_manage',
      name: 'CommentManage',
      meta: {
        title: '评论管理'
      },
      component: resolve => require(["@/views/modelManage/CommentManage.vue"],resolve)
      // require里的路径是页面的路径
    },
    {
      path: '/model_manage/category_manage',
      name: 'CategoryManage',
      meta: {
        title: '分类管理'
      },
      component: resolve => require(["@/views/modelManage/CategoryManage.vue"],resolve)
      // require里的路径是页面的路径
    },
    {
      path: '/model_manage/tag_manage',
      name: 'TagManage',
      meta: {
        title: '标签管理'
      },
      component: resolve => require(["@/views/modelManage/TagManage.vue"],resolve)
      // require里的路径是页面的路径
    },
    {
      path: '/model_manage/LinkManage',
      name: 'LinkManage',
      meta: {
        title: '友情链接'
      },
      component: resolve => require(["@/views/modelManage/LinkManage.vue"],resolve)
      // require里的路径是页面的路径
    }
  ]
}