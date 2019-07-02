<template>
  <div class="SiginIn">
    <el-header style="backgroundColor:blue;">
      <el-row>
        <el-col span="1" offset="0">로고</el-col>
        <el-col span="3" offset="15">
          <el-input placeholder="Id" v-model="id" clearable></el-input>
        </el-col>
        <el-col span="3" offset>
          <el-input placeholder="Password" v-model="password" clearable></el-input>
        </el-col>
        <el-col span="1">
          <el-button>Login</el-button>
        </el-col>
      </el-row>
    </el-header>
    <el-main></el-main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      password: ""
    };
  }
};
</script>

<style lang='scss' scoped>
</style>