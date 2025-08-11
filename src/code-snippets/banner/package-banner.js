export const packageBannerCode = `<!-- Vue3-Carousel Banner套件實作 -->
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
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { useToast } from 'vue-toastification'

const toast = useToast()

// 響應式狀態
const isBannerPackageAutoPlay = ref(true)

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
  },
  {
    title: 'TypeScript 5.6',
    description: '更強的型別推斷，更好的開發者體驗',
    buttonText: '查看詳情',
    icon: '📘',
    gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    url: 'https://www.typescriptlang.org/'
  }
])

// 播放控制
const toggleBannerPackageAutoPlay = () => {
  isBannerPackageAutoPlay.value = !isBannerPackageAutoPlay.value
  toast.info('Banner Carousel ' + (isBannerPackageAutoPlay.value ? 'Playing' : 'Paused'))
}

// 外部連結
const openBannerUrl = (url) => {
  window.open(url, '_blank')
}
</script>

<style scoped>
.banner-carousel-package {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.package-banner-slide {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
}

.package-banner-content {
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

/* 覆寫 Vue3-Carousel 樣式 */
.carousel__pagination {
  padding: 12px 0 !important;
}

.carousel__pagination-button {
  width: 8px !important;
  height: 8px !important;
  border-radius: 50% !important;
  background-color: rgba(255, 255, 255, 0.5) !important;
  border: none !important;
}

.carousel__pagination-button--active {
  background-color: white !important;
}

.carousel__nav {
  position: absolute !important;
  top: 50% !important;
  transform: translateY(-50%) !important;
  background: rgba(0, 0, 0, 0.3) !important;
  border: none !important;
  color: white !important;
  width: 40px !important;
  height: 40px !important;
  border-radius: 50% !important;
}

.carousel__prev {
  left: 1rem !important;
}

.carousel__next {
  right: 1rem !important;
}
</style>`
