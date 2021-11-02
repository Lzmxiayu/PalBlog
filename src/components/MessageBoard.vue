<template>
    <div id="message-board"> 
        <div class="container-out">
            <!-- <h1>留言板</h1> -->
            <div class="container">
                <div class="messages">
                    <div v-for="comment in comments" :key="comment.id">
                        <!-- <div class="container-fluid"> -->
                            <div class="message">
                        <div class="row">      
                            <div class="col-sm-2 name">
                                <h5>{{comment.title}}</h5>
                            </div>
                            <div class="col-sm-10 words">
                                <p>{{comment.content}}</p>
                            </div> 
                            <!-- <div class="col-sm-2 words">
                                <p>tetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
                            </div>                -->
                        </div><!-- /.row -->
                            </div>
                    <!-- </div>/.container -->
                    <hr>
                    </div>
                    <div class="add-message">
                        <div class="row">
                        <textarea v-model="comment.content"></textarea>              
                        <button @click="sendComent">发送</button>
                        </div>         
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'message-board',
        data(){
        return{
            comments:[],
            comment:{
                content:"",
            },
        }
    },
    methods:{
        sendComent:function(){
            console.log(this.comment)
             axios.post(
                'https://vuedemo1-24e76-default-rtdb.asia-southeast1.firebasedatabase.app/comments.json',
                this.comment)
                .then((data)=>{
                    // this.submitted=true
                    console.log('返回数据：')
                    console.log(data)
                }
                )
                //留言框置空
                /*这里可能有隐患，不同步，可能post未完成就置空content了？？
                也可能是请求太频繁丧失数据*/
                this.comment.content=""
                //刷新页面
                //这里有bug,还没发送完就刷新，数据没发出去,加上settimeout延迟刷新
                // location.replace(document.referrer);
                setTimeout(() => {
                    location.replace(document.referrer);
                }, 1000);

        }
    },
    created(){
        // this.$http.get(
        axios.get( 
         'https://vuedemo1-24e76-default-rtdb.asia-southeast1.firebasedatabase.app/comments.json'
        ).then(function(data){
            // console.log(data.data);
            return data.data
            // this.comments = data.data.slice(0,10)
        }).then((data)=>{
          var commentsArray=[]
          for(let key in data){
            data[key].id=key
            commentsArray.push(data[key])
          }
           this.comments=commentsArray
        })
    },
    computed:{
        filteredcomments:function(){
            return this.comments.filter((blog)=>{
                return blog.title.match(this.search);
            })
        }
    },
}
</script>

<style scoped>
#message-board{
    /* background:white; */
    border-radius: 15px;
    width:96%;
    margin-left:2%;
      backdrop-filter: blur(8px);
    background-color:rgba(255,255,255,0.25); 
    /* padding-top: */
}
.container-out{
    margin:25px;
    padding:10px;
    /* text-align: center; */
}
.messages{
    width:100%;
    margin:20px 0px 20px 0px ;
}
.message{
    /* margin:10px; */
    padding:0;
}

.add-message{
    text-align: center;
    /* margin:20px 0px 20px 0px ; */
    /* background:white; */
    width:100%;
    height:100px;
    padding:5%;
}

.add-message textarea{
    width:60%;
    height:50%;
    margin-left:20%;
    margin-right:10px;
    background-color:grey;
    opacity:0.6;
    color:white;;
    border:0;
    border-radius: 15px;
    /* margin-top: 5%; */
}
.add-message button{
    width:8%;
    height:25%;
    padding:4px;   
    margin:5px; 
    /* margin:5px */
    /* font */
}

.row{
    width:100%;
    /* margin:25px; */
    flex-grow:100%; 
    padding:0;
}
.name{
    padding:10px 4%;

}

@media (min-width: 1200px) {
  .container {
    width: 90%;
  }
}
@media (min-height: 720px) { 
  .container {
    height: 100%;
  }
} 
</style>