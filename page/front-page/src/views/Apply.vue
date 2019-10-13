<template>
  <div class="add_user">
    <h2 class="add_title">加入我们</h2>
    <el-form ref="form" :model="form" :rules="rules" label-width="80px" width="70px" class="add_form">
      <h3>报名表</h3>
      <el-form-item label="姓名" prop="name">
        <el-input v-model="form.name" placeholder="name"></el-input>
      </el-form-item>
      <el-form-item label="学号" prop="stunum">
        <el-input v-model="form.stunum" placeholder="stunum"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="form.email" placeholder="email"></el-input>
      </el-form-item>
      <el-form-item label="电话" prop="phone">
        <el-input v-model="form.phone" placeholder="phone"></el-input>
      </el-form-item>
      <el-form-item label="报名方向" prop="direct">
        <el-input v-model="form.direct" placeholder="direction"></el-input>
      </el-form-item>
      <el-form-item label="个人简介" prop="intro">
        <el-input type="textarea" v-model="form.intro" placeholder="introduction"></el-input>
      </el-form-item>
    <el-form-item class="add_btn">
      <el-button type="primary" @click="onSubmit($event)">报名</el-button>
      <el-button @click="cancel()">取消</el-button>
    </el-form-item>
  </el-form>
  </div>
</template>

<script>
  export default {
    name:'apply',
    data() {
        return {
          form: {
            name: '',
            phone: '',
            email: '',
            stunum:'',
            intro: '',
            direct:''
          },
          rules: {
            name: [
              { required: true, message: '姓名为必填项', trigger: 'blur' }
            ],
            stunum:[
              {pattern:/^\d{13}$/,message:'请输入正确的学号'},
              {required:true,message:'学号为必填项',trigger:'blur'}
            ],
            email:[
              { required: true, message: '邮箱为必填项', trigger: 'blur'},
              { type: 'email', message: '请输入正确的邮箱地址',trigger: ['blur', 'change']}
            ],
            phone:[
              { pattern: /^1[34578]\d{9}$/, message: '请输入正确的中国大陆的手机号', trigger: 'blur'}
            ],
            direct:[
              { required: true, message: '报名方向为必填项', trigger: 'blur' }
            ]
          }
        }
    },
  methods: {
    onSubmit(ev){
      this.axios.post('/users/apply',this.form).then((res)=>{
        var status = res.status;
        if(status == 200){
          this.$message.success('报名成功！');
          this.$router.push({path:'/index'});
          this.axios.post('/users/email',this.form);
        }
      })
      this.form={};
      ev.preventDefault();
    },
    cancel(){
      this.form={};
      this.$router.push({path:'/index'});
    }
  }
}
</script>

<style scoped>
.add_title{
  display: block;
  margin-left: 150px;
}
.add_form{
  width: 70%;
  margin: 0 auto;
  margin-top: 30px;
}
.add_btn{
  margin:auto;
}
</style>