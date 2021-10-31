<template>
  <div id="single-blog">
    <div class='arti'>
    <div class='article-title'>
      <h1 >{{blog.title}}</h1>
    </div>
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
    <div class='article_content'>
      <article>{{blog.content}}</article>
    </div>  
    </div>
    <div class="editfooter">
    <button @click="deleteSingleBlog" class="deleteButton">删除</button>
    <br>
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

<style>
.article-title{
  margin:20px;
  text-align: center;
}
.article_content{
  font-size: 20px;
  /* text-align: center; */
}
#single-blog{
    max-width:80%;
    height:800px;
    margin:0 auto;
    padding:30px;
    /* padding:12px 20px 30px 20px; */
    /* background: rgb(230, 203, 203); */
    /* border:1px dotted #aaa; */
}
.video-js{
  width:80%;
  height:50px;
  margin-left:10%;
  margin-bottom: 20px;
}
.deleteButton{
   margin:20px;
  margin-top:30px;
 
  /* margin-left: 85%; */
}
.editButton{
  margin:20px;
  /* margin-left: 85%; */
}
.editfooter{
  text-align: right;
}
@media(min-height:50%){
  .arti{
    height:50%;
  }
}
</style>