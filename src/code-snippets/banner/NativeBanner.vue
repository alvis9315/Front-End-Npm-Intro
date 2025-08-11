<template>
  <div class="banner-carousel">
    <div class="section-header">
      <div class="control-group">
        <n-button 
          circle 
          size="small" 
          :type="isBannerAutoPlay ? 'warning' : 'success'"
          class="play-pause-btn"
          @click="toggleBannerAutoPlay">
          <template #icon>
            <span>{{ isBannerAutoPlay ? '⏸️' : '▶️' }}</span>
          </template>
        </n-button>
      </div>
    </div>
    <div class="banner-wrapper">
      <div class="banner-container" :style="{ transform: 'translateX(-' + (bannerCurrentIndex * 100) + '%)' }">
        <div v-for="(banner, index) in bannerItems" :key="index" 
             class="banner-slide" 
             :style="{ background: banner.gradient }">
          <div class="banner-content">
            <div class="banner-text">
              <h3>{{ banner.title }}</h3>
              <p>{{ banner.description }}</p>
              <n-button type="primary" @click="openBannerUrl(banner.url)">
                {{ banner.buttonText }}
              </n-button>
            </div>
            <div class="banner-icon">{{ banner.icon }}</div>
          </div>
        </div>
      </div>
      <div class="banner-navigation">
        <n-button circle type="info" @click="prevBanner" class="nav-btn prev-btn">‹</n-button>
        <n-button circle type="info" @click="nextBanner" class="nav-btn next-btn">›</n-button>
      </div>
      <div class="banner-indicators">
        <span v-for="(banner, index) in bannerItems" :key="index" 
              :class="['indicator', { active: index === bannerCurrentIndex }]"
              @click="setBannerSlide(index)">
        </span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const isBannerAutoPlay = ref(true)
const bannerCurrentIndex = ref(0)
const bannerItems = ref([
  // 請根據你的主程式傳入資料
])
function toggleBannerAutoPlay() {
  isBannerAutoPlay.value = !isBannerAutoPlay.value
}
function prevBanner() {
  bannerCurrentIndex.value = (bannerCurrentIndex.value - 1 + bannerItems.value.length) % bannerItems.value.length
}
function nextBanner() {
  bannerCurrentIndex.value = (bannerCurrentIndex.value + 1) % bannerItems.value.length
}
function setBannerSlide(idx) {
  bannerCurrentIndex.value = idx
}
function openBannerUrl(url) {
  window.open(url, '_blank')
}
</script>
<style scoped>
/* 你可以複製原有的CSS樣式到這裡 */
</style>
