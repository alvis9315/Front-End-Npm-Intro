export const packageVerticalCode = `<template>
  <div class="package-comparison">
    <div class="section-header">
      <h4 style="color: #22c55e;">📦 Vue3-Carousel 垂直套件版本</h4>
      <div class="control-group">
        <n-button 
          circle 
          size="small" 
          :type="isVerticalPackageAutoPlay ? 'warning' : 'success'"
          class="play-pause-btn"
          @click="toggleVerticalPackageAutoPlay">
          <template #icon>
            <span>{{ isVerticalPackageAutoPlay ? '⏸️' : '▶️' }}</span>
          </template>
        </n-button>
      </div>
    </div>
    <div class="vertical-carousel-package">
      <Carousel 
        :itemsToShow="1"
        :autoplay="isVerticalPackageAutoPlay ? 3000 : 0"
        :transition="600"
        :wrapAround="true"
        dir="ttb"
        :height="60"
        :mouseDrag="false"
        :touchDrag="false">
        <Slide v-for="(item, index) in carouselItems" :key="index">
          <div class="package-carousel-item">
            <span class="badge" :style="{ backgroundColor: getBadgeColor(item.type) }">{{ item.type }}</span>
            <span class="text">{{ item.title }}</span>
            <span class="time">{{ item.time }}</span>
          </div>
        </Slide>
      </Carousel>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'

const isVerticalPackageAutoPlay = ref(true)

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

const toggleVerticalPackageAutoPlay = () => {
  isVerticalPackageAutoPlay.value = !isVerticalPackageAutoPlay.value
}
</script>

<style scoped>
.package-comparison {
  max-width: 600px;
  margin: 2rem auto 0;
  background: #1a1a1a;
  border-radius: 8px;
  overflow: hidden;
}

.vertical-carousel-package {
  height: 60px;
}

.package-carousel-item {
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

/* Vue3-Carousel 樣式覆蓋 */
:deep(.carousel__viewport) {
  height: 60px;
}

:deep(.carousel__track) {
  height: 100%;
}

:deep(.carousel__slide) {
  height: 100%;
}
</style>

<!-- 需要安裝套件 -->
<!-- npm install vue3-carousel -->`
