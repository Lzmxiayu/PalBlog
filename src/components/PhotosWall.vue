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
  margin-left:2%;
  margin-top:25px;  
  width:96%;
  padding:5%;
  border-radius: 15px;
  /* background: white; */
    backdrop-filter: blur(8px);
   background-color:rgba(255,255,255,0.25); 
}
.photos .img-responsive{
   width:45.5%;
   height:30%;  
   margin:2%;
}
</style>