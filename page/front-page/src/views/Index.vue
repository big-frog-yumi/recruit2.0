<template>
  <div class="index">
    <header class="top_nav">
      <el-menu class="el-menu-demo home_menu" mode="horizontal" background-color="#324057" text-color="#fff" active-text-color="#409eff">
          <el-menu-item>
            <router-link to="/index/"><svg class="icon" font-size="20px" aria-hidden="true">
              <use xlink:href="#icon-zhaopinhui"></use>
            </svg>
            网管会招新系统</router-link>
          </el-menu-item>
          <el-menu-item index="1" class="home_menu_item"><router-link to="/index/">主页</router-link></el-menu-item>
          <el-menu-item index="2" class="home_menu_item"><router-link to="/index/apply">报名</router-link></el-menu-item>
          <el-menu-item index="3" class="home_menu_item"><router-link to="/index/about">关于我们</router-link></el-menu-item>
      </el-menu>
      <div class="top_user">
        <span><router-link to='/login' color="#fff">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-geren"></use>
          </svg>管理员登录</router-link></span>
      </div>
    </header>
    <div class="main_container">
      <router-view></router-view>
    </div>
    <router-view name="detail"></router-view>
  </div>
</template>

<script>
export default{
  name:'index'
}
</script>

<style scoped>
.index{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.main_container{
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
}
.top_nav{
  width: 100%;
  height: 60px;
  min-width: 1226px;
  padding: 5px;
}
.home_menu{
  float: left;
  position: relative;
  width: 90%;
  height: 100%;
  margin: 0 auto;
}
.home_menu a{
  text-decoration: none;
}
.top_user{
  width: 10%;
  line-height: 60px;
  height: 100%;
  color: #fff;
  background-color: #324057;
  float: left;
  text-align: center;
  border-bottom: solid 1px #e6e6e6;
}
.top_user a{
  color: #fff;
  text-decoration: none;
}
</style>