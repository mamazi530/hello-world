<template>
  <div>
    <el-button @click="query()" type="primary">查询</el-button>
    <el-table style="width: 100%" border :data="tableData">
      <template v-for="(item, index) in tableHead">
        <el-table-column
          :prop="item.column_name"
          :label="item.column_comment"
          :key="index"
          v-if="item.column_name != 'id'"
        ></el-table-column>
      </template>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >Edit</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableHead: [
        {
          column_name: "payroll_element_name",
          column_comment: "payroll",
        },
        {
          column_name: "use_status",
          column_comment: "use_status",
        },
        {
          column_name: "is_negative_num",
          column_comment: "is_negative_num",
        },
      ],
      tableData: [],
    };
  },
  methods: {
    handleEdit(index, row) {
      this.tableData.forEach((v) => {
        console.log("---->" + v);
      });
    },
    handleDelete(index, row) {
      for (var item in row) {
        console.log(item + "---->" + row[item]);
      }
    },
    query() {
      var that = this;
      var config = that.axiosConfig(
        "POST",
        "/ChinaIntegration/ChinaUtilsServicePS/DBCheck",
        JSON.stringify({ packageName: "cn_hcm_query" })
      );
      this.axios(config)
        .then(function (response) {
          that.tableData = JSON.parse(response.data.outMsg);
        })
        .catch(function (error) {
          console.log(error);
          that.$message({
            showClose: true,
            message: "获取表数据错误，请联系管理员",
            type: "error",
          });
        });
    },

    axiosConfig(method, endpoint, data) {
      return {
        method: method,
        url: process.env.VUE_APP_BASE_API + endpoint,
        headers: {
          Authorization: process.env.VUE_APP_API_AUTH,
          "Content-Type": "application/json",
        },
        data: data,
      };
    },
  },
};
</script>

<style>
</style>