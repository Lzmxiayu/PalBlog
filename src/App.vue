<template>
  <div id="app">
    
    <router-view></router-view>
     <!-- <audio 
            controls="controls"
            autoplay
            class="music-player">
            <source src="./assets/music/LovingStrangers.mp3">
      </audio> -->
    <!-- <nav-content/> -->
  </div>
</template>

<script>
import addBlog from './components/addBlog'
import ShowBlogs from './components/ShowBlogs'
import BlogHeader from './components/BlogHeader'
import NavContent from './components/NavContent.vue'


export default {
  name: 'App',
  components: {
    addBlog,ShowBlogs,BlogHeader,
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
  /* background: url('./assets/background.jpg'); */
  /* background-color: #FFF2E2; */
   /* height:100%; */
    background: url('./assets/bg3.png');
    /* height:100%; */
    /* size:100% 100%; */
    /* min-height:720px; */
    /* max-height:300px;  */
/* width:100%; */ 
}

/* @media (min-height: 2000px) {
  #app {
    height: 500%;
  }
} */
</style>
