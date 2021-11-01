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
  display: grid; 
  min-height:100%;
  /* height:100%; */
  /* height:100%; */
  /* overflow-x: hidden; */
  /* overflow-y:scroll; */
    /* position:fixed;
  top: 0;
  left: 0;
  right:0; */
  /* bottom:0; */
}

/* @media (min-height: 720px) {
  #app {
    height: 100%;
    /* width:100%; */
  /* } */
 /* }   */
</style>
