<template>
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
  { type: '教學', title: '前端效能優化完整指南：從 LCP 到 CLS 全面提升', time: '1天前' }
])
function getBadgeColor(type) {
  const map = { '科技': '#4f8cff', '資訊': '#10b981', '教學': '#f59e42' }
  return map[type] || '#888'
}
function toggleVerticalPackageAutoPlay() {
  isVerticalPackageAutoPlay.value = !isVerticalPackageAutoPlay.value
}
</script>
<style scoped>
/* 你可以複製原有的CSS樣式到這裡 */
</style>
