<script setup lang="ts">
import { useRouter } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

const router = useRouter()
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo"/>
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo"/>
    </a>
  </div>
  <HelloWorld msg="Vite + Vue"/>
  <div class="flex justify-center items-center">
    <div
        class="flex-1 bg-orange-200 mx-2 rounded text-cyan-300 hover:cursor-pointer hover:bg-cyan-300 hover:text-orange-200"
        @click="() => router.push({path: '/home'})">首页
    </div>
    |
    <div
        class="flex-1 bg-orange-200 mx-2 rounded text-cyan-300 hover:cursor-pointer hover:bg-cyan-300 hover:text-orange-200"
        @click="() => router.push({path: '/mine'})">个人中心
    </div>
  </div>
  <div class="flex justify-center items-center">
    <router-link class="flex-1 text-cyan-300" to="/home">home</router-link>
    |
    <router-link class="flex-1 text-cyan-300" to="/mine">mine</router-link>
  </div>
  <router-view></router-view>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
