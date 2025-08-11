<template>
  <div class="vertical-carousel">
    <div class="section-header">
      <h4>🎯 原生垂直輪播實作</h4>
      <div class="control-group">
        <n-button 
          circle 
          size="small" 
          :type="isVerticalCarouselRunning ? 'warning' : 'success'"
          class="play-pause-btn"
          @click="toggleVerticalCarousel">
          <template #icon>
            <span>{{ isVerticalCarouselRunning ? '⏸️' : '▶️' }}</span>
          </template>
        </n-button>
      </div>
    </div>
    <div class="carousel-wrapper">
      <div class="carousel-content" :style="{ transform: `translateY(-${currentIndex * 60}px)` }">
        <div v-for="(item, index) in carouselItems" :key="index" class="carousel-item">
          <span class="badge" :style="{ backgroundColor: getBadgeColor(item.type) }">{{ item.type }}</span>
          <span class="text">{{ item.title }}</span>
          <span class="time">{{ item.time }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const currentIndex = ref(0)
const isVerticalCarouselRunning = ref(true)
let carouselInterval = null
const carouselItems = ref([
  { type: '科技', title: 'Vue 3.4 正式發布，帶來全新的響應式系統優化', time: '2小時前' },
  { type: '資訊', title: 'JavaScript 2024 趨勢報告：TypeScript 使用率突破 80%', time: '5小時前' },
  { type: '教學', title: '前端效能優化完整指南：從 LCP 到 CLS 全面提升', time: '1天前' }
])
function getBadgeColor(type) {
  const map = { '科技': '#4f8cff', '資訊': '#10b981', '教學': '#f59e42' }
  return map[type] || '#888'
}
function toggleVerticalCarousel() {
  isVerticalCarouselRunning.value = !isVerticalCarouselRunning.value
}
onMounted(() => {
  carouselInterval = setInterval(() => {
    if (isVerticalCarouselRunning.value) {
      currentIndex.value = (currentIndex.value + 1) % carouselItems.value.length
    }
  }, 3000)
})
onUnmounted(() => {
  if (carouselInterval) clearInterval(carouselInterval)
})
</script>
<style scoped>
/* 你可以複製原有的CSS樣式到這裡 */
</style>
