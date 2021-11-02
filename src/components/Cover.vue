<template>
    <div id="mcover">
      <div class="bg1">
        <div class="site-wrapper">
              <div class="masthead clearfix">
                  <div class="inner"> 

                 
                  </div>
              </div> 

              <div class="inner-cover" >
                  
                <div class="cover-heading">
                  <h1 >某人的博客</h1>
                  <p class="lead">
                    欢迎来到我的博客，点击Enter进入。
                  </p>
                  <br>
                  <p class="lead">
                      <router-link to="/nc/blogs" exact>
                        <a href="#" class="btn btn-lg btn-default">Enter</a>
                      </router-link>
                  <!-- <a href="#" class="btn btn-lg btn-default">Learn more</a> -->
                  </p>
                </div>
              </div>

              <div class="mastfoot">
                  <div class="inner">
                  <p>Cover template for <a href="https://getbootstrap.com/" class="link-url">Bootstrap</a>, 
                  by <a href="https://twitter.com/mdo" class="link-url">@mdo</a>.</p>
                  </div>
              </div>

            </div>

      </div>
       <div class="bg2">
        <div class="site-wrapper">
              <div class="masthead clearfix">
                  <div class="inner"> 

                 
                  </div>
              </div> 

              <div class="inner-cover" >
                  
                <div class="cover-heading">
                  <h1 >某人的博客</h1>
                  <p class="lead">
                    欢迎来到我的博客，点击Enter进入。
                  </p>
                  <br>
                  <p class="lead">
                      <router-link to="/nc/blogs" exact>
                        <a href="#" class="btn btn-lg btn-default">Enter</a>
                      </router-link>
                  <!-- <a href="#" class="btn btn-lg btn-default">Learn more</a> -->
                  </p>
                </div>
              </div>

              <div class="mastfoot">
                  <div class="inner">
                  <p>Cover template for <a href="https://getbootstrap.com/" class="link-url">Bootstrap</a>, 
                  by <a href="https://twitter.com/mdo" class="link-url">@mdo</a>.</p>
                  </div>
              </div>

            </div>

      </div>
       <div class="bg3">
        <div class="site-wrapper">
              <div class="masthead clearfix">
                  <div class="inner"> 

                 
                  </div>
              </div> 

              <div class="inner-cover" >
                  
                <div class="cover-heading">
                  <h1 >某人的博客</h1>
                  <p class="lead">
                    欢迎来到我的博客，点击Enter进入。
                  </p>
                  <br>
                  <p class="lead">
                      <router-link to="/nc/blogs" exact>
                        <a href="#" class="btn btn-lg btn-default">Enter</a>
                      </router-link>
                  <!-- <a href="#" class="btn btn-lg btn-default">Learn more</a> -->
                  </p>
                </div>
              </div>

              <div class="mastfoot">
                  <div class="inner">
                  <p>Cover template for <a href="https://getbootstrap.com/" class="link-url">Bootstrap</a>, 
                  by <a href="https://twitter.com/mdo" class="link-url">@mdo</a>.</p>
                  </div>
              </div>

            </div>

      </div>
    </div>
</template>

<script>
export default {
    name:'mcover',
}
</script>

<style scoped>
/* stylelint-disable property-no-vendor-prefix */

/*
 * Globals
 */

/* Links */
a,
a:focus,
a:hover {
  color: #fff;
}

/* Custom default button */
.btn-default,
.btn-default:hover,
.btn-default:focus {
  color: #333;
  text-shadow: none; /* Prevent inheritance from `#cover` */
  background-color: #fff;
  
  border: 1px solid #fff;
}


/*
 * Base structure
 */
.bg1{
  height:100vh;
   width:100vw;
   background: url('../assets/cover2.png');
   background-size: 100% 100%;
  /* width:100%; */
  scroll-snap-align:start;
  flex-shrink: 0;
}
.bg2{
  height:100vh;
   width:100vw;
   background: url('../assets/bg2.png');
   background-size: 100% 100%;
  /* width:100%; */
  scroll-snap-align:start;
   flex-shrink: 0;
}

.bg3{
  height:100vh;
   width:100vw;
   background: url('../assets/bgt.png');
   background-size: 100% 100%;
  /* width:100%; */
  scroll-snap-align:start;
   flex-shrink: 0;
}


#mcover{
  /* background: url('../assets/cover2.png'); */
  /* background-size: 100% 100%; */
  /* height:100%; */
  /*让图片贴合屏幕的关键*/
   /* position:fixed;
  top: 0;
  left: 0;
  right:0;
  bottom:0; */
  /* 滚动贴合 */
  display:flex;
  height:100vh;
  width:100vw;
  scroll-snap-type: x mandatory;
  overflow:scroll;
   /* overflow:hidden; */

}
#mcover{
  color: #fff;
  text-align: center;
  text-shadow: 0 1px 3px rgba(0, 0, 0, .5);
}
/* 隐藏滚动条 */
#mcover::-webkit-scrollbar{
	display:none
}

/* Extra markup and styles for table-esque vertical and horizontal centering */
.site-wrapper {
  display: grid;
  height:100%;
  grid-template-columns: 100%;
  grid-template-rows: 20% 60% 20%;
  -webkit-box-shadow: inset 0 0 100px rgba(0, 0, 0, .5);
  box-shadow: inset 0 0 100px rgba(0, 0, 0, .5);
  margin-bottom:-17px;
}
/* .site-wrapper-inner { */
  /* display: table-cell; */
  /* vertical-align: center; */
/* } */
@media (min-height: 800px) {
  /* Pull out the header and footer */
 .site-wrapper {
    /* vertical-align: middle; Start the vertical centering */
     min-height:100%;
     width: 100%;
  }
  
}  

.cover-container {
  /* /* margin-right: auto; */
  margin-left: auto; 
  min-height: 100%;
  width:100%;
}

/* Padding for spacing */
.inner {
  padding: 30px;
}


/*
 * Header
 */
.masthead-brand {
  margin-top: 10px;
  margin-bottom: 10px;
}

.masthead-nav > li {
  display: inline-block;
}
.masthead-nav > li + li {
  margin-left: 20px;
}
.masthead-nav > li > a {
  padding-right: 0;
  padding-left: 0;
  font-size: 16px;
  font-weight: 700;
  color: #fff; /* IE8 proofing */
  color: rgba(255, 255, 255, .75);
  border-bottom: 2px solid transparent;
}
.masthead-nav > li > a:hover,
.masthead-nav > li > a:focus {
  background-color: transparent;
  border-bottom-color: #a9a9a9;
  border-bottom-color: rgba(255, 255, 255, .25);
}
.masthead-nav > .active > a,
.masthead-nav > .active > a:hover,
.masthead-nav > .active > a:focus {
  color: #fff;
  border-bottom-color: #fff;
}



.container0{
  height: 100%;
  width:100%;
}



/* Head */

.masthead{
  
  height:15%;
}

/*
 * Cover
 */
.inner-cover{

  height:100%;
  width:100%;
  /* display: table-cell;
  vertical-align: middle; */
  /* text-align: center; */
  /* position:relative; */
  /* padding-left:30%;
   padding-right:30%;
   padding:6% 20% 5% 20%;  */

}
.cover-heading{
   
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}



/*
 * Footer
 */

.mastfoot {
  color: #999; /* IE8 proofing */
  color: rgba(255, 255, 255, .5);
  height:15%;

  width:100% 

}



</style>
