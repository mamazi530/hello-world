<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="METHDO">
        <el-input v-model="form.method" disabled="true"></el-input>
      </el-form-item>
      
      <el-form-item>
        <el-button type="primary" @click="onSubmit">SEND</el-button>
       
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "service",
  data() {
      return {
        form: {
          method: ''
         
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
};
</script>

<style>
</style>