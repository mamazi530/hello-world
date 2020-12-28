<template>
  <div>
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-menu"></i>CheckStatus</template>
            <el-menu-item index="1-1">getLastStatus</el-menu-item>
            <el-menu-item index="1-2">getStatusByID</el-menu-item>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>Inbound</template>
            
            <el-submenu index="2-1">
              <template slot="title">精算</template>
              <el-menu-item index="2-1-1">CN045</el-menu-item>
              <el-menu-item index="2-1-2">CN056</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-menu"></i>Outbound</template>
             
              <el-menu-item index="3-1">CN003</el-menu-item>
              <el-menu-item index="3-2">CN004</el-menu-item>
            
          </el-submenu>
          
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>name</span>
        </el-header>

        <el-main>
          
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "home",
};
</script>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>