<template>
    <div id="cover">
        <div class="container0">
            <div class="site-wrapper">

        <div class="site-wrapper-inner">

            <div class="cover-container">

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
                <h1 class="cover-heading">刘某人的博客</h1>
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

            <div class="mastfoot">
                <div class="inner">
                <p>Cover template for <a href="https://getbootstrap.com/" class="link-url">Bootstrap</a>, 
                by <a href="https://twitter.com/mdo" class="link-url">@mdo</a>.</p>
                </div>
            </div>

            </div>

        </div>

        </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'cover',
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


#cover{
  /* height: 100%; */
  /* width:100%; */
  background-color: rgb(77, 73, 73);
  background: url('../assets/cover2.png');
  background-size: 100% 100%;
  min-height:720px;
  /* max-height:2000px; */
  /*background-repeat: no-repeat;*/
  /*//no-repeat scroll 0px 100%/cover transparent; );*/
}
#cover{
  color: #fff;
  text-align: center;
  text-shadow: 0 1px 3px rgba(0, 0, 0, .5);
}

/* Extra markup and styles for table-esque vertical and horizontal centering */
.site-wrapper {
  display: table;
  width: 100%;
  height: 100%; /* For at least Firefox */
  min-height: 100%;
  -webkit-box-shadow: inset 0 0 100px rgba(0, 0, 0, .5);
  box-shadow: inset 0 0 100px rgba(0, 0, 0, .5);
}
.site-wrapper-inner {
  display: table-cell;
  vertical-align: top;
}


.cover-container {
  /* /* margin-right: auto; */
  margin-left: auto; 
  height: 100%;
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

@media (min-width: 768px) {
  .masthead-brand {
    float: left;
  }
  .masthead-nav {
    float: right;
  }
}
.container0{
  height: 100%;
  width:100%;
}



/* Head */

.masthead{
  max-height:200px;
  min-height:150px;
}

/*
 * Cover
 */
.inner-cover{
  /* height:600px; */
  max-height:600px;
  min-height:453px;

  width:100%;
  /* margin:0; */
  padding-left:30%;
   padding-right:30%;
   padding:6% 20% 5% 20%; 
  /* padding-top:25%; */
  /* text-align: center; */
}
.cover {
  padding: 0 20px;
}
.cover .btn-lg {
  padding: 10px 20px;
  font-weight: 700;
}


/*
 * Footer
 */

.mastfoot {
  color: #999; /* IE8 proofing */
  color: rgba(255, 255, 255, .5);
  /* height:200px; */
  min-height:150px;
  max-height:200px;
  width:100% 

}

/* @media (max-height: 1000px) {
  .container0 {
    height: 100%;
  }
} */


</style>
