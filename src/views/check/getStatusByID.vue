<template>
  <div>
     <el-input v-model="statusID" placeholder="请输入STATUS_IFO_ID" >
        <template slot="prepend">Status Info ID</template>
     </el-input>
    <service :axiosConfig="axiosConfig" style="margin-top: 15px;"></service>
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
        body:'<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:glob="http://xmlns.denso.com/Gfastpm/GlobalCmnFunction/">\n   <soapenv:Header/>\n   <soapenv:Body>\n      <glob:getStatus_req>\n         <glob:statusInfoId>'+this.statusID+'</glob:statusInfoId>\n      </glob:getStatus_req>\n   </soapenv:Body>\n</soapenv:Envelope>'
        
      },
      statusID: ""
    };
  },
};
</script>

<style scoped>
</style>