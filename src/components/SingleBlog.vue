<template>
  <div id="single-blog">
    <div class='arti'>
      <div class='article-title'>
        <h1 >{{blog.title}}</h1>
      </div>
      
      <div class='article_content'>
        <video
        id="myVideo"
        controls
        class="video-js"
        >
        <source
            src="../assets/videos/坦克大战.mp4"
            type="video/mp4"
        >
      </video>
      <!-- <br> -->
        <article>{{blog.content}}</article>
      </div>  
      </div>
      <div class="editfooter">
        <button @click="deleteSingleBlog" class="deleteButton">删除</button>
        
        <router-link :to="`/nc/edit/${id}`"  class="editButton"><button >编辑</button></router-link>
        </div>
      <div class="container">
      <div class="row"> 
      </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios'
export default {
    name:"single-blog",
    data(){
        return{
            id:this.$route.params.id,
            blog:{}
        }
    },
    methods:{
      deleteSingleBlog(){
        console.log(this.id)
          axios.delete(
                 'https://vuedemo1-24e76-default-rtdb.asia-southeast1.firebasedatabase.app/posts/'
        + this.id +".json"
        ).then(response=>{
          this.$router.push({path:'/nc/blogs'})
        }

        )

      }
    },
    created(){
        console.log(this.id)
        axios.get(
            'https://vuedemo1-24e76-default-rtdb.asia-southeast1.firebasedatabase.app/posts/'
        + this.id +".json"
        ).then(function(data){
            // console.log(data);
            return data.data
        })
        .then((data)=>{
            this.blog=data
        })
    }
}
</script>

<style scoped>


#single-blog{
    width:96%;
    margin-left: 2%;
    padding:30px;
    height:auto;
    /* background: white; */
    backdrop-filter: blur(8px);
    background-color:rgba(255,255,255,0.25); 
    border-radius:15px;
    /* opacity:0.9; */
   
}
.arti{
  height:80%;
}
.article-title{
  height:20%;
  margin-bottom:2%;
}
h1{
  margin: auto;
  width: 50%;
  text-align: center;
}
.article_content{
  font-size: 20px;
  height:60%;
  /* text-align: center; */
}
article{
 width:90%; 
 margin-left: 5%;
}
.video-js{
  width:25%;
  margin-left:37.5%;
  margin-bottom: 20px;
}
.deleteButton{
   margin-right:30px;
   margin-top:30px;
 
  /* margin-left: 85%; */
}
.editButton{
  /* height:20%;
  margin:20px; */
  margin-right: 5%;
}
.editfooter{
  text-align: right;
}
/* @media(min-height:50%){
  .arti{
    height:50%;
  }
} */
</style>