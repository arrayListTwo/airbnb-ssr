<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { getCurrentInstance } from 'vue'
import { http } from '@/utils/http.ts'

const router = useRouter()
const route = useRoute()

console.log(route.params)

const { proxy }: any = getCurrentInstance()
proxy.$message({
  message: 'Congrats, this is a success message.',
  type: 'success',
  plain: true
})
http.httpRequestGet('/api', {})
</script>

<template>
  <h1>首页</h1>
  <div class="text-cyan-300 hover:cursor-pointer" @click="() => router.push({path: '/mine', query: {id: 1}})">个人中心
  </div>
  <el-button type="primary">Primary</el-button>
</template>

<style scoped>

</style>
