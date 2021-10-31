<template>
 
  <div id="blog-header">
    <div class="blog-masthead">
        <div class="container">
          <nav class="blog-nav">
            <router-link to="/nc/blogs" exact>
              <a class="blog-nav-item" href="#">博客</a>
            </router-link>

            <router-link to="/nc/add" exact>
              <a class="blog-nav-item" href="#">写博客</a>
            </router-link>
            
            <router-link to="/nc/pow" exact>
              <a class="blog-nav-item" href="#">照片墙</a>              
            </router-link>
            
            <router-link to="/nc/bbs" exact>
              <a class="blog-nav-item" href="#">留言板</a>              
            </router-link>

            

            <router-link to="/" exact>
              <a class="blog-nav-item" href="#">封面</a>              
            </router-link>
            <!-- <button type="button" class="btn btn-default" aria-label="Left Align">
              <span class="glyphicon glyphicon-align-left" aria-hidden="true">github</span>
            </button> -->
            <!-- <p>右边可以放些账号链接啥的</p> -->
            <!-- <a href="https://www.github.com/" class="thumbnail">
              <img src="../assets/github.jpg" alt="...">
            </a> -->
          </nav>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name:'blog-header',
}
</script>

<style scoped>
#blog-header{
  padding:0;
  margin-top:25px;
  margin-bottom: 25px;
}
.blog-masthead {
  /* background-color: #428bca; */
  -webkit-box-shadow: inset 0 -2px 5px rgba(0, 0, 0, .1);
  box-shadow: inset 0 -2px 5px rgba(0, 0, 0, .1);
  padding:10px;
}

/* Nav links */
.blog-nav-item {
  position: relative;
  display: inline-block;
  padding: 10px;
  font-size:22px;
  /* font-weight: 400; */
  /* color: #cdddeb; */
  color:black;
  text-decoration:none;
}
.blog-nav-item:hover,
.blog-nav-item:focus {
  color: #fff;
  text-decoration: none;
  /* font-weight: 800px;  */
  }
.thumbnail img{
  height:25px;
  width:40px;
}


/* Active state gets a caret at the bottom */
.blog-nav .active {
  color: #fff;
}
/* .blog-nav .active:after {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 0;
  margin-left: -5px;
  vertical-align: middle;
  content: " ";
  border-right: 5px solid transparent;
  border-bottom: 5px solid;
  border-left: 5px solid transparent;
} */

</style>