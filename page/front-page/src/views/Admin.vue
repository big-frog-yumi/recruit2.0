<template>
  <div class="main_container">
    <topHeader title="报名表管理">
      <i class="el-icon-back" @click="handleToBack"></i>
    </topHeader>
    <el-main>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    </el-main>
    <router-view name="detail" />
  </div>
</template>

<script>
import topHeader from '@/components/Header';

export default {
  name: 'admin',
  components: {
    topHeader
  },
  methods: {
    handleToBack () {
      this.$router.back();
    }
  }
}
</script>

<style scoped>
.el-icon-back{
  cursor: pointer;
}
</style>