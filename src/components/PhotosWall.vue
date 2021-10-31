<template>
  <div id="photos-wall">
    <div class="photos">
      
       <img src="../assets/photos/3.jpg" class="img-responsive" alt="Responsive image">
       <!-- <br> -->
      <img src="../assets/photos/2.jpg" class="img-responsive" alt="Responsive image">    
       <img src="../assets/photos/1.jpg" class="img-responsive" alt="Responsive image"> 
       <img src="../assets/photos/4.jpg" class="img-responsive" alt="Responsive image"> 
       
    </div>
  </div>
</template>

<script>
export default {
    name:"photos-wall",
}
</script>

<style scoped>
.photos{
  /* margin:10%; */
  margin-top:25px;  
  width:100%;
  padding:5%;
  /* padding:10%; */
  background: white;
}
.photos .img-responsive{
   width:45%;
   height:30%;  
   /* width:420px;
   height:315px; */
  margin:2.25%;
  /* margin-top:0; */
  /* height:50%; */
}
</style>