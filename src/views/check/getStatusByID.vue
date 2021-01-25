<template>
  <div>
     <el-input v-model="statusID" placeholder="请输入STATUS_IFO_ID" @input="input">
        <template slot="prepend">Status Info ID</template>
     </el-input>
     <!-- <el-input type="textarea" v-model="statusID" disabled></el-input> -->
    <service :axiosConfig="axiosConfig"  style="margin-top: 15px;"></service>
  </div>
</template>

<script>
import service from "../../components/service.vue";
export default {
  components: { service },
  name: "getStatusByID",
  data() {
    return {
      axiosConfig: {
        method: "POST",
        endPoint: "/GlobalCmnFunction/Execjob/Proxy/SubmitEssjobPS",
        headers: {
            Authorization: process.env.VUE_APP_API_AUTH,
            'Content-Type': 'application/xml'
          },
        hasBody: true,
        body: this.bodyPre+this.statusID+this.bodySfu
        
      },
      statusID: "",
      bodyPre: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:glob="http://xmlns.denso.com/Gfastpm/GlobalCmnFunction/">\n   <soapenv:Header/>\n   <soapenv:Body>\n      <glob:getStatus_req>\n         <glob:statusInfoId>',
      bodySfu: '</glob:statusInfoId>\n      </glob:getStatus_req>\n   </soapenv:Body>\n</soapenv:Envelope>'
    };
  },
  mounted(){
        this.axiosConfig.body = this.bodyPre + this.statusID + this.bodySfu;
  },
  methods: {
    input(){
      this.axiosConfig.body = this.bodyPre + this.statusID + this.bodySfu;
    }
  }
};
</script>

<style scoped>
</style>