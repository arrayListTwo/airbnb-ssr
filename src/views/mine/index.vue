<script setup lang="ts">
import {useRouter, useRoute} from "vue-router";

const router = useRouter()
const route = useRoute()

console.log(route.query)
</script>

<template>
  <h1>个人中心</h1>
  <div class="text-cyan-300 hover:cursor-pointer" @click="() => router.push({name: 'home', params: {id: 1}})">首页</div>
</template>

<style scoped>

</style>
