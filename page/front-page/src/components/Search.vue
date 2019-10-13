<template>
  <div>
    <div class="search_body">
      <div class="search_input">
        <div class="search_input_wrapper">
          <svg class="icon" font-size="18px" aria-hidden="true">
            <use xlink:href="#icon-sousuo" />
          </svg>
          <input type="text" placeholder="输入您想要查询的报名表学号" v-model="message" />
        </div>
      </div>
      <div class="search_result">
        <h3>查询结果</h3>
        <div class="info" v-if=searchList>
          <ul>
            <li v-for="item in searchList" :key="item.id">
              <p><span>{{item.name}}</span><span>{{item.stunum}}</span><span>{{item.email}}</span></p>
              <div class="result_btn">
                  <el-button type="primary" @click="handleToDetail(item.id)">详情</el-button>
              </div>
            </li>
          </ul>
        </div>
        <div v-else class="info">
          <p>很抱歉，该学生未报名。</p>
        </div>
      </div>
    </div>
    <div class="admin_form">
    <h2 class="title">已提交的报名表</h2>
      <el-table :data="dataList" style="width: 100%" class="app_table">
        <el-table-column prop="name" label="姓名" width="240"></el-table-column>
        <el-table-column prop="phone" label="电话" width="240"></el-table-column>
        <el-table-column prop="email" label="邮箱" width="240"></el-table-column>
        <el-table-column prop="stunum" label="学号" width="300"></el-table-column>
        <el-table-column>
        <template slot-scope="scope">
          <el-button type="primary" @click="handleToDetail(scope.row._id)">详情</el-button>
        </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default{
  name:'search',
  data() {
    return {
      dataList:[],
      searchList:[],
      message:''
    }
  },
  methods: {
    handleToDetail(id){
      this.$router.push({
        name:'detail',
        params:{
          id:id
        }
      })
    }
  },
  mounted() {
    this.axios.get('/users/getAll').then((res)=>{
      this.dataList=res.data;
    })
  },
  watch: {
    message(newVal){
      this.axios.get('/users/getAll/?stunum='+newVal).then((res)=>{
        this.searchList = res.data;
      })
    }
  }
}
</script>

<style scoped>
.search_body{
  flex: 1;
  overflow: auto;
}
.search_body .search_input {
  padding: 8px 10px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #e5e5e5;
}
.search_body .search_input_wrapper {
  padding: 0 10px;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  background-color: #fff;
  display: flex;
  line-height: 60px;
}
.search_body .search_input_wrapper input {
  border: none;
  font-size: 13px;
  color: #333;
  padding: 4px 0;
  outline: none;
  margin-left: 5px;
  width: 100%;
}
.search_result{
  padding-top: 30px;
}
.search_result li {
  border-bottom: 1px #c9c9c9 dashed;
  padding: 10px 15px;
  box-sizing: border-box;
  display: flex;
}
.search_result .info{
  padding-left: 30px;
  float:left;
  margin-left: 15px;
  flex:1;
}
.search_result span{
  float: left;
  margin-left: 120px;
  flex: 1;
}
.search_result p {
  height: 22px;
  display: flex;
  line-height: 22px;
  font-size: 15px;
  color: #606266; 
}
.result_btn{
  padding-left: 180px;
}
.app_table{
  padding-left: 60px;
}
.admin_form{
  padding-top: 50px;
}
</style>