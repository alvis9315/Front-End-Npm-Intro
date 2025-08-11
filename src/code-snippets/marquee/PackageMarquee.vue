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
const isMarqueePackageRunning = ref(true)
const marqueeDuration = ref(10)
const newsItems = ref([
  '🔥 Vue 3.4 正式發布，帶來更多性能優化',
  '⚡ Vite 6.0 大幅提升構建速度',
  '🎯 Naive UI 2.40 新增更多組件'
])
const toggleMarqueePackage = () => {
  isMarqueePackageRunning.value = !isMarqueePackageRunning.value
  toast.info('Vue3-Marquee ' + (isMarqueePackageRunning.value ? 'Playing' : 'Paused'))
}
</script>
<style scoped>
/* 你可以複製原有的CSS樣式到這裡 */
</style>
