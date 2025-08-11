export const nativeVerticalCode = `<template>
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
      <div class="carousel-content" :style="{ transform: \`translateY(-\${currentIndex * 60}px)\` }">
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
  { type: '教學', title: '前端效能優化完整指南：從 LCP 到 CLS 全面提升', time: '1天前' },
  { type: '新聞', title: 'GitHub Copilot 推出企業版，AI 程式開發進入新時代', time: '2天前' }
])

const getBadgeColor = (type) => {
  const colors = {
    '科技': '#10b981',
    '資訊': '#3b82f6', 
    '教學': '#f59e0b',
    '新聞': '#ef4444'
  }
  return colors[type] || '#6b7280'
}

const startCarousel = () => {
  if (carouselInterval) clearInterval(carouselInterval)
  carouselInterval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % carouselItems.value.length
  }, 3000)
}

const stopCarousel = () => {
  if (carouselInterval) {
    clearInterval(carouselInterval)
    carouselInterval = null
  }
}

const toggleVerticalCarousel = () => {
  isVerticalCarouselRunning.value = !isVerticalCarouselRunning.value
  if (isVerticalCarouselRunning.value) {
    startCarousel()
  } else {
    stopCarousel()
  }
}

onMounted(() => {
  if (isVerticalCarouselRunning.value) {
    startCarousel()
  }
})

onUnmounted(() => {
  stopCarousel()
})
</script>

<style scoped>
.vertical-carousel {
  max-width: 600px;
  margin: 0 auto;
  background: #1a1a1a;
  border-radius: 8px;
  overflow: hidden;
}

.carousel-wrapper {
  position: relative;
  height: 60px;
  overflow: hidden;
}

.carousel-content {
  transition: transform 0.5s ease;
}

.carousel-item {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  color: white;
  font-size: 14px;
}

.badge {
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  color: white;
  min-width: 40px;
  text-align: center;
}

.text {
  flex: 1;
  margin: 0 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.time {
  color: #9ca3af;
  font-size: 12px;
  min-width: 60px;
  text-align: right;
}
</style>`
