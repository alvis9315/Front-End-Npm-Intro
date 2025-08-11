export const nativeBannerCode = `<!-- 原生Banner輪播實作 -->
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
      
      <!-- 導航按鈕 -->
      <div class="banner-navigation">
        <n-button circle type="info" @click="prevBanner" class="nav-btn prev-btn">‹</n-button>
        <n-button circle type="info" @click="nextBanner" class="nav-btn next-btn">›</n-button>
      </div>
      
      <!-- 指示器 -->
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
import { ref, onMounted, onUnmounted } from 'vue'

// 響應式狀態
const isBannerAutoPlay = ref(true)
const bannerCurrentIndex = ref(0)

// Banner數據
const bannerItems = ref([
  {
    title: 'Vue 3.4 性能提升',
    description: '全新的編譯器優化帶來更快的渲染速度',
    buttonText: '立即體驗',
    icon: '⚡',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    url: 'https://vuejs.org/'
  },
  {
    title: 'Vite 6.0 構建革新',
    description: '下一代前端建構工具，開發體驗再升級',
    buttonText: '了解更多',
    icon: '🚀',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    url: 'https://vitejs.dev/'
  }
])

// 自動播放控制
let bannerInterval = null

const startBannerAutoPlay = () => {
  if (!isBannerAutoPlay.value) return
  
  bannerInterval = setInterval(() => {
    bannerCurrentIndex.value = (bannerCurrentIndex.value + 1) % bannerItems.value.length
  }, 5000)
}

const stopBannerAutoPlay = () => {
  if (bannerInterval) {
    clearInterval(bannerInterval)
    bannerInterval = null
  }
}

// 播放控制
const toggleBannerAutoPlay = () => {
  isBannerAutoPlay.value = !isBannerAutoPlay.value
  if (isBannerAutoPlay.value) {
    startBannerAutoPlay()
  } else {
    stopBannerAutoPlay()
  }
}

// 導航控制
const prevBanner = () => {
  bannerCurrentIndex.value = bannerCurrentIndex.value === 0 
    ? bannerItems.value.length - 1 
    : bannerCurrentIndex.value - 1
}

const nextBanner = () => {
  bannerCurrentIndex.value = (bannerCurrentIndex.value + 1) % bannerItems.value.length
}

const setBannerSlide = (index) => {
  bannerCurrentIndex.value = index
}

const openBannerUrl = (url) => {
  window.open(url, '_blank')
}

// 生命週期
onMounted(() => {
  startBannerAutoPlay()
})

onUnmounted(() => {
  stopBannerAutoPlay()
})
</script>

<style scoped>
.banner-carousel {
  position: relative;
  width: 100%;
  height: 200px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.banner-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.banner-container {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.6s cubic-bezier(0.4, 0.0, 0.2, 1);
}

.banner-slide {
  min-width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
}

.banner-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.banner-text h3 {
  margin: 0 0 8px 0;
  color: white;
  font-size: 18px;
  font-weight: 600;
}

.banner-text p {
  margin: 0 0 12px 0;
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
}

.banner-icon {
  font-size: 48px;
  margin-left: 2rem;
}

.banner-navigation {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  pointer-events: none;
}

.nav-btn {
  pointer-events: auto;
  opacity: 0.7;
  transition: opacity 0.3s;
}

.nav-btn:hover {
  opacity: 1;
}

.banner-indicators {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
}

.indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: background 0.3s;
}

.indicator.active {
  background: white;
}
</style>`
