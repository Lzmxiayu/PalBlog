<template>
  <div id="add-blog" >
      <!-- <h1>添加博客</h1> -->

      <form v-if="!submitted">
          <label><h3><strong>标题</strong></h3></label>
          <input type="text" v-model="blog.title"/>
         
          <label><h3><strong>内容</strong></h3></label>
          <textarea v-model="blog.content"/>
      
      
      <div id="checkboxes">
        <label>Vue</label>
        <input type="checkbox" value="Vue" v-model="blog.categories"/>
        <label>React</label>
        <input type="checkbox" value="React" v-model="blog.categories"/>
        <label>Node</label>
        <input type="checkbox" value="Node" v-model="blog.categories"/>
        <label>Angular</label>
        <input type="checkbox" value="Angular" v-model="blog.categories"/>
        <br/>
        <label><h3><strong>作者</strong></h3></label>
        <select v-model="blog.author">
            <option v-for="author in authors" :key="author">
                {{author}}
            </option> 
        </select>
        <button v-on:click.prevent="post">添加博客</button>

      </div>

      </form>
        <div v-if="submitted">
            <h3>您的博客添加成功</h3>
        

     
      <div id="preview">
          <h3>博客总览</h3>
          <p>博客标题：{{blog.title}}</p>
          <p>博客内容：</p>
          <p>{{blog.content}}</p>
          <p>分类:</p>
          <ul>
              <li v-for="category in blog.categories" :key="category">
                  {{category}}
              </li>
          </ul>
          <p>作者:{{blog.author}}</p>
          
      </div>
    </div>


  </div>
</template>

<script>
import axios from 'axios'
export default {
    name:"add-blog",
    data(){
        return {
            blog:{
                title:"",
                content:"",
                categories:[],
                author:"",
            },
           authors:["Kelly","Lily","Cinda"],
           submitted:false,
        
        }
     
    },
    methods:{
        post:function(){
            // this.$http.post(
            // if(this.blogs !== null )
            // console.log(this.blog)
                axios.post(
                // 'https://jsonplaceholder.typicode.com/posts',
                'https://vuedemo1-24e76-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
                // './../static/posts.json',
                this.blog)
                .then((data)=>{
                    this.submitted=true
                    console.log(data)
                }
                )
              

        },
        created(){
            console.log(this.blog)
        }
     
   }

}
</script>

<style scoped>
#add-blog *{
    box-sizing: border-box;

}
#add-blog{
    /* margin-top:25px; */
    width:96%;
    padding:5% 10% ;
    margin-left:2%;
    opacity:0.9;
    padding: 0 auto;
    background: white;
    border-radius:15px;
}
h1{
    
}

label{
    display:block;
    margin:20px 0 10px;
}

input[type="text"],textarea,select{
    display:block;
    width:100%;
    padding:8px;
}
textarea{
    height:200px;
}
#checkboxes{
    padding:10px;
}
#checkboxes label{
    display:inline-block;
    margin-top:0;
}
 
#checkboxes input{
    display:inline-block;
    margin-right:10px;
}
button{
    display: block;
    margin:20px 0;
    background:crimson;
    color:#fff;
    border:0;
    padding:14px;
    border-radius: 4px;
    font-size:18px;
    cursor:pointer;
}

#preview{
    padding:10px 20px;
    border:1px dotted #ccc;
    margin:30px 0;
}

h3{
    margin-top:10px;
}
</style>