<template>
<div id="app">
      <img alt="Vue logo" src="./assets/logo.png">

  <div class="container">
      <div class="row">

        <div class="col-md-2">
          <button class="btn btn-light" v-on:click="sortPrice">가격순정렬</button>
          <button class="btn btn-info" v-on:click="sortOriginal">원래대로</button>
        </div> 

        <div class="col-md-10">
          <div class="row">           
            <Card v-for="(별명, i) in Oneroom" v-bind:rooms="Oneroom[i]" v-bind:key="i"/>
          </div>
        </div>

      </div>  
  </div>
</div>
</template>

<script>
import Card from './components/Card.vue';
import Oneroom from './assets/rooms_post.js';

export default {
  name: 'App',
  components: {
    Card: Card,
  },
  data() {
    return {
      Oneroom: Oneroom,
      Oneroom원본: [...Oneroom],
    };
  },
  methods:{
    sortPrice(){
      this.Oneroom.sort(function(a,b){
        return a.price-b.price
      });
    },
    sortOriginal(){
      this.Oneroom = [...this.Oneroom원본];
    },
  },
  mounted(){
    console.log("app.vue 실행됨"); //페이지 로드 시 실행
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
