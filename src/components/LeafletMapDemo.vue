<template>
  <div class="leaflet-demo-container">
    <!-- 標題區域 -->
    <div style="display: flex; align-items: center; margin-bottom: 24px;">
      <h3 style="margin: 0; color: #FFFF; font-size: 24px; font-weight: bold;">
        🗺️ Vue Leaflet 互動地圖
      </h3>
      <a href="https://vue-leaflet.github.io/vue-leaflet/" target="_blank">
        <n-tooltip placement="top">
            <template #trigger>
            <n-button tertiary style="margin-left: 0.5rem; color: #fff; border: none;" size="medium" class="docs-link-btn" circle>
                <span>📖</span>
            </n-button>
            </template>
            查看 leaflet 官方文件
        </n-tooltip>
      </a>
    </div>

    <!-- 控制面板 -->
    <div class="control-panel">
      <n-space>
        <n-button type="warning" @click="resetMapView">
          🏠 重置視圖
        </n-button>
        <n-button type="success" @click="goToLocation(taipei101, '台北101')">
          🏢 台北101
        </n-button>
        <n-button type="success" @click="goToLocation(ximending, '西門町')">
          🛍️ 西門町
        </n-button>
        <n-button type="success" @click="goToLocation(nationalPalaceMuseum, '故宮博物院')">
          🏛️ 故宮博物院
        </n-button>
      </n-space>
    </div>
    <div style="margin-bottom: 16px;">
      <n-button type="info" @click="confirmSelection" :disabled="selectionPoints.length < 3" style="margin-right: 16px;">確認框選</n-button>
      <n-button type="error" @click="clearSelection" :disabled="selectionPoints.length === 0 && confirmedPolygon.length === 0">清除框選</n-button>
    </div>
    <div v-if="selectionPoints.length > 0" style="margin-top: 8px; color: #fff;">
      已選擇座標：
      <span v-for="(pt, idx) in selectionPoints" :key="idx">[{{ pt[0].toFixed(4) }}, {{ pt[1].toFixed(4) }}] </span>
    </div>

    <!-- 地圖容器 -->
    <div class="map-container">
      <l-map 
        ref="mapRef"
        :zoom="mapZoom"
        :center="mapCenter"
        style="height: 500px; width: 100%;"
        :use-global-leaflet="false"
        @click="onMapClick"
      >
        <!-- 地圖圖層 -->
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        />
        
        <!-- 台北101標記 -->
        <l-marker :lat-lng="taipei101" @click="showLocationToast('台北101')">
          <l-popup>
            <div style="text-align: center;">
              <h4 style="margin: 0 0 8px 0; color: #2c3e50;">🏢 台北101</h4>
              <p style="margin: 0; color: #666;">台北市信義區的地標建築</p>
              <p style="margin: 4px 0 0 0; font-size: 12px; color: #999;">高度: 508公尺</p>
            </div>
          </l-popup>
          <l-tooltip>台北101 - 台北地標</l-tooltip>
        </l-marker>

        <!-- 西門町標記 -->
        <l-marker :lat-lng="ximending" @click="showLocationToast('西門町')">
          <l-popup>
            <div style="text-align: center;">
              <h4 style="margin: 0 0 8px 0; color: #2c3e50;">🛍️ 西門町</h4>
              <p style="margin: 0; color: #666;">台北市萬華區的熱鬧商圈</p>
              <p style="margin: 4px 0 0 0; font-size: 12px; color: #999;">特色: 購物、美食、娛樂</p>
            </div>
          </l-popup>
          <l-tooltip>西門町 - 時尚購物區</l-tooltip>
        </l-marker>

        <!-- 故宮博物院標記 -->
        <l-marker :lat-lng="nationalPalaceMuseum" @click="showLocationToast('故宮博物院')">
          <l-popup>
            <div style="text-align: center;">
              <h4 style="margin: 0 0 8px 0; color: #2c3e50;">🏛️ 國立故宮博物院</h4>
              <p style="margin: 0; color: #666;">世界四大博物館之一</p>
              <p style="margin: 4px 0 0 0; font-size: 12px; color: #999;">館藏: 近70萬件中華文物</p>
            </div>
          </l-popup>
          <l-tooltip>故宮博物院 - 文化寶庫</l-tooltip>
        </l-marker>

        <!-- 台北市中心區域圓圈 -->
        <l-circle
          :lat-lng="[25.0375, 121.5637]"
          :radius="2000"
          :options="{
            color: '#3388ff',
            fillColor: '#3388ff',
            fillOpacity: 0.1,
            weight: 2
          }"
        />

        <!-- 使用者互動框選的暫存標記 -->
        <l-marker v-for="(pt, idx) in selectionPoints" :key="'sel-' + idx" :lat-lng="pt">
          <l-tooltip>選擇點 #{{ idx + 1 }}</l-tooltip>
        </l-marker>

        <!-- 即時連線預覽：根據點數量決定顯示方式 -->
        <!-- 2個點時顯示直線 -->
        <template v-for="(pt, idx) in selectionPoints" :key="idx">
          <l-polyline
            v-if="idx > 0"
            :lat-lngs="[selectionPoints[idx - 1], pt]"
            :color="'red'"
            :weight="2"
          />
        </template>
        
        <!-- 3個或以上點時顯示多邊形預覽 -->
        <!-- <l-polygon 
          v-if="selectionPoints.length > 0" 
          :lat-lngs="selectionPoints" 
          :color="'orange'" 
          :fillColor="'orange'" 
          :fillOpacity="0.1"
          :weight="2"
          :dashArray="'5, 10'"
        >
          <l-popup>預覽框選範圍 ({{ selectionPoints.length }} 個點)</l-popup>
        </l-polygon> -->

        <!-- 使用者確認後繪製的最終多邊形 -->
        <l-polygon 
          v-if="confirmedPolygon.length >= 3" 
          :lat-lngs="confirmedPolygon" 
          :color="'red'" 
          :fillColor="'yellow'" 
          :fillOpacity="0.3"
          :weight="3"
        >
          <l-popup>
            <div style="text-align: center;">
              <h4 style="margin: 0 0 8px 0; color: #2c3e50;">✅ 已確認框選範圍</h4>
              <p style="margin: 0; color: #666;">包含 {{ confirmedPolygon.length }} 個頂點</p>
            </div>
          </l-popup>
        </l-polygon>
      </l-map>
    </div>

    <!-- 資訊面板 -->
    <div class="info-panel">
      <n-card title="📍 當前地圖資訊" size="small">
        <p><strong>中心座標:</strong> {{ mapCenter[0].toFixed(4) }}, {{ mapCenter[1].toFixed(4) }}</p>
        <p><strong>縮放層級:</strong> {{ mapZoom }}</p>
        <p><strong>框選狀態:</strong> 
          <span v-if="selectionPoints.length === 0">未開始選擇</span>
          <span v-else-if="selectionPoints.length < 3">已選擇 {{ selectionPoints.length }} 個點 (至少需要3個點)</span>
          <span v-else>已選擇 {{ selectionPoints.length }} 個點，可以確認框選</span>
        </p>
      </n-card>
    </div>
    <!-- 功能說明 -->
    <n-divider>🔧 功能特點</n-divider>
    <n-grid cols="1 s:2 m:3" responsive="screen" :x-gap="16" :y-gap="16">
      <n-gi>
        <n-card title="🗺️ 互動地圖" size="small">
          <p>支援縮放、拖拽、點擊等互動操作</p>
        </n-card>
      </n-gi>
      <n-gi>
        <n-card title="📍 標記功能" size="small">
          <p>自訂標記點、彈出視窗、工具提示</p>
        </n-card>
      </n-gi>
      <n-gi>
        <n-card title="🎨 樣式客製" size="small">
          <p>圓圈、多邊形、線條等圖形繪製</p>
        </n-card>
      </n-gi>
      <n-gi>
        <n-card title="⚡ 即時預覽" size="small">
          <p>點擊時即時顯示框選範圍預覽</p>
        </n-card>
      </n-gi>
      <n-gi>
        <n-card title="📱 響應式" size="small">
          <p>完美適配桌面和行動裝置</p>
        </n-card>
      </n-gi>
      <n-gi>
        <n-card title="🔧 易整合" size="small">
          <p>與 Vue 3 Composition API 完美整合</p>
        </n-card>
      </n-gi>
    </n-grid>
    <n-divider>🔧 實際應用</n-divider>
    <div style="gap: 12px;">
      <div class="tech-grid">
        <a class="tech-item clickable no-underline" href="https://leafletjs.com/examples/quick-start/" target="_blank">
          <div class="tech-icon">📍</div>
          <div class="tech-content">
            <h4>Leaflet 官方 Quick Start</h4>
            <p>Leaflet 官方快速入門範例</p>
          </div>
        </a>
        <a class="tech-item clickable no-underline" href="https://openstreetmap.org/" target="_blank">
          <div class="tech-icon">📍</div>
          <div class="tech-content">
            <h4>OpenStreetMap</h4>
            <p>全球最大開放地圖平台</p>
          </div>
        </a>
        <a class="tech-item clickable no-underline" href="https://umap.openstreetmap.fr/" target="_blank">
          <div class="tech-icon">📍</div>
          <div class="tech-content">
            <h4>uMap (OpenStreetMap + Leaflet)</h4>
            <p>自訂互動地圖工具</p>
          </div>
        </a>
        <a class="tech-item clickable no-underline" href="https://leaflet-extras.github.io/leaflet-providers/preview/" target="_blank">
          <div class="tech-icon">📍</div>
          <div class="tech-content">
            <h4>Leaflet Providers Preview</h4>
            <p>Leaflet 地圖圖層預覽</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useToast } from 'vue-toastification'
import { LMap, LTileLayer, LMarker, LPopup, LTooltip, LCircle, LPolygon, LPolyline } from '@vue-leaflet/vue-leaflet'
import { NSpace, NButton, NButtonGroup } from 'naive-ui'

const toast = useToast()
const mapRef = ref(null)
const mapZoom = ref(13)
const mapCenter = ref([25.0375, 121.5637]) // 台北市中心

const taipei101 = [25.0336, 121.5650]
const ximending = [25.0424, 121.5081]
const nationalPalaceMuseum = [25.1023, 121.5485]

// 互動框選狀態
const selectionPoints = ref([]) // 暫存點
const confirmedPolygon = ref([]) // 確認後的多邊形座標

// 地圖點擊事件：新增座標到暫存點
const onMapClick = (e) => {
  if (e && e.latlng) {
    selectionPoints.value.push([e.latlng.lat, e.latlng.lng])
    toast.info(`已添加第 ${selectionPoints.value.length} 個點`)
  }
}

const confirmSelection = () => {
  if (selectionPoints.value.length >= 3) {
    confirmedPolygon.value = [...selectionPoints.value]
    selectionPoints.value = [] // 清空暫存點
    toast.success(`已確認框選範圍！包含 ${confirmedPolygon.value.length} 個頂點`)
  }
}

const clearSelection = () => {
  selectionPoints.value = []
  confirmedPolygon.value = []
  toast.info('已清除所有框選')
}

const resetMapView = () => {
  mapCenter.value = [25.0375, 121.5637]
  mapZoom.value = 13
  toast.success('地圖視圖已重置到台北市中心')
}

const goToLocation = (location, name) => {
  mapCenter.value = location
  mapZoom.value = 16
  toast.success(`已移動到 ${name}`)
}

const showLocationToast = (name) => {
  toast.info(`點擊了 ${name} 標記`)
}

// 代码示例
const basicCode = `<template>
  <l-map :zoom="13" :center="[25.0375, 121.5637]">
    <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    <l-marker :lat-lng="[25.0336, 121.5650]">
      <l-popup>台北101</l-popup>
    </l-marker>
    <l-circle :lat-lng="[25.0375, 121.5637]" :radius="2000" />
  </l-map>
</template>`

const advancedCode = `<template>
  <l-map :zoom="13" :center="[25.0375, 121.5637]" @click="onMapClick">
    <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    
    <!-- 動態預覽多邊形 -->
    <l-polygon 
      v-if="selectionPoints.length >= 3" 
      :lat-lngs="selectionPoints" 
      color="orange" 
      :dash-array="[5, 10]"
    />
    
    <!-- 確認後的多邊形 -->
    <l-polygon 
      v-if="confirmedPolygon.length >= 3" 
      :lat-lngs="confirmedPolygon" 
      color="red" 
      fill-color="yellow" 
      :fill-opacity="0.3"
    />
  </l-map>
</template>`
</script>

<style scoped>
/* 完全複用 App.vue 技術分享總結區塊卡片樣式 */
.tech-grid {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 1.5rem;
}
.tech-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  text-align: left;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  box-shadow: 
    0 4px 8px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  cursor: pointer;
  padding: 1rem 1.2rem;
}
.tech-item:hover {
  transform: translateY(-4px);
  box-shadow: 
    0 12px 24px rgba(0, 0, 0, 0.2),
    0 0 0 1px rgba(255, 255, 255, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%);
  cursor: pointer;
}
.tech-item.clickable:active {
  transform: translateY(-2px) scale(0.98);
  transition: all 0.1s ease;
}
.tech-icon {
  font-size: 2.5rem;
  margin-right: 1.2rem;
  margin-bottom: 0;
}
.tech-item h4 {
  margin: 0 0 0.2rem 0;
  color: #ffffff;
  font-size: 1.1rem;
}
.tech-item p {
  margin: 0.2rem 0 0 0;
  color: #d1d5db;
  font-size: 0.9rem;
  line-height: 1.5;
  word-break: break-word;
/* 內容區塊寬度 */
.tech-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
}
/* 實際應用卡片底色 - 偏深銀色 */
.dark-silver-card {
  background: linear-gradient(135deg, #44484e 0%, #6c6f75 100%) !important;
  border: none !important;
}
.leaflet-demo-container {
  padding: 0;
}

.control-panel {
  margin-bottom: 20px;
  padding: 16px;
  background: linear-gradient(135deg, #c4cdf71a 0%, #927da70e 100%);
  border-radius: 12px;
}

.map-container {
  margin-bottom: 20px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 2px solid #e1e8ed;
}

.info-panel {
  margin-bottom: 20px;
}

.info-panel .n-card {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  border: none;
  color: white;
}

.info-panel .n-card :deep(.n-card-header) {
  color: white;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.info-panel .n-card p {
  color: rgba(255, 255, 255, 0.9);
  margin: 8px 0;
}
/* 取消 a 標籤底線 */
.no-underline {
  text-decoration: none;
}
</style>