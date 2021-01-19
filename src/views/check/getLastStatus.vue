<template>
  <div>
    <el-row>
      <el-col :span="3">
        <div class="grid-content bg">
          <el-select v-model="request_method">
            <el-option
              v-for="item in methods"
              :key="item.value"
              :value="item.value"
              :label="item.label"
              disabled
            ></el-option>
          </el-select>
        </div>
      </el-col>
      <el-col :span="15">
        <div class="grid-content bg">
          <el-input
            placeholder="输入请求URL"
            v-model="request_url"
            disabled
          ></el-input>
        </div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content"></div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content">
          <el-button type="success" round @click="send()">Send</el-button>
        </div>
      </el-col>
    </el-row>

    <el-row class="bg" v-if="false">
      <el-col :span="24">
        <el-tabs v-model="activeName">
          <el-tab-pane label="params" name="params">
            <el-row>
              <el-col :span="8"
                ><div class="grid-content bg center">KEY</div></el-col
              >
              <el-col :span="8"
                ><div class="grid-content bg center">VALUE</div></el-col
              >
              <el-col :span="4">
                <el-button @click="addParam()" type="primary">ADD</el-button>
              </el-col>
            </el-row>
            <el-row v-for="(item, index) in param_data" :key="index">
              <el-col :span="8">
                <el-input v-model="item.key"></el-input>
              </el-col>
              <el-col :span="8">
                <el-input v-model="item.value"></el-input>
              </el-col>
              <el-col :span="2">
                <el-button @click="delParam(index)" style="margin-left: 0px"
                  >DEL</el-button
                >
              </el-col>
            </el-row>
          </el-tab-pane>

          <el-tab-pane label="body(raw)" name="raw">
            <el-row>
              <el-col :span="18">
                <el-input
                  type="textarea"
                  placeholder="请输入请求内容"
                  :autosize="{ minRows: 8, maxRows: 8 }"
                  v-model="raw"
                ></el-input>
              </el-col>
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>

    <el-row>
      <div class="grid-content"></div>
    </el-row>
    <el-row>
      <el-col :span="18">
        <textarea cols="150" rows="25" disabled v-model="resp"></textarea>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {showXml} from "../../utils/showXML"
export default {
  name: "getLastStatus",
  data() {
    return {
      request_method: "GET",
      methods: [
        { value: "GET", label: "GET" },
        { value: "POST", label: "POST" },
        { value: "DELETE", label: "DELETE" },
        { value: "PUT", label: "PUT" },
      ],
      activeName: "params",
      param_data: [{ null: null }],
      raw: "",
      resp: "",
      request_url:
        process.env.VUE_APP_BASE_API + "/GlobalCmnParts/getStatusTbl",
    };
  },
  methods: {
    addParam() {
      this.param_data.push({ key: null, value: null });
    },
    delParam(id) {
      this.param_data.splice(id, 1);
    },
    send() {
      this.resp = "等待服务器返回，请稍后";
      this.sendRequest();
    },
    sendRequest() {
      var config = {
        method: this.request_method,
        url: this.request_url,
        headers: {
          Authorization: process.env.VUE_APP_API_AUTH,
        },
      };

      var that = this;
      this.axios(config)
        .then(function (response) {
          that.resp = showXml(response.data);
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          that.resp = "服务器异常，请联系管理员解决, " + error;
          console.log(error);
        });
    },

    
  },
};
</script>

<style scoped>
.bd {
  border: 1px solid red;
}
.c_header {
  width: 100%;
  height: 10%;
}
.grid-content {
  border-radius: 4px;
  min-height: 40px;
}
.bg {
  background-color: #f4f4f4;
}

.center {
  text-align: center;
  line-height: 40px;
}

.bu_center {
  margin-left: 0px;
}
</style>