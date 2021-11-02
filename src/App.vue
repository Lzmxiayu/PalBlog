<template>
  <div id="app">
    
    <router-view></router-view>
     
    <!-- <nav-content/> -->
  </div>
</template>

<script>
import AddBlog from './components/AddBlog'
import ShowBlogs from './components/ShowBlogs'
import BlogHeader from './components/BlogHeader'
import NavContent from './components/NavContent.vue'


export default {
  name: 'App',
  components: {
    AddBlog,ShowBlogs,BlogHeader,
    NavContent,

  }
}
</script>

<style scoped>
 /* import './css/global.scss' */
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

#app {
  
  color: #555;
  background:url('./assets/bg3.png');
  height:auto;
  width:100vw;
  display: grid; 
  overflow: scroll;
  margin-right:17px;
 /* overflow:hidden; */
  
}
/* 隐藏滚动条 */
#app::-webkit-scrollbar{
	display:none
}

/* @media (min-height: 720px) {
  #app {
    height: 100%;
    /* width:100%; */
  /* } */
 /* }   */
</style>
