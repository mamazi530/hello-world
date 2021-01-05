<template>
  <div>
    <el-container class="container">
      <el-header class="header">
        <el-row>
          <el-col :span="16" class="headerlogo">
            <div class="grid-content bg-purple">
              <img
                style="width: 100px; height: 60px"
                src="../assets/login.jpg"
                alt="无法显示图片"
              />
              <!-- <el-image :src="require('../assets/login1.jpg')"></el-image> -->
            </div>
          </el-col>
          <el-col :span="8" class="rightsection">
            <span>mamazi</span>
            <el-dropdown>
              <i class="el-icon-setting" style="margin-right: 15px"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>查看</el-dropdown-item>
                <el-dropdown-item @click.native="logout">登出</el-dropdown-item>              
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside class="aside">
          <!-- 侧边栏导航  -->
          aside
        </el-aside>
        <el-main class="main">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "home",
  methods:{
    logout(){
      console.log("登出");
      this.$confirm("退出登录, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        this.$router.push({ path: "/" });
      });
    }
  }
};
</script>

<style scoped>
/* .el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
} */

.container {
  height: 100vh;
  font-size: 15px;
}
.header {
  background: #b3c0d1;
  color: #fff;
}
.aside {
  background: #8a898d;
  color: #fff;
  /* height: 100%; */
}
.main {
  /* height: 100%; */
  color: #212121;
}
.headerlogo {
  text-align: left; 
  margin: auto;
}
.rightsection {
  line-height: 60px;
  text-align: right;
}
</style>