<template>
  <div>
    <service :axiosConfig="axiosConfig"></service>
  </div>
</template>

<script>
import service from "../../components/service.vue";
export default {
  components: { service },
  name: "getLastStatus",
  data() {
    return {
      axiosConfig: {
        method: "GET",
        endPoint: "/GlobalCmnParts/getStatusTbl",
        hasBody: false,
        contentType: "application/json",
        env: this.env
      

      },
    };
  },


  props: ['env'],
  watch: {
    env: {
      handler(newVal) {
        this.axiosConfig.env = newVal;
        //this.init
      },
      deep: true,
      //immediate:true
    },
  },
};
</script>

<style scoped>
</style>