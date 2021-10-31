<template>
    <div id="navcon">
      <div class="main-con">
        <blog-header/>
        <!-- <music-player/> -->
        <router-view></router-view>
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

<style>
#navcon{
  font-family: Georgia, "Times New Roman", Times, serif;
  /* background-color: #FFF2E2; */
  /* background: url('../assets/background.jpg'); */
  /* background-size: 50% 50%;  */
  /* width:75%; */
  height:75%;
  padding:5% 3% 5% 3%;
   /* margin-top:12%; */
   /* background: url('../assets/background.jpg'); */
}


.main-con{
  /* background-color: white; */
  opacity:0.7;
  width:80%;
  height:80%;
  /* margin-top:12%; */
  padding-bottom:3%;
  z-index: -10;
  margin-left:10%;
  /* margin-bottom: 10%; */

}

</style>