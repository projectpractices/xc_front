<template>
  <div>
    <el-row>
      <el-button type="primary" v-if="this.logined === true">
        <router-link to="/login">登录</router-link>
      </el-button>
      <el-avatar v-if="this.logined2 === true">{{ user.username }}</el-avatar>
    </el-row>
  </div>
</template>

<script>
    import * as loginApi from '../../login/api/login'

    export default {
        name: "home",
        data() {
            return {
                logined: true,
                logined2: true,
                user: {
                    username: ""
                }
            }
        },
        methods: {
            getUserToken() {
                loginApi.gettoken().then(res => {
                    console.log(res)
                    if (res.success) {
                        sessionStorage.setItem('objStr', res.jwt)
                        let jwt = require('jsonwebtoken');
                        let str = jwt.decode(res.jwt);
                        console.log(str)
                        this.logined = false;
                        this.logined2 = true;
                        this.user.username = str.name;
                        console.log(str.name)
                    }

                })
            }
        },
        created() {
            this.getUserToken();
        }
    }
</script>
