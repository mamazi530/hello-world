<template>
  <div>
    <el-row>
      <el-col :span="3">
        <div class="grid-content bg">
          <el-select v-model="axConfig.request_method">
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
            v-model="axConfig.request_url"
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

    <el-row class="bg" v-if="axConfig.hasBody">
      <el-col :span="24">
        <el-input
          type="textarea"
          placeholder="请输入请求内容"
          :autosize="{ minRows: 8, maxRows: 8 }"
          v-model="axConfig.body"
          disabled
        ></el-input>
      </el-col>
    </el-row>

    <el-row>
      <div class="grid-content"></div>
    </el-row>
    <el-row>
      <el-col :span="18">
        <textarea cols="110" rows="30" disabled v-model="resp"></textarea>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { showXml } from "../utils/showXML";
export default {
  name: "service",
  data() {
    return {
      methods: [
        { value: "GET", label: "GET" },
        { value: "POST", label: "POST" },
        { value: "DELETE", label: "DELETE" },
        { value: "PUT", label: "PUT" },
      ],
      resp: "",
      axConfig: {
        request_method: this.axiosConfig.method,
        hasBody: this.axiosConfig.hasBody,

        body: this.axiosConfig.body,
        request_url: process.env.VUE_APP_BASE_API + this.axiosConfig.endPoint,
        headers: this.axiosConfig.headers,
      },
    };
  },
  props: {
    axiosConfig: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    

    //Send Btn send request via axios
    send() {
      this.resp = "等待服务器返回，请稍后";
      var config = {
        method: this.axConfig.request_method,
        url: this.axConfig.request_url,
        headers: this.axConfig.headers,
      };
      console.log(this.axConfig.request_method);
      if (this.axConfig.hasBody) {
        config.data = this.axConfig.body;
      }
      console.log(config.data);
      var that = this;
      this.axios(config)
        .then(function (response) {
          that.resp = showXml(response.data);
        })
        .catch(function (error) {
          that.resp = "服务器异常，请联系管理员解决, " + error;
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
