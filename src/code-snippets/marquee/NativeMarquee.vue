<template>
  <div class="marquee-container">
    <div class="marquee-content" :style="{ transform: 'translateX(' + marqueePosition + '%)' }">
      <span v-for="(news, index) in newsItems" :key="index" class="marquee-item">
        {{ news }}
      </span>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const isMarqueeRunning = ref(true)
const marqueeSpeed = ref('normal')
const marqueePosition = ref(0)
const newsItems = ref([
  '🔥 Vue 3.4 正式發布，帶來更多性能優化',
  '⚡ Vite 6.0 大幅提升構建速度',
  '🎯 Naive UI 2.40 新增更多組件'
])
const marqueeSpeedMap = {
  slow: 0.1,
  normal: 0.3,
  fast: 0.8,
  lightspeed: 5
}
let marqueeAnimationId = null
const startMarqueeAnimation = () => {
  if (marqueeAnimationId) return
  const animate = () => {
    if (isMarqueeRunning.value) {
      marqueePosition.value -= marqueeSpeedMap[marqueeSpeed.value]
      if (marqueePosition.value < -100) marqueePosition.value = 0
    }
    marqueeAnimationId = requestAnimationFrame(animate)
  }
  animate()
}
onMounted(() => startMarqueeAnimation())
onUnmounted(() => {
  if (marqueeAnimationId) cancelAnimationFrame(marqueeAnimationId)
})
</script>
<style scoped>
/* 你可以複製原有的CSS樣式到這裡 */
</style>
