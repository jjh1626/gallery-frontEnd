<template>
  <div class="cart">
    <div class="container">
      <ul>
        <li v-for="(item, idx) in state.items" :key="idx">
          <img :src="item.imgPath" alt="이미지">
          <span class="name">{{ item.name }}</span>
          <span class="price">{{ lib.getNumberFormatted(item.price - item.price * item.discountPer / 100) }}원</span>
          <i class="fa fa-trash" @click="remove(item.id)"></i>
        </li>
      </ul>
      <router-link to="/order" class="btn btn-primary">구입하기</router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { reactive } from 'vue'
import lib from '@/scripts/lib'

export default {
    name: 'vueCart',
    setup(){
      const state = reactive({
        items: []
      })
      
      const load = ()=>{
        axios.get('/api/cart/items').then((res)=>{
          console.log(res.data);
          state.items = res.data;
        })
      }

      const remove = (itemId)=>{
        axios.delete(`/api/cart/items/${itemId}`).then(()=>{
          load();
        })
      }

      load();

      return { state, lib, remove }
    }
}
</script>

<style scoped>
.cart ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.cart ul li {
  border: 1px solid #eee;
  margin-top: 25px;
  margin-bottom: 25px;
}

.cart ul li img {
  width: 150px;
  height: 150px;
}

.cart ul li .name {
  margin-left: 25px;
}

.cart ul li .price {
  margin-left: 25px;
}

.cart ul li i {
  float: right;
  font-size: 20px;
  margin-top: 65px;
  margin-right: 50px;
  cursor: pointer;
}

.cart .btn {
  width: 200px;
  display: block;
  margin: 0 auto;
  padding: 20px 40px;
  font-size: 20px;
}
</style>