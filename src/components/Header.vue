<template>
  <header data-bs-theme="dark">
    <div class="collapse text-bg-dark" id="navbarHeader">
      <div class="container">
        <div class="row">
          <div class="col-sm-4 offset-md-1 py-4">
            <h4>사이트맵</h4>
            <ul class="list-unstyled">
              <li>
                <router-link to="/" class="text-white">메인화면</router-link>
              </li>
              <li>
                <router-link to="/orders" class="text-white" v-if="$store.state.account.id">주문내역</router-link>
              </li>
              <li>
                <router-link to="/login" class="text-white" v-if="!$store.state.account.id">로그인</router-link>
                <a class="text-white" style="cursor:pointer" @click="logout" v-else>로그아웃</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="navbar navbar-dark bg-dark shadow-sm">
      <div class="container">
        <router-link to="/" class="navbar-brand d-flex align-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" class="me-2" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
          <strong>Gallery</strong>
        </router-link>
        <router-link to="/cart" class="cart btn" v-if="$store.state.account.id">
          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import store from '@/scripts/store'
import router from '@/scripts/router';
import axios from 'axios';

export default {
  name: 'vueHeader',
  setup(){
    const logout = () => {
      //sessionStorage.removeItem('id');
      axios.post('/api/account/logout').then((res)=>{
        if(res.data == 0){
          window.alert("로그아웃 되었습니다.");
          store.commit('setAccount', 0);
        }
      })
      router.push({path:'/'});
    }

    return { logout }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header .navbar .cart {
  margin-left: auto;
  color: #fff;
  font-size: 22px;
}
</style>
