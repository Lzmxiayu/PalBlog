<template>
    <div id="mcover">
       <!-- <div class="container"> -->
            <div class="site-wrapper">

        <!-- <div class="site-wrapper-inner">

            <div class="cover-container">
-->
              <div class="masthead clearfix">
                  <div class="inner"> 

                  <!-- <h3 class="masthead-brand">Cover</h3>
                  <nav>
                      <ul class="nav masthead-nav">-->
                          <!-- <router-link to="/nc/blogs" exact>
                Home
              </router-link> -->

                      <!-- <li class="active"><a href="#">Home</a></li>
                      <li><a href="#">Features</a></li>
                      <li><a href="#">Contact</a></li>
                      </ul>
                  </nav> --> 
                  </div>
              </div> 

              <div class="inner-cover" >
                  
                <div class="cover-heading">
                  <h1 >刘某人的博客</h1>
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

        <!-- </div> -->
        <!-- </div> -->
    <!-- </div> -->
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


#mcover{
  background: url('../assets/cover2.png');
  background-size: 100% 100%;
}
#mcover{
  color: #fff;
  text-align: center;
  text-shadow: 0 1px 3px rgba(0, 0, 0, .5);
}

/* Extra markup and styles for table-esque vertical and horizontal centering */
.site-wrapper {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 20% 60% 20%;
  -webkit-box-shadow: inset 0 0 100px rgba(0, 0, 0, .5);
  box-shadow: inset 0 0 100px rgba(0, 0, 0, .5);
}
.site-wrapper-inner {
  /* display: table-cell; */
  /* vertical-align: center; */
}
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
    /* position:absolute;
    align-content: center;
    /* width:50%;
    height:50%; */
    /* top: 25%;
    left: 25%;
    margin-top: -50px;
    margin-left: -50px; */ 
    /* margin:auto; */
    /* display: inline-block; */
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
