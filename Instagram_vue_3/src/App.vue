<template>
  <div id="app">
    <div class="header">
      <ul class="header-button-left">
        <li>Cancel</li>
      </ul>

      <!-- step2에서는 Next가아니라 Done이라는 버튼이 출현해야함 -->
      
      <ul class="header-button-right" v-on:click="step = 2" v-if="step == 1">
        <li>Next</li>
      </ul>

      <ul class="header-button-right" v-on:click="publish" v-if="step == 2">
        <li>Done</li>
      </ul>

      


      <img src="./assets/logo.png" class="logo" />
    </div>

    <Body v-on:글입력="입력한글 = $event" v-bind:포스팅들="포스팅들" :step="step" :업로드이미지="업로드이미지" />


    <div class="footer"> 
      <ul class="footer-button-plus">
        <input type="file" id="file" class="inputfile" v-on:change="upload">
        <label for="file" class="input-plus">+</label>
      </ul>
    </div>
  </div>
</template>

<script>
import Body from './components/Body.vue';
import Postdata from './assets/postdata.js';

export default {
  name: "App",
  data(){
    return {
      포스팅들 : Postdata,
      step : 0,
      업로드이미지 : '',
      입력한글 : '',
    }
  },
  components: {
    Body
  },
  methods : {
    publish(){
      //step을 다시 0으로 
      //내가 업로드한이미지랑 쓴글을 포스팅들이라는 데이터에 추가
      this.step = 0;

      var 내데이터 = {
        name: "Kimhyukmin",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.업로드이미지,
        likes: 36,
        date: 'May 15',
        liked: false,
        caption: this.입력한글,
        filter: "perpetua"
      };
      this.포스팅들.unshift(내데이터);


    },
    upload(e){
      //업로드한 이미지 파일을....긴 문자로 압축
      let 파일 = e.target.files;
      let reader = new FileReader();
      reader.readAsDataURL(파일[0]);
      reader.onload = e => {
        console.log(e.target.result) 
        this.step = 1;
        this.업로드이미지 = e.target.result;
      }

    }
  },


};
</script>

<style>
body {
margin: 0;
}
ul{
padding: 5px;
list-style-type: none;
}
.logo {
width:22px;
margin: auto;
display: block;
position: absolute;
left: 0;
right: 0;
top: 13px;
}
.header {
width: 100%;
height: 40px;
background-color: white;
padding-bottom: 8px;
position: sticky;
top: 0;
}
.header-button-left {
color: skyblue;
float: left;
width: 50px;
padding-left: 20px;
cursor: pointer;
margin-top: 10px;
}
.header-button-right {
color: skyblue;
float: right;
width: 50px;
cursor: pointer;
margin-top: 10px;
}
.footer{
width: 100%;
position: sticky;
bottom: 0;
padding-bottom: 10px;
background-color: white;
}
.footer-button-plus {
width: 80px;
margin: auto;
text-align: center;
cursor: pointer;
font-size: 24px;
padding-top: 12px;
}
.sample-box{
width: 100%;
height: 600px;
background-color: bisque;
}
.inputfile {
display: none;
}
.input-plus {
cursor: pointer
}
#app {
box-sizing: border-box;
font-family: 'consolas';
margin-top: 60px;
width: 100%;
max-width: 460px;
margin: auto;
position: relative;
border-right: 1px solid #eee;
border-left: 1px solid #eee;
}

</style>
