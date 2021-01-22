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
        headers: {
            Authorization: process.env.VUE_APP_API_AUTH
            
          },

      },
    };
  },
};
</script>

<style scoped>
</style>