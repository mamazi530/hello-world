<template>
  <div>
    <el-button @click="query()" type="primary" icon="el-icon-search"
      >查询</el-button
    >
    <el-button
      @click="newLine()"
      type="primary"
      icon="el-icon-circle-plus-outline"
      plain
      >新增</el-button
    >

    <el-dialog
      :title="dialogTitle"
      :visible.sync="dialogFormVisible"
      v-if="dialogFormVisible"
    >
      <el-form :model="form">
        <el-form-item label="Payroll" label-width="120px">
          <el-input
            v-model="form.payroll_element_name"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="Use_Status" label-width="120px">
          <el-select v-model="form.use_status" placeholder="请选择">
            <el-option label="Y" value="Y"></el-option>
            <el-option label="N" value="N"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="is_negative_num" label-width="120px">
          <el-select v-model="form.is_negative_num" placeholder="请选择">
            <el-option label="正数" value=""></el-option>
            <el-option label="负数" value="-"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>

    <el-table style="width: 100%" border :data="tableData">
      <template v-for="(item, index) in tableHead">
        <el-table-column
          :prop="item.column_name"
          :label="item.column_comment"
          :key="index"
          :width="item.column_width"
          v-if="item.column_name != 'id'"
        ></el-table-column>
      </template>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >

          <el-popconfirm
            title="确定删除这条数据？"
            @confirm="handleDelete(scope.$index, scope.row)"
          >
            <el-button slot="reference" size="mini" type="danger"
              >删除</el-button
            >
          </el-popconfirm>
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
          column_width: "250",
        },
        {
          column_name: "use_status",
          column_comment: "use_status",
          column_width: "100",
        },
        {
          column_name: "is_negative_num",
          column_comment: "is_negative_num",
          column_width: "150",
        },
      ],
      tableData: [],
      dialogFormVisible: false,
      form: {
        payroll_element_name: null,
        use_status: null,
        is_negative_num: null,
      },
      dialogTitle: "",
    };
  },
  methods: {
    deleteConfim(index) {
      console.log(index);
    },
    handleEdit(index, row) {
      this.dialogFormVisible = true;
      this.dialogTitle = "编辑";
      this.form = row;
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

    newLine() {
      this.dialogFormVisible = true;
      this.dialogTitle = "新建";
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