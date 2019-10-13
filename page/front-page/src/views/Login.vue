<template>
  <div>
    <topHeader title="管理员登录">
      <i class="el-icon-back" @click="handleToBack"></i>
    </topHeader>
    <div class="login_pic">
        <img width="150px" src="../assets/yonghu.png">
    </div>
    <el-row type="flex" justify="center">
      <el-form :model="user" label-width="60px" class="login_form">
          <el-form-item label="用户名">
              <el-input v-model="user.name"></el-input>
          </el-form-item>
          <el-form-item label="密码">
              <el-input v-model="user.pwd" type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="login_btn" icon="el-icon-upload" @click="login">登录</el-button>
          </el-form-item>
      </el-form>
    </el-row>
</div>
</template>

<script>
import topHeader from '@/components/Header.vue'

export default{
  name:'login',
  components:{
    topHeader
  },
  data () {
    return {
      user: {
        name:'',
        pwd:''
      }
    }
  },
  methods: {
    handleToBack(){
      this.$router.back();
    },
    login(){
      if(this.user.name=='admin'&& this.user.pwd ==='123456'){
        this.$router.push('/admin')
      }
    }
  }
}
</script>

<style scoped>
Header{
  width: 100%;
}
.el-icon-back{
  cursor: pointer;
}
.login_form{
  height: 400px;
  width: 420px;
  vertical-align: middle;
}
.login_pic{
  text-align: center;
  padding-top: 100px;
}
.login_btn{
  display: block;
  margin: 0 auto;
}
</style>