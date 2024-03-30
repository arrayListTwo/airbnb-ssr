<script setup lang="ts">
import {useRouter, useRoute} from "vue-router";

const router = useRouter()
const route = useRoute()

console.log(route.params)
</script>

<template>
  <h1>首页</h1>
  <div class="text-cyan-300 hover:cursor-pointer" @click="() => router.push({path: '/mine', query: {id: 1}})">个人中心
  </div>
</template>

<style scoped>

</style>
