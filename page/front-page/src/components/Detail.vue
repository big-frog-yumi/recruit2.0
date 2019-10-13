<template>
  <div id="detail_container">
    <h2 class="det_name">{{student.name}}</h2>
    <div class="det_list">
      <ul>
        <li>
          <i class="el-icon-phone-outline">电话</i>
          {{student.phone}}
        </li>
        <li>
          <i class="el-icon-message">邮箱</i>
          {{student.email}}
        </li>
        <li>
          <i class="el-icon-lollipop">学号</i>
          {{student.stunum}}
        </li>
        <li>
          <i class="el-icon-monitor">报名方向</i>
          {{student.direct}}
        </li>
        <li>
          <i class="el-icon-thum">个人简历</i>
          {{student.intro}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detail',
  data () {
    return {
      student: {},
      id:''
    }
  },
  methods: {
    handleToBack () {
      this.$router.back();
    }
  },
  mounted(){
    console.log(this.$router.params._id);
    this.axios.get('/users/getOne/'+this.$route.params._id).then((res) => {
      this.student = res.data;
    })
  }
}
</script>

<style scoped>
#detailContrainer {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  width: 100%;
  min-height: 100%;
}
.det_name{
  display: block;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 30px;
}
.det_list{
  width: 80%;
  height: 100%;;
  border: 1px solid #c3c3c3;
  border-radius: 4px;
  margin: 0 auto;
  padding-left: 30px;
}
.det_list li{
  display: block;
  margin: 30px auto;
  text-align: center;
  list-style: none;
  border-bottom:1px solid #ccc;
  padding-bottom: 5px;
}
</style>