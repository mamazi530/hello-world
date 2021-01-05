<template>
  <div>
    <el-form
      ref="form"
      :model="form"
      :rules="loginRules"
      label-width="80px"
      class="login-box"
    >
      <el-image :src="require('../assets/login3.gif')"></el-image>
      <h3 class="login-title">欢迎登录</h3>
      <el-form-item label="用户名:" prop="name">
        <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码:" prop="password">
        <el-input
          v-model="form.password"
          placeholder="请输入密码"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item class="login-btn">
        <el-button type="primary" @click="onSubmit('form')">登录</el-button>
        <el-button type="primary" @click="cancel('form')">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      form: {
        name: "",
        password: "",
      },
      logo: "../assets/login3.gif",
      loginRules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    onSubmit(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          this.$router.push("/home");
          this.$message({
            showClose: true,
            message: "登录成功",
            type: "success",
          });
        } else {
          this.$message({
            showClose: true,
            message: "用户名或密码错误",
            type: "error",
          });
        }
      });
    },
    cancel(form) {
      this.$refs[form].resetFields();
    },
  },
};
</script>

<style>
.login-box {
  /* 宽度 */
  width: 400px;
  /* 边距 */
  margin: auto;
  /* 边框 */
  border: 1px solid #dcdfe6;
  /* 内边距 */
  padding: 40px;
  /* 边框圆角 */
  border-radius: 10px;
  /* 阴影 */
  box-shadow: 0 0 30px #dcdfe6;
}
.login-title {
  /* 文本居中 */
  text-align: center;
}
.login-btn {
  text-align: center;
}
</style>
