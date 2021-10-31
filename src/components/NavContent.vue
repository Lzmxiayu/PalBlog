<template>
    <div id="navcon">
      <div class="main-con">
        <blog-header/>
        <!-- <music-player/> -->
        <router-view></router-view>
        <audio 
            controls="controls"
            autoplay
            class="music-player">
            <source src="../assets/music/LovingStrangers.mp3">
      </audio>
      </div>
    </div>
</template>

<script>
import BlogHeader from './BlogHeader' 
import ShowBlogs from './ShowBlogs' 


export default {
    name:'nav_content',
    components:{
      BlogHeader,ShowBlogs,
    
    },

}
</script>

<style scoped>
#navcon{
  font-family: Georgia, "Times New Roman", Times, serif;
  /* height:75%; */
  /* padding:5% 3% 5% 3%; */
  /* margin:10px 3% 5% 3%; */

  /* margin-top:12%; */
   /* background: url('../assets/background.jpg'); */
}


.main-con{
  /* background-color: white; */
  opacity:0.65;
  width:80%;
  /* height:80%; */
  /* margin-top:12%; */
  padding-bottom:3%;
  z-index: -10;
  margin-left:10%;

}

.music-player{
  margin-top:10px;
}
</style>