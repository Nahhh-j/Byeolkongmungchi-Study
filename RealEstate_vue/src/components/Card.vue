<template>
  <div class="col-md-6">
    <h4>{{rooms.title}}</h4>
    <img :src="rooms.image" style="width:100%;">
    <p>{{rooms.caption}}</p>
    <p>{{rooms.price}}</p>
  </div>
</template>

<script>
export default {
  name: 'Card',
  data(){
    return{

    };
  },
  props : {
    rooms: Object,
  }
}
</script>

<style>

</style>