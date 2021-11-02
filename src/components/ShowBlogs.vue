<template>
    <div id="show-blogs">
    <div class="container">
      <div class="row">

        <div class="col-sm-8 blog-main">
          <div v-for="blog in filteredBlogs" class="single-blog" :key="blog.id">
              <router-link :to="`/nc/blog/${blog.id}`">
                <h2 class="blog-post-title">{{blog.title}}</h2>
              </router-link>
              <p class="blog-post-meta">January 1, 2014 by <a href="#">Mark</a></p>
              <!-- <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src="../assets/videos/坦克大战.mp4" >
                 
                </iframe>
              </div> -->
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
            <article>
                {{blog.content }}
            </article>
            <br>
          </div> 
  
          <nav>
            <ul class="pager">
              <li><a href="#">Previous</a></li>
              <li><a href="#">Next</a></li>
            </ul>
          </nav>
      
          <!-- <nav aria-label="Page navigation">
            <ul class="pagination">
              <li>
                <a href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li><a href="#">5</a></li>
              <li>
                <a href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav> -->

        </div><!-- /.blog-main -->

        <div class="col-sm-3 col-sm-offset-1 blog-sidebar">
          <div class="sidebar-module sidebar-module-inset">
            <h4>博客简介</h4>
            <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
          </div>
          <div class="sidebar-module">
            <h4>Archives</h4>
            <ol class="list-unstyled">
              <li><a href="#">March 2014</a></li>
              <li><a href="#">February 2014</a></li>
              <li><a href="#">January 2014</a></li>
              <li><a href="#">December 2013</a></li>
              <li><a href="#">November 2013</a></li>
              <li><a href="#">October 2013</a></li>
              <li><a href="#">September 2013</a></li>
              <li><a href="#">August 2013</a></li>
              <li><a href="#">July 2013</a></li>
              <li><a href="#">June 2013</a></li>
              <li><a href="#">May 2013</a></li>
              <li><a href="#">April 2013</a></li>
            </ol>
          </div>
          <div class="sidebar-module">
            <h4>Elsewhere</h4>
            <ol class="list-unstyled">
              <li><a href="#">GitHub</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Facebook</a></li>
            </ol>
          </div>
         
         
        </div><!--/*.blog-sidebar* -->

      </div><!-- /.row -->

    </div><!-- /.container -->

    </div>
</template>

<script>
import axios from 'axios'
// import BlogHeader from './BlogHeader.vue' 
export default{
    name:'show-blogs',
    data(){
        return{
            blogs:[],
            // search:"",
            songUrl:'../assets/music/LovingStrangers.mp3',
            songs:['../assets/music/LovingStrangers.mp3']
        }
    },
    methods:{
      playMusic(){
        // this.$refs.audio.src=requiere("Loving Strangers.mp3")
      }
    },
    created(){
        // this.$http.get(
        axios.get( 
         'https://vuedemo1-24e76-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json'
        ).then(function(data){
            // console.log(data.data);
            return data.data
            // this.blogs = data.data.slice(0,10)
            // console.log(this.blogs)
        }).then((data)=>{
          var blogsArray=[]
          for(let key in data){
            data[key].id=key
            blogsArray.push(data[key])
          }
           this.blogs=blogsArray

        })
    },
    computed:{
        filteredBlogs:function(){
            return this.blogs.filter((blog)=>{
                return blog.title.match(this.search);
            })
        }
    },
    filters:{
        "snippet":function(value){
            return value.slice(0,100)+" ...";
        },
        "upper-case":function(value){
            return value.toUpperCase()
        }
    },
    directives:{

    }
}
</script>

<style scoped>
h1, .h1,
h2, .h2,
h3, .h3,
h4, .h4,
h5, .h5,
h6, .h6 {
  margin-top: 0;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 400;
  color: #333;
}

 #show-blogs{
   padding:0%;
   width:96;
   /* background-color: white; */
 }

.blog-header {
  padding-top: 20px;
  padding-bottom: 20px;

}
.blog-title {
  margin-top: 30px;
  margin-bottom: 0;
  font-size: 60px;
  font-weight: 400;
}
.blog-description {
  font-size: 20px;
  color: #999;
}


/*
 * Main column and sidebar layout
 */

.blog-main {
  font-size: 18px;
  line-height: 1.5;
  margin-right:4%;
  margin-left:2%;  
}
.single-blog{
  /* background: white; */
  margin-bottom:20px;
   border-radius:15px;
   padding:22px;
   /* backdrop-filter: blur(8px); */
   background-color:rgba(255,255,255,0.25); 
}

#myVideo{
  width:32%;
  height:18%;
  margin-left:34%;
}

/* Sidebar modules for boxing content */
.blog-sidebar{
  /* background: white; */
    /* backdrop-filter: blur(8px); */
   background-color:rgba(255,255,255,0.25); 
  border-radius: 15px;
  height:100%;
}
.sidebar-module {
  padding: 15px;
}
.sidebar-module-inset {
  margin:15px;
  background-color: #f5f5f5;
  border-radius: 4px;
}
.sidebar-module-inset p:last-child,
.sidebar-module-inset ul:last-child,
.sidebar-module-inset ol:last-child {
  margin-bottom: 0;
}


/* Pagination */
.pager {
  margin-bottom: 60px;
  text-align: right;
  text-decoration: none;
}
li{
  list-style:none;
}
.pager > li > a {
  width: 140px;
  padding: 10px 20px;
  text-align: center;
  border-radius: 30px;
  list-style:none;
}


/*
 * Blog posts
 */

.blog-post {
  margin-bottom: 60px;
}
.blog-post-title {
  margin-bottom: 5px;
  font-size: 40px;
  text-decoration: none;
}
.blog-post-meta {
  margin-bottom: 20px;
  color: #999;
}

a{
  text-decoration: none;
  }
  /* .music-player{
    width:100%;
  } */

</style>