<template>
  <div>
    <el-form :model="ruleForm" status-icon ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="username">
        <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
    import * as loginApi from '../api/login'
    import jwt from 'jsonwebtoken'

    export default {
        data() {
            return {
                ruleForm: {
                    username: '',
                    password: ''
                }
            };
        },
        methods: {
            submitForm() {
                //console.log(this.ruleForm.username);
                //console.log(this.ruleForm.password);
                loginApi.login(this.ruleForm).then(res => {
                    console.log(res)
                    if (res.success) {
                        this.$message.success('登录成功');
                        window.location.href = "http://localhost:8080/#/";
                    } else if (res.message) {
                        this.$message.error(res.message);
                    } else {
                        this.$message.error('登录失败');
                    }
                });
            },
            resetForm(formName) {
                alert("重置")
            },
            /*getUserToken() {
                loginApi.gettoken().then(res => {
                    let jwt = require('jsonwebtoken');
                    let str = jwt.decode(res.jwt);
                    console.log(str.name)
                    //console.log(res.jwt);
                    /!*loginApi.parsetoken(res.jwt).then(res => {
                        console.log(res);
                    })*!/
                })
            }*/
        },
        mounted() {
            /*this.getUserToken();*/
        }
    }
</script>

<style scoped>

</style>
