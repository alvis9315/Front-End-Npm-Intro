export const nativeMarqueeCode = `<!-- 原生跑馬燈實作 -->
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

// 狀態管理
const isMarqueeRunning = ref(true)
const marqueeSpeed = ref('normal')
const marqueePosition = ref(0)

// 新聞數據
const newsItems = ref([
  '🔥 Vue 3.4 正式發布，帶來更多性能優化',
  '⚡ Vite 6.0 大幅提升構建速度',
  '🎯 Naive UI 2.40 新增更多組件'
])

// 速度映射
const marqueeSpeedMap = {
  slow: 0.1,      // 超慢速
  normal: 0.3,    // 正常速度
  fast: 0.8,      // 快速
  lightspeed: 5   // 光速
}

// 動畫控制
let marqueeAnimationId = null
const startMarqueeAnimation = () => {
  if (marqueeAnimationId) return
  
  const animate = () => {
    if (isMarqueeRunning.value) {
      const speed = marqueeSpeedMap[marqueeSpeed.value]
      marqueePosition.value -= speed
      
      // 重置位置
      if (marqueePosition.value <= -100) {
        marqueePosition.value = 100
      }
    }
    marqueeAnimationId = requestAnimationFrame(animate)
  }
  animate()
}

// 播放/暫停控制
const toggleMarquee = () => {
  isMarqueeRunning.value = !isMarqueeRunning.value
}

// 速度控制
const changeMarqueeSpeed = (speed) => {
  marqueeSpeed.value = speed
}

// 生命周期
onMounted(() => {
  startMarqueeAnimation()
})

onUnmounted(() => {
  if (marqueeAnimationId) {
    cancelAnimationFrame(marqueeAnimationId)
  }
})
</script>

<style scoped>
.marquee-container {
  width: 100%;
  height: 60px;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  position: relative;
}

.marquee-content {
  display: flex;
  white-space: nowrap;
  will-change: transform;
  transition: none;
}

.marquee-item {
  color: #ffffff;
  font-weight: 500;
  font-size: 1rem;
  margin-right: 3rem;
  display: inline-block;
  white-space: nowrap;
  flex-shrink: 0;
}
</style>`
