<template>
    <div class="home">
        <div class="album py-5 bg-body-tertiary">
            <div class="container">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div class="col" v-for="(item, idx) in state.items" :key="idx">
                        <vueCard :item="item" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive } from 'vue';
import vueCard from '@/components/Card';
import axios from 'axios';

export default {
    name: 'vueHome',
    components: {
        vueCard
    },
    setup(){
        const state = reactive({
            items: []
        })
        
        axios.get("/api/items")
        .then((res)=>{
            console.log(res);
            state.items = res.data;
        })

        return { state }
    }
}
</script>

<style>

</style>