<template>
  <div>
    <el-container class="container">
      <el-header class="header">
        <el-row type="flex">
          <el-col :span="8" class="headerlogo">
            <div class="grid-content bg-purple">
              <img
                style="width: 100px; height: 60px"
                src="../assets/login.jpg"
                alt="无法显示图片"
              />
              <!-- <el-image :src="require('../assets/login1.jpg')"></el-image> -->
            </div>
          </el-col>
          <el-col :span="8" class="selectop">
            <el-select
              v-model="value"
              placeholder="请选择"
              style="margin-right: 15px"
              @change="change"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                :disabled="item.disabled"
                
              >
              </el-option>
            </el-select>
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
          <!-- unique-opened只展开一个 -->
          <!-- router开启路由模式 -->
          <el-menu
            :unique-opened="true"
            :router="true"
            class="menu"
            background-color="#0099CC"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-submenu
              :index="' ' + item1.order"
              v-for="item1 in menuData"
              :key="item1.path"
            >
              <!--表示可以展开的一组 -->
              <template slot="title">
                <!--图标 -->
                <i class="el-icon-s-grid"></i>
                <!--文字 -->
                <span>{{ item1.name }}</span>
              </template>
              <el-menu-item
                class="menuItem"
                v-for="item2 in item1.children"
                :key="item2.path"
                :index="item2.path"
              >
                <i class="el-icon-document"></i>
                <!--图标 -->
                <span>{{ item2.name }}</span>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main class="main"><router-view :env="value"></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "home",
  methods: {
    logout() {
      console.log("登出");
      this.$confirm("退出登录, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        this.$router.push({ path: "/" });
      });
    },
  },
  data() {
    return {
      menuData: [
        {
          name: "Essjob",
          order: "1",
          path: "essjob",
          children: [
            {
              path: "customer_mst",
              name: "Customer_MST",
            },
          ],
        },
        {
          name: "Inbound",
          order: "2",
          path: "inbound",
          children: [
            {
              path: "componyinfomanage",
              name: "企业信息",
            },
          ],
        },
        {
          path: "Outbound",
          name: "outbound",
          order: "3",
          children: [
            {
              path: "postinfomange",
              name: "岗位信息",
            },
          ],
        },
        {
          path: "Check",
          name: "check",
          order: "4",
          children: [
            {
              path: "getLastStatus",
              name: "getLastStatus",
            },
            {
              path: "getStatusByID",
              name: "getStatusByID",
            },
          ],
        },
        {
          path: "Table",
          name: "table",
          order: "5",
          children: [
            {
              path: "cnHCMmst",
              name: "cnHCMmst",
            },
          ],
        },
      ],

      options: [
        {
          value: "DEV",
          label: "DEV开发环境",
        },
        {
          value: "UAT",
          label: "UAT测试环境",
        },
        {
          value: "PROD",
          label: "Prod生产环境",
          disabled: true
        },
      ],
      value: "UAT",
    };
  },
  methods:{
    change(selVal){
      
        this.value = selVal
      }
  },
  mounted(){
        this.value = "UAT"
  },
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
  background: #6699cc;
  color: #fff;
}
.aside {
  background: #6699cc;
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
.selectop {
  display: flex;
  justify-content: center; /*主轴上居中*/
  align-items: center; /*侧轴上居中*/
}
</style>