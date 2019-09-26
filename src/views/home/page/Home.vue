<template>
  <div>
    <el-row>
      <el-button type="primary">
        <router-link to="/login">登录</router-link>
      </el-button>
    </el-row>
  </div>
</template>

<script>
    export default {
        name: "home",
        methods: {
            login() {
                alert("测试")
            }
        }
    }
</script>
