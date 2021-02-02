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
      

      },
    };
  },
};
</script>

<style scoped>
</style>