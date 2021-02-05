<template>
  <div>
    <service :axiosConfig="axiosConfig" style="margin-top: 15px"></service>
  </div>
</template>

<script>
import service from "../../components/service.vue";
export default {
  components: { service },
  name: "customer_mst",
  data() {
    return {
      axiosConfig: {
        method: "POST",
        endPoint: "/GlobalCmnFunction/Execjob/Proxy/SubmitEssjobPS",
        env: this.env,
        hasBody: true,
        body: "",
        contentType:"application/xml"
      },
      defaultBody: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:glob="http://xmlns.denso.com/Gfastpm/GlobalCmnFunction/">\n   <soapenv:Header/>\n   <soapenv:Body>\n    <glob:submitExportBulkData_req xmlns:glob="http://xmlns.denso.com/Gfastpm/GlobalCmnFunction/">\n    <!--Optional:-->\n    <glob:essjobName>/oracle/apps/ess/custom/bip/interface,XXBI_CUSTOMER_MASTER</glob:essjobName>\n    <!--Optional:-->\n    <glob:essjobParameter></glob:essjobParameter>\n    <!--Optional:-->\n    <glob:essjobOptions>FileEncryption=PGPUNSIGNED,CUSTOMER_ALIAS={{MftKey}}</glob:essjobOptions>\n    <!--Optional:-->\n    <glob:essjobCallbackURL>https://{{CallBackIP}}:443/GlobalCmnFunction/Execjob/Proxy/SubmitEssjobCallbackPS</glob:essjobCallbackURL>\n    <!--Optional:-->\n    <glob:essjobNotificationCode></glob:essjobNotificationCode>\n    <!--Optional:-->\n    <glob:dataspiderScriptId>TEST</glob:dataspiderScriptId>\n    <!--Optional:-->\n    <glob:mftDirectorypath>TEST</glob:mftDirectorypath>\n    <!--Optional:-->\n    <glob:customFunctionname>GlobalIntegration/CUSTOMER_MST_fromErp/CUSTOMER_MST_fromErp_PS</glob:customFunctionname>\n    <!--Optional:-->\n    <glob:customParameter>40049</glob:customParameter>\n    <!--Optional:-->\n    <!--Optional:-->\n    <glob:commonParameter>{"SANAME":"40049_exec_job_en"}</glob:commonParameter>\n    <glob:jobType>Outbound</glob:jobType>\n    <glob:gwsvPid>-1</glob:gwsvPid>\n</glob:submitExportBulkData_req>\n   </soapenv:Body>\n</soapenv:Envelope>',
      
    };
  },
  
  props: ['env'],
  mounted(){
        this.axiosConfig.body = this.defaultBody;
        
  },
  watch: {
    env: {
      handler(newVal) {
        this.axiosConfig.env = newVal;
        if(newVal === 'DEV'){
            
            this.axiosConfig.body = this.defaultBody.replaceAll("{{MftKey}}","CN-Interface-Key-test").replaceAll("{{CallBackIP}}","140.238.202.26")
           
        }else if(newVal === 'UAT'){
            
            this.axiosConfig.body = this.defaultBody.replaceAll("{{MftKey}}","CN-Interface-Key-test").replaceAll("{{CallBackIP}}","140.238.201.89")
            
        }

      },
      deep: true,
      //immediate:true
    },
  },
};
</script>

<style scoped>
</style>