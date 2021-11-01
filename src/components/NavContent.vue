<template>
    <div id="navcon">
      <div class="main-con">
        <blog-header/>
        <!-- <music-player/> -->
        <router-view></router-view>
        <!-- <audio 
            controls="controls"
            autoplay
            class="music-player">
            <source src="../assets/music/LovingStrangers.mp3">
      </audio> -->
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
  /* height:100%; */
  height:auto;
  /* min-height:100%; */
   
}


.main-con{
  /* background-color: white; */
  opacity:0.65;
  width:80%;
  /* height:80%; */
  /* margin-top:12%; */
  /* height:100%; */
  padding-bottom:3%;
  z-index: -10;
  margin-left:10%;

}

.music-player{
  margin-top:10px;
}
</style>