export const packageMarqueeCode = `<!-- Vue3-Marquee 套件實作 -->
<template>
  <div class="marquee-package-container">
    <Vue3Marquee
      :duration="marqueeDuration"
      :pause="!isMarqueePackageRunning"
      :pauseOnHover="true"
      :pauseOnClick="false"
      :gradient="false"
      direction="normal"
      class="package-marquee">
      <span v-for="(news, index) in newsItems" :key="index" class="package-marquee-item">
        {{ news }}
      </span>
    </Vue3Marquee>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Vue3Marquee } from 'vue3-marquee'
import { useToast } from 'vue-toastification'

const toast = useToast()

// 狀態管理
const isMarqueePackageRunning = ref(true)
const marqueeDuration = ref(10) // 完成一輪的秒數

// 新聞數據
const newsItems = ref([
  '🔥 Vue 3.4 正式發布，帶來更多性能優化',
  '⚡ Vite 6.0 大幅提升構建速度',
  '🎯 Naive UI 2.40 新增更多組件'
])

// 播放/暫停控制
const toggleMarqueePackage = () => {
  isMarqueePackageRunning.value = !isMarqueePackageRunning.value
  toast.info('Vue3-Marquee ' + (isMarqueePackageRunning.value ? 'Playing' : 'Paused'))
}

// 速度控制
const changeMarqueePackageSpeed = (speed) => {
  const speedMap = { 
    slow: 20,      // 20秒完成一輪
    normal: 10,    // 10秒完成一輪  
    fast: 5,       // 5秒完成一輪
    lightspeed: 2  // 2秒完成一輪
  }
  marqueeDuration.value = speedMap[speed]
  
  const speedText = { slow: '慢速', normal: '正常', fast: '快速', lightspeed: '光速' }
  toast.info('⚡ Vue3-Marquee速度已調整為' + speedText[speed] + ' (' + speedMap[speed] + '秒)')
}
</script>

<style scoped>
.marquee-package-container {
  width: 100%;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  height: 60px;
  display: flex;
  align-items: center;
}

.package-marquee-item {
  display: inline-block;
  margin-right: 3rem;
  color: #e2e8f0;
  font-size: 0.95rem;
  white-space: nowrap;
}
</style>`
