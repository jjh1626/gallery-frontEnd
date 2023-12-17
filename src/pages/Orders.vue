<template>
  <div class="orders">
    <div class="container">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>번호</th>
            <th>주문자명</th>
            <th>주소</th>
            <th>결제수단</th>
            <th>구입항목</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(o, idx) in state.orders" :key="idx">
            <td>{{ state.orders.length - idx }}</td>
            <td>{{ o.name }}</td>
            <td>{{ o.address }}</td>
            <td>{{ o.payment }}</td>
            <td>
              <div v-for="(i, idxx) in o.items" :key="idxx">
                {{ i.name }}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import axios from 'axios';
import lib from "@/scripts/lib";

export default {
  name: "vueOrder",
  setup() {
    const state = reactive({
      orders: []
    });

    axios.get('/api/orders').then(({data})=>{
      state.orders = [];

      for(let order of data){
        if(order.items){
          order.items = JSON.parse(order.items);
        }
        state.orders.push(order);
      }
    })

    return { state, lib };
  },
};
</script>

<style scoped>
.table {
  margin-top: 30px;
}
</style>