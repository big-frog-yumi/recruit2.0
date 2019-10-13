<template>
  <div class="home_container">
    <div class="home_left">
      <div class="home_text">
        <h1 class="home_title">网管会招新</h1>
        <p class="home_pra">诚邀你加入我们</p>
      </div>
      <div class="home_btn">
        <el-button type="primary" round><router-link to="/index/apply">加入我们</router-link></el-button>
        <el-button type="primary" round><router-link to="/index/about">了解更多</router-link></el-button>
      </div>
    </div>
    <div class="home_pic">
      <img width="700px" src="../assets/home.png">
    </div>
  </div>
</template>

<script>
export default {
  name:'home'
}
</script>

<style scoped>
.home_container{
  width: 100%;
  height: 100%;
  background-color: #fff;
  font-style: normal;
  color: #222d39;
}
.home_left{
  float: left;
}
.home_text{
  position: relative;
  box-sizing: border-box;
  float: left;
  height: 100%;
  padding-top: 120px;
  padding-left: 150px;
}
.home_btn{
  position: absolute;
  text-align: center;
  left: 0;
  bottom: 0;
  padding-left: 200px;
  padding-bottom: 180px;
}
.home_btn a{
  text-decoration: none;
  color: #fff;
}
.home_title{
  font-size: 80px;
  font-weight: bold;
  top: 200px;
}
.home_pra{
  font-size: 60px;
  font-weight: bold;
}
.home_pic{
  float: right;
  padding-right: 30px;
  padding-top: 50px;
}
</style>