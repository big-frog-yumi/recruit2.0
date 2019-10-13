<template>
  <header id="tophead">
    <slot></slot>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  name: 'header',
  props: {
    title: {
      type: String,
      default: '管理员界面'
    }
  }
}
</script>

<style scoped>
#tophead {
  width: 100%;
  height: 50px;
  color: #fff;
  background: #324057;
  border-bottom: 1px solid #324057;
  position: relative;
}
#tophead i{
  position: absolute;
  left: 5px;
  top: 50%;
  margin-top: -13px;
  font-size: 26px;
}
#tophead h1 {
  font-size: 18px;
  text-align: center;
  line-height: 50px;
  font-weight: normal;
}
</style>