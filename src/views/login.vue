<template>
	<div>
		<el-form ref="form" :model="form" label-width="80px" class="login-box">
			<el-form-item label="用户名">
				<el-input v-model="form.name" placeholder="请输入用户名"></el-input>
			</el-form-item>
			<el-form-item label="密码">
				<el-input v-model="form.password" placeholder="请输入密码"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onSubmit">登录</el-button>
				<el-button>取消</el-button>
			</el-form-item>
		</el-form>

	</div>
</template>

<script>
	export default {
		name: "login",
		data() {
			return {
				form: {
					name: '',
					password: ''
				}
			}
		},
		methods: {
			onSubmit() {
				console.log("登录" + this.$data.form.name)
			}
		}
	}
</script>

<style>
	.login-box{
		width: 400px;
		margin:  auto;
	}
</style>
