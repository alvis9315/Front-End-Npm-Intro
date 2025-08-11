<template>
  <div>
    <n-button @click="renderAllItems">傳統渲染</n-button>
    <n-button @click="virtualScrolling">虛擬滾動</n-button>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const items = ref([])
async function renderAllItems() {
  const response = await fetch('/api/posts')
  const data = await response.json()
  // 直接渲染所有10,000個DOM元素
  // 實際專案請勿這樣做
}
async function virtualScrolling() {
  const response = await fetch('/api/posts')
  const data = await response.json()
  items.value = data // 只渲染可見範圍
}
</script>
<style scoped>
</style>
