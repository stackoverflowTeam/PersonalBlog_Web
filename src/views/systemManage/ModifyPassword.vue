<!--
 * @Author: Zhang Qing
 * @Date: 2020-07-03 08:20:10
 * @LastEditTime: 2020-07-03 08:48:57
 * @LastEditors: your name
 * @Description: 修改密码页面
 * @FilePath: \PersonalBlog_Web\src\views\systemManage\ModifyPassword.vue
--> 
<template>
  <div class="app-container common-list-page">
    <el-form
      :model="resetForm"
      :rules="resetFormRules"
      ref="resetForm"
      status-icon
      label-width="100px"
    >
      <el-form-item label="旧密码：" prop="password">
        <el-input type="password" v-model="resetForm.password" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="新密码：" prop="newpwd">
        <el-input type="password" v-model="resetForm.newpwd" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码：" prop="newpassword1">
        <el-input type="password" v-model="resetForm.newpassword1" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click.native.prevent="toAmend">确认修改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入新密码"));
      } else if (value.toString().length < 4 || value.toString().length > 18) {
        callback(new Error("密码长度为4-18位"));
      } else {
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.resetForm.newpwd) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      resetForm: {
      //传给后台所需要的参数
        newpwd:"",
        newpassword1: "",
        password: "",
        
      },
      resetFormRules: {
         password: [
            { required: true, message: "请输入旧密码", trigger: 'blur' }
        ],  
        newpwd: [
            { required: true, validator: validatePass, trigger: 'blur' }
        ],
        newpassword1: [
          { required: true, validator: validatePass2, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.el-form {
  width: 60%;
  margin: 50px auto 0;
  text-align: center;
  button {
    margin: 20px 0 0;
  }
}
</style>