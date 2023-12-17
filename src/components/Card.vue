<template>
    <div class="card shadow-sm">
        <img :src="item.imgPath" alt="이미지">
        <div class="card-body">
            <p class="card-text">{{ item.name }}</p>
            <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
                <button class="btn btn-primary" @click="addToCart(item.id)">
                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                </button>
            </div>
            <small class="price text-body-secondary">
                {{ lib.getNumberFormatted(item.price) }}원
            </small>
            <span class="discount badge bg-danger">
                {{ item.discountPer }}%
            </span>
            <small class="real text-danger">
                {{ lib.getNumberFormatted(item.price - (item.price * item.discountPer / 100)) }}원
            </small>
            </div>
        </div>
    </div>
</template>

<script>
import lib from '@/scripts/lib'
import axios from 'axios'

export default {
    name: "vueCard",
    props: {
        item: Object
    },
    setup(){
        const addToCart = (itemId)=>{
            axios.post(`/api/cart/items/${itemId}`).then(() => {
                console.log('success!!');
            })
        }
        return { lib, addToCart }
    }
}
</script>

<style>
.card img {
    display: inline-block;
    width: 100%;
    height: 280px;
    background-size: cover;
    background-position: center;
}

.card .card-body .price {
    text-decoration: line-through;
}
</style>