<template>
  <div class="package-comparison">
    <div class="section-header">
      <div class="control-group">
        <n-button 
          circle 
          size="small" 
          :type="isBannerPackageAutoPlay ? 'warning' : 'success'"
          class="play-pause-btn"
          @click="toggleBannerPackageAutoPlay">
          <template #icon>
            <span>{{ isBannerPackageAutoPlay ? '⏸️' : '▶️' }}</span>
          </template>
        </n-button>
      </div>
    </div>
    <div class="banner-carousel-package">
      <Carousel 
        :itemsToShow="1"
        :autoplay="isBannerPackageAutoPlay ? 5000 : 0"
        :transition="600"
        :wrapAround="true"
        :height="200">
        <Slide v-for="(banner, index) in bannerItems" :key="index">
          <div class="package-banner-slide" :style="{ background: banner.gradient }">
            <div class="package-banner-content">
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
        </Slide>
        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
const isBannerPackageAutoPlay = ref(true)
const bannerItems = ref([
  // 請根據你的主程式傳入資料
])
function toggleBannerPackageAutoPlay() {
  isBannerPackageAutoPlay.value = !isBannerPackageAutoPlay.value
}
function openBannerUrl(url) {
  window.open(url, '_blank')
}
</script>
<style scoped>
/* 你可以複製原有的CSS樣式到這裡 */
</style>
